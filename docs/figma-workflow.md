# Figma Code Workflow — Zen Design System

> Reference for AI agents (Claude) building Figma designs from code via MCP plugin.
> Use this when generating, syncing, or auditing Figma files for the Zen DS.

**Last updated**: 2026-04-13

## Connection
- **Option A — Figma Desktop Bridge** (WebSocket `ws://localhost:9227`)
  - Tools: `figma_execute`, `figma_search_components`, `figma_take_screenshot`
  - Uses local nodeId (session-specific)
- **Option B — Official Figma MCP** (HTTP `https://mcp.figma.com/mcp`)
  - Setup: `claude mcp add --transport http figma https://mcp.figma.com/mcp`
  - Auth: call `mcp__figma__authenticate` first time, open OAuth URL in browser
  - Tools: `mcp__figma__use_figma`, `mcp__figma__search_design_system`, `mcp__figma__get_screenshot`
  - Uses component **key** (stable across sessions)
  - Must load `figma:figma-use` skill (via `Skill` tool) before every `use_figma` call
  - **Note**: `figma-remote-mcp` is deprecated — use `mcp__figma` (HTTP) instead
- Node ID from URL: `node-id=4349-101130` → `4349:101130`
- File key from URL: `figma.com/design/:fileKey/...` → extract `:fileKey`

## Optimized Flow

### If component key + properties are cached (2 calls — fastest)
| Call | Tool | Action |
|------|------|--------|
| 1 | `use_figma` / `figma_execute` | Import by key → create wrapper → create all sections + instances + setProperties |
| 2 | `get_screenshot` / `figma_take_screenshot` | Visual verify |

### If component key is unknown (3 calls)
| Call | Tool | Action |
|------|------|--------|
| 1 | `search_design_system` / `figma_search_components` | Find component key |
| 2 | `use_figma` / `figma_execute` | Import + discover props + create everything |
| 3 | `get_screenshot` / `figma_take_screenshot` | Visual verify |

### If nothing is known (5 calls — discovery mode)
| Call | Tool | Action |
|------|------|--------|
| 1 | `search_design_system` | Find component key |
| 2 | `use_figma` | Import + read variant names + read component properties |
| 3 | `use_figma` | Create wrapper frame |
| 4 | `use_figma` | Create all sections + instances |
| 5 | `get_screenshot` | Visual verify |

**Key insight**: Cache component keys + property keys + variant patterns in this file → skip discovery → 2 calls total.

## Key Techniques

### Batch instantiation (use createInstance, not figma_instantiate_component)
```js
const compSet = await figma.getNodeByIdAsync('239:16847');
const variant = compSet.children.find(c => c.name === 'Size=XLarge, Theme=Box, Expanded=No');
const inst = variant.createInstance();
parent.appendChild(inst);
inst.layoutSizingHorizontal = 'FILL';
```

### Font loading — do once at top
```js
await Promise.all([
  figma.loadFontAsync({ family: 'Inter', style: 'Regular' }),
  figma.loadFontAsync({ family: 'Inter', style: 'Medium' }),
  figma.loadFontAsync({ family: 'Inter', style: 'Semi Bold' }),
]);
```

### Text editing — BEST: exposed component properties (no detach!)
If component author exposes text as TEXT component property:
```js
// Find inner instance that has the text property
const inner = inst.findOne(n => n.type === 'INSTANCE' && n.componentProperties?.['Title#239:80']);
inner.setProperties({
  'Title#239:80': 'New title',
  'Text#239:87': 'New body text',
});
// ✅ No detach, no font loading, keeps component link
```

How to discover property keys:
```js
const props = inst.componentProperties;
// → { 'Title#239:80': { type: 'TEXT', value: '...' }, ... }
// Property keys include node ID suffix like #239:80
```

For nested components, walk children to find which instance holds the TEXT props:
```js
function findProps(node, depth = 0) {
  if (node.type === 'INSTANCE') {
    const textProps = Object.entries(node.componentProperties)
      .filter(([k, v]) => v.type === 'TEXT');
    if (textProps.length) return { node, textProps };
  }
  if (depth < 3 && 'children' in node)
    for (const c of node.children) { const r = findProps(c, depth+1); if (r) return r; }
}
```

### Text editing inside SLOT — setProperties on SLOT children
Text inside a SLOT is rendered by a **child instance** within the SLOT node, NOT by the parent's TEXT property.
The parent may store a TEXT property value, but the SLOT child overrides it visually.

**Pattern:** parent TEXT prop sets title, SLOT child's TEXT prop sets body.
```js
// Step 1: Set title on the Content instance
const contentInst = acc.findOne(n => n.type === 'INSTANCE' && n.name.includes('Content'));
contentInst.setProperties({ 'Title#239:80': 'New title' });

// Step 2: Set body text on the SLOT child instance
const slot = contentInst.findOne(n => n.type === 'SLOT');
slot.children[0].setProperties({ 'Text#4781:1': 'New body text' });
// ✅ No detach, keeps component link
```

**How to discover SLOT child properties:**
```js
const slot = contentInst.findOne(n => n.type === 'SLOT');
const slotChild = slot.children[0];
const props = slotChild.componentProperties;
// → { 'Text#4781:1': { type: 'TEXT', value: '...' } }
```

**Important notes:**
- SLOT children only exist when the variant exposes them (e.g. `Expanded=Yes`)
- Collapsed variants (`Expanded=No`) may not have SLOT children accessible
- You can also `clone()` a SLOT child to duplicate items (e.g. add more stepper steps)
- Cloned items are still INSTANCE type — use `setProperties()` if they have TEXT props, otherwise `detachInstance()` + edit

### Text editing priority
1. **`setProperties()`** on instance with TEXT props → best, no detach
2. **`setProperties()`** on SLOT child instance → for body/content text in SLOTs
3. **`findAll` + `.characters`** → for shallow accessible text nodes
4. **`detachInstance()` + edit** → last resort, breaks component link
```

### Text editing — FALLBACK: detach instance
- Only use when TEXT properties are NOT exposed
- Direct text nodes: `inst.findAll(n => n.type === 'TEXT')` → edit `.characters`
- SLOT/deeply nested: must `inst.detachInstance()` first, then recurse detach nested instances, then edit text
- Always `await figma.loadFontAsync(textNode.fontName)` before setting `.characters`
- ⚠️ Detach breaks component link — avoid when possible

### Auto-layout frame setup
```js
const frame = figma.createFrame();
frame.layoutMode = 'VERTICAL';
frame.primaryAxisSizingMode = 'AUTO'; // hug content vertically
frame.counterAxisSizingMode = 'FIXED'; // fixed width
frame.resize(800, 100); // width matters, height auto
frame.paddingTop = 32; frame.paddingBottom = 32;
frame.paddingLeft = 32; frame.paddingRight = 32;
frame.itemSpacing = 24;
frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
```

### Child sizing (must set AFTER appendChild)
```js
parent.appendChild(child);
child.layoutSizingHorizontal = 'FILL'; // ← AFTER append, not before
child.layoutSizingVertical = 'HUG';
```

## Template System (future optimization)

```js
const template = {
  frame: { w: 800, padding: 32, gap: 32, bg: '#FFFFFF', radius: 16 },
  title: { text: 'Page Title', fontSize: 32, fontStyle: 'Semi Bold' },
  children: [
    {
      componentId: '239:16847',
      variant: 'Size=XLarge, Theme=Box, Expanded=No',
      fill: true,
      textOverrides: { 'Title': 'Custom title' }
    },
  ]
};

async function buildFromTemplate(template, parentId) {
  // Load fonts
  // Create frame
  // Loop children: find variant → createInstance → appendChild → set sizing → update text
  // Return frame id
}
```

## Component Key Reference (Zen DS)

| Component | nodeId | key |
|---|---|---|
| Accordion/Text | 239:16847 | 583aee24... |
| Metric-Card | 595:55410 | 6b8373a8... |
| Button/Main | 1026:8312 | 18a3a33834c2f39e891dbce1d363de13e98e8458 |
| Button/Flat-N | 1070:18754 | 1cf3d7ab4dc113239c240117c388924fbe1a1d73 |
| Button/Icon-Main | — | 074dcc738e40a66fed35fdf890d63fd1c1152a92 |
| Button/Icon-Flat | 234:43906 | a29e0f0314d3d162e0c2cf43262ffeb59b70f6ff |
| Button/Overlay | — | 707b1ee6b4d631898c2bc47c916ae8d78483465f |
| Button/Icon-Overlay | — | 29c71703b8a9fcc468dd03e68debf4398b123298 |
| Avatar/Single | 223:9050 | c391e4d8... |
| Avatar/Group | 364:92561 | 20b39555... |
| Badge | 260:4825 | 191f97a2c7ad7aba44fd8a2d1a3f81d73e98d2fc |
| Checkbox/Checkbox | 308:46604 | 5e79bf20d9f6e610eef02d4d9684f81d64c6fcfa |
| Checkbox/Check-Mark | — | 7fb5e7a7e47e30c5982e5d540039b4b39a679850 |
| Date-Picker/Single-Calendar | — | 36df3c91e6cdd6977ba06673fdf6f635be65f98f |
| Date-Picker/Dual-Calendar | — | 94775a761bb6ef362eb5c6921e0f1ec80c915238 |
| Chip/Normal | — | f0808521e0ebcca154432c50ad684f30f2b96be2 |
| Chip/Single | — | a678c149f7980cea701430b6407c5852480e6834 |
| Chip/Advanced | — | ebae7e2a0fb97db78cdbcf096a8bad9a0e59689a |
| Modal/Dialog | — | ddc5405a9df0ebdab5ede9d5086f3f614d1a70d7 |
| Modal/Forms | — | b0c53f72e3c0f04237a92de0e1a028500284f650 |
| List-Item | — | d87773b0c08898197e0b4c2787e8826a6029b517 |
| Input/Text-Field | 421:4108 | 742f35b2dc8a34341259b19b28e39090d9b45aa4 |
| Input/Number-Left | 421:10057 | 27ea2bac... |
| Search/Default | 846:37624 | 6ece0df1... |
| Divider | 460:38361 | b3824aff... |
| Radio-Button | 373:96272 | 86ef3f5a... |
| Checkbox | 309:46871 | 15072da2... |
| Toggle | 1526:5703 | a5134e3a... |
| Pagination | — | ef6c04b60f136c7d651cfbe3d24523b96b157f23 |
| Popover/Default | — | 51370dd9374fd044bdc0a53e616ef828070acaa4 |
| Popover/Item | — | 00c4693730dfb827d655212b507caee6a13a22b0 |
| Stepper/Vertical | 1625:8656 | 8d3297fd... |
| Progress-Bar | 1536:260 | cb63411b... |
| Rating/Star | 1536:26008 | 43a8151f... |
| Slider/Horizontal | 4010:35946 | ed273f56... |
| List-Item | 4080:11700 | 10df150d... |
| Chip/Normal | 1536:26687 | dc4f5b64... |
| Chip/Advanced | 512:7659 | 146bed3b... |
| Tag | 288:32046 | ff18cf32... |
| Segmented | — | 920452acfb2ae5077a0b28d655752f1acdca6532 |
| Segmented/Item | — | 4ffed528fc3bb6e087940f1b056fc099d217ca02 |
| Pagination | 774:29083 | 69db6a81... |
| Inline-Message | 595:54857 | f989e6d0... |
| Tab-Bar | 1577:5477 | 857f0060... |
| Breadcrumbs | 4031:20161 | 2db401d6... |

## Component Rendering Recipes

### Alert Banner
- **Component set nodeId**: search via `figma_search_components` for "Alert-Banner"
- **Variants**: `Size=Medium, Theme={Default|Info|Positive|Warning|Negative}` and `Size=Small, Theme=...`
- **Component properties on Alert-Banner instance**:
  - `Action#234:408` (BOOLEAN) — show/hide action button
  - `Leading#234:397` (BOOLEAN) — show/hide leading icon
  - `Size` (VARIANT) — "Medium" or "Small"
  - `Theme` (VARIANT) — "Default", "Info", "Positive", "Warning", "Negative"
- **Text editing**: Message text is accessible via `findAll(n => n.type === 'TEXT')` + `.characters` (no detach needed)
- **Action button text**: The button inside is an INSTANCE named "Button/Overlay" with TEXT property `Text#1026:1409`. Update via:
  ```js
  const btn = alertInst.findOne(n => n.type === 'INSTANCE' && n.name.includes('Button'));
  btn.setProperties({ 'Text#1026:1409': 'Custom label' });
  ```
- **Close icon**: Rendered automatically, no text to edit
- **Full recipe** (single figma_execute call):
  ```js
  // 1. Get component set
  const compSet = await figma.getNodeByIdAsync('<alert-banner-nodeId>');

  // 2. Find variant & instantiate
  const variant = compSet.children.find(c => c.name === 'Size=Medium, Theme=Info');
  const inst = variant.createInstance();
  parent.appendChild(inst);
  inst.layoutSizingHorizontal = 'FILL';

  // 3. Update message text
  await figma.loadFontAsync({ family: 'Inter', style: 'Medium' });
  const textNodes = inst.findAll(n => n.type === 'TEXT');
  // textNodes[0] = message text (skip icon/button text)
  const msgNode = textNodes.find(t => t.characters.length > 5); // message is longest
  if (msgNode) {
    await figma.loadFontAsync(msgNode.fontName);
    msgNode.characters = 'Your custom message here';
  }

  // 4. Update action button label (Medium only)
  const btn = inst.findOne(n => n.type === 'INSTANCE' && n.name.includes('Button'));
  if (btn) btn.setProperties({ 'Text#1026:1409': 'Upgrade' });
  ```

### Avatar
- **Component set nodeId**: `223:9050` (Avatar/Single), `364:92561` (Avatar/Group)
- **Variants (Avatar/Single)**: `Shape={Circle|Square}, Size={2XLarge|XLarge|Large|Medium|Small|XSmall}, Color={Photo|Accent|Neutral|Orange|Red|Crimson|Pink|Plum|Purple|Violet|Indigo|Blue|Cyan|Teal|Green|Brown|Yellow}, Background={Subtle|Solid}`
- **Variants (Avatar/Group)**: `Size={Medium|Small|XSmall}, Background={Subtle|Solid}, Number={1|2|3|4|5}`
- **Text editing**: Avatar uses initials (single letter) — no TEXT component property exposed. Text shows via variant default.
- **No detach needed** — avatars don't require text editing; color/shape/size are all controlled by variant selection.
- **Full recipe**:
  ```js
  const compSet = await figma.getNodeByIdAsync('223:9050');
  // Find specific variant
  const variant = compSet.children.find(c =>
    c.name === 'Shape=Circle, Size=Large, Color=Accent, Background=Subtle'
  );
  const inst = variant.createInstance();
  parent.appendChild(inst);
  ```
- **Avatar Group recipe**:
  ```js
  const groupSet = await figma.getNodeByIdAsync('364:92561');
  const variant = groupSet.children.find(c =>
    c.name === 'Size=Medium, Background=Subtle, Number=5'
  );
  const inst = variant.createInstance();
  parent.appendChild(inst);
  ```
- **Notes**:
  - Figma has 6 sizes (no 2XSmall), code also has 6 sizes — they match
  - "Photo" is a Color variant in Figma; in code it's handled by `src` prop
  - Status is handled by separate `.Primitives/Avatar/Status/` components in Figma, not part of Avatar/Single variants

### Badge
- **Component key**: `191f97a2c7ad7aba44fd8a2d1a3f81d73e98d2fc` (component_set)
- **Variants**: `Size={Medium|Small}, Theme={Neutral|Inverse|Accent|Yellow|Orange|Red|Crimson|Pink|Plum|Purple|Violet|Indigo|Blue|Cyan|Teal|Green|Brown}, Background={Solid|Subtle}`
- **Total**: 66 variants (2 sizes × 17 themes × 2 backgrounds, minus Inverse only has Solid)
- **Component properties**:
  - `Text#1537:0` (TEXT) — badge label
  - `Leading-Icon#1037:1510` (BOOLEAN) — show/hide dot icon
  - `Remove#855:93` (BOOLEAN) — show/hide remove × button
  - `Leading-Icon-Src#1493:0` (INSTANCE_SWAP) — swap dot for custom icon
- **No detach needed** — all text and toggles via `setProperties()`
- **Code vs Figma diff**: Code has `Ghost` variant — Figma does not
- **Full recipe** (via `use_figma` / official MCP):
  ```js
  const badgeSet = await figma.importComponentSetByKeyAsync('191f97a2c7ad7aba44fd8a2d1a3f81d73e98d2fc');
  const variant = badgeSet.children.find(c =>
    c.name === 'Size=Medium, Theme=Accent, Background=Subtle'
  );
  const inst = variant.createInstance();
  parent.appendChild(inst);
  inst.setProperties({
    'Text#1537:0': 'Custom label',
    'Remove#855:93': true,           // show × button
    'Leading-Icon#1037:1510': false,  // hide dot
  });
  ```
- **Full recipe** (via `figma_execute` / Desktop Bridge):
  ```js
  const badgeSet = await figma.getNodeByIdAsync('260:4825');
  // same findVariant + createInstance + setProperties pattern
  ```

### Button
- **Component sets** (all keys confirmed):
  - `Button/Main` — key `18a3a33834c2f39e891dbce1d363de13e98e8458`
  - `Button/Flat-N` — key `1cf3d7ab4dc113239c240117c388924fbe1a1d73`
  - `Button/Icon-Main` — key `074dcc738e40a66fed35fdf890d63fd1c1152a92`
  - `Button/Icon-Flat` — key `a29e0f0314d3d162e0c2cf43262ffeb59b70f6ff`
  - `Button/Overlay` (inverse/white/overlay) — key `707b1ee6b4d631898c2bc47c916ae8d78483465f`
  - `Button/Icon-Overlay` — key `29c71703b8a9fcc468dd03e68debf4398b123298`
- **Variant pattern** (Button/Main): `Size=Medium (Base), Level=Primary, State=Default`
  - Sizes: `XLarge`, `Large`, `Medium (Base)`, `Small`, `XSmall`
  - Levels: `Primary`, `Accent`, `Secondary`, `Tertiary`, `Danger`, `Danger Subtle`, `Positive`, `Positive Subtle`
  - States: `Default`, `Hover`, `Pressed`, `Focused`, `Disabled`
- **Variant pattern** (Button/Overlay): `Size=Medium (Base), Level=Inverse, State=Default`
  - Levels: `Inverse`, `White`, `White Overlay`, `Black Overlay`, `Outline`
- **Component properties (Button/Main & Button/Flat-N)**:
  - `Leading-Icon#1026:0` (BOOLEAN)
  - `Trailing-Icon#1026:402` (BOOLEAN)
  - `Text#1026:804` (TEXT)
- **Component properties (Button/Overlay)**:
  - `Leading-Icon#1026:1005` (BOOLEAN)
  - `Trailing-Icon#1026:1207` (BOOLEAN)
  - `Text#1026:1409` (TEXT)
- **Full recipe**:
  ```js
  const mainSet = await figma.importComponentSetByKeyAsync('18a3a33834c2f39e891dbce1d363de13e98e8458');
  const variant = mainSet.children.find(c =>
    c.name.includes('Level=Primary') &&
    c.name.includes('Size=Medium') &&
    c.name.includes('State=Default')
  );
  const inst = variant.createInstance();
  inst.setProperties({
    'Leading-Icon#1026:0': true,
    'Trailing-Icon#1026:402': false,
    'Text#1026:804': 'Button Label'
  });
  parent.appendChild(inst);
  ```
- **Notes**:
  - Icon buttons use `Button/Icon-Main` / `Button/Icon-Flat` — no text property, icon via `Icon-Src#1493:773`
  - Overlay buttons need dark bg for visual verification
  - `disabled` token was fixed: `--color-bg-fill-disabled` → `neutral-3` (#f0f0f0), not `neutral-7`

### Checkbox
- **Component key**: `5e79bf20d9f6e610eef02d4d9684f81d64c6fcfa` (Checkbox/Checkbox)
- **Check-Mark sub-component key**: `7fb5e7a7e47e30c5982e5d540039b4b39a679850` (Checkbox/Check-Mark)
- **Variant pattern**: `State=Default, Select=No, Check-Side=Left`
  - State: `Default`, `Hover`, `Focus`, `Disabled`
  - Select: `No`, `Yes`
  - Check-Side: `Left`, `Right`
- **Total**: 16 variants (4 × 2 × 2)
- **Component properties**:
  - `Caption#309:249` (BOOLEAN) — show/hide caption text
  - `Content#4081:94` (SLOT) — contains label text instance
  - `State` (VARIANT), `Select` (VARIANT), `Check-Side` (VARIANT)
- **Text editing — uses SLOT child pattern**:
  - Label text is inside a SLOT child instance, NOT a direct TEXT property
  - SLOT child `Content` has TEXT property `Content#40010042:0`
  - Caption text is a separate text node (not editable via setProperties — need font load + `.characters`)
  ```js
  // Edit label via SLOT child
  const slot = inst.findOne(n => n.type === 'SLOT');
  const contentInst = slot.children[0]; // Content instance
  contentInst.setProperties({ 'Content#40010042:0': 'Custom label' });
  // ✅ No detach needed
  ```
- **Full recipe**:
  ```js
  const compSet = await figma.importComponentSetByKeyAsync('5e79bf20d9f6e610eef02d4d9684f81d64c6fcfa');
  const variant = compSet.children.find(c =>
    c.name.includes('State=Default') &&
    c.name.includes('Select=Yes') &&
    c.name.includes('Check-Side=Left')
  );
  const inst = variant.createInstance();
  inst.setProperties({ 'Caption#309:249': true });
  parent.appendChild(inst);

  // Update label text
  const slot = inst.findOne(n => n.type === 'SLOT');
  slot.children[0].setProperties({ 'Content#40010042:0': 'Accept terms' });
  ```
- **Code vs Figma diff**:
  - Code has `label` prop (string) — Figma uses SLOT child TEXT property
  - Code can omit `label` for no-label checkbox — Figma always shows default "Checkbox label" (SLOT can't be empty)
  - Hover/Focus states are CSS pseudo-classes in code, explicit variants in Figma

### Calendar (Date-Picker/Single-Calendar)
- **Component key**: `36df3c91e6cdd6977ba06673fdf6f635be65f98f` (component_set)
- **Dual-Calendar key**: `94775a761bb6ef362eb5c6921e0f1ec80c915238` (single component, not set)
- **Variant pattern**: `State=Default`
  - State: `Default`, `Select-Month-Year`
- **Total**: 2 variants
- **Component properties**:
  - `Time-Picker#510:0` (BOOLEAN) — show/hide time picker (From/To + All day)
  - `Actions#510:1` (BOOLEAN) — show/hide Cancel/Submit buttons
- **No text editing needed** — dates are pre-rendered in the component
- **Full recipe**:
  ```js
  const compSet = await figma.importComponentSetByKeyAsync('36df3c91e6cdd6977ba06673fdf6f635be65f98f');
  const variant = compSet.children.find(c => c.name.includes('State=Default'));
  const inst = variant.createInstance();
  inst.setProperties({
    'Time-Picker#510:0': true,
    'Actions#510:1': true
  });
  parent.appendChild(inst);
  ```
- **Code vs Figma diff**:
  - Code props `timePicker` ↔ `Time-Picker#510:0`, `actions` ↔ `Actions#510:1` — direct match
  - Code has runtime-only features not in Figma: `eventDates` (dots on dates), `minDate`/`maxDate` (disabled date range), `weekStartsOnMonday`, `onChange`/`onSubmit`/`onCancel`
  - Figma `Select-Month-Year` state = code's month/year picker view (toggled by clicking header)

### Chip
- **Component sets** (ZEN Kaiz):
  - `Chip/Normal` — key `f0808521e0ebcca154432c50ad684f30f2b96be2` (72 variants)
  - `Chip/Single` — key `a678c149f7980cea701430b6407c5852480e6834` (24 variants, text-only)
  - `Chip/Advanced` — key `ebae7e2a0fb97db78cdbcf096a8bad9a0e59689a` (42 variants, has dropdown/remove)
- **Variant pattern** (Chip/Normal): `Size=Medium, Level=Primary, Theme=Text-Only, State=Default, Select=No`
  - Size: `Small`, `Medium`
  - Level: `Primary`, `Secondary`
  - Theme: `Text-Only`, `Leading-Icon`, `Leading-Photo`
  - State: `Default`, `Hover`, `Focused`
  - Select: `No`, `Yes`
- **Variant pattern** (Chip/Advanced): same axes but Level only `Secondary`, State adds `Press`
- **Component properties** (Chip/Normal):
  - `Icon-Src#4060:30` (INSTANCE_SWAP) — leading icon
- **Text editing — direct text node** (not SLOT, not TEXT property):
  - Find text node by name `Label` and set `.characters`
  - Must load font first: `Inter Semi Bold`
  ```js
  await figma.loadFontAsync({ family: 'Inter', style: 'Semi Bold' });
  const textNode = inst.findOne(n => n.type === 'TEXT' && n.name === 'Label');
  textNode.characters = 'Custom label';
  ```
- **Full recipe**:
  ```js
  const normalSet = await figma.importComponentSetByKeyAsync('f0808521e0ebcca154432c50ad684f30f2b96be2');
  const variant = normalSet.children.find(c =>
    c.name.includes('Size=Medium') &&
    c.name.includes('Level=Primary') &&
    c.name.includes('Theme=Leading-Icon') &&
    c.name.includes('State=Default') &&
    c.name.includes('Select=Yes')
  );
  const inst = variant.createInstance();
  parent.appendChild(inst);

  // Update label
  await figma.loadFontAsync({ family: 'Inter', style: 'Semi Bold' });
  const textNode = inst.findOne(n => n.type === 'TEXT' && n.name === 'Label');
  textNode.characters = 'Filter';
  ```
- **Code vs Figma diff**:
  - Code `level` ↔ Figma `Level` (Primary/Secondary) — direct match
  - Code `size` (s/m) ↔ Figma `Size` (Small/Medium) — direct match
  - Code `leading` (ReactNode) ↔ Figma `Theme=Leading-Icon` or `Leading-Photo`
  - Code `dropdown` + `onRemove` ↔ Figma uses separate `Chip/Advanced` component set (has dropdown chevron + remove ×)
  - Code `disabled` prop — Figma has no disabled state
  - Code `trailing` prop — Figma does not have trailing element
  - Figma `Leading-Photo` theme — code uses `leading` prop with custom avatar/image ReactNode

### Dialog (Modal/Dialog)
- **Component key**: `ddc5405a9df0ebdab5ede9d5086f3f614d1a70d7` (component_set)
- **Variant pattern**: `Theme=Default`
  - Theme: `Default`, `Info`, `Positive`, `Warning`, `Negative`
- **Total**: 5 variants
- **Component properties**: only `Theme` (VARIANT) — no TEXT properties exposed at top level
- **Text editing — deep nested traversal** (no `findAll` — crashes on deep nodes):
  - Heading: `Container > Content-Container(INST) > Contents(SLOT) > Header > Heading-Div > Content > Heading-Text(INST) > Frame > Heading(TEXT)`
  - Caption: `Container > Content-Container(INST) > Contents(SLOT) > Caption-Container > Caption(TEXT)`
  - Buttons: `Container > Actions > Buttons(INST) > Container > Secondary(INST) + Primary(INST)` — both have `Text#1026:804`
  - Must use name-based `.find()` at each level, NOT `.findAll()` (crashes on deep instance refs)
  - Must load fonts: `Inter Semi Bold` (heading + buttons), `Inter Regular` (caption)
  ```js
  // Heading
  const container = inst.children.find(c => c.name === 'Container');
  const cc = container.children.find(c => c.name === 'Content-Container');
  const slot = cc.children.find(c => c.name === 'Contents');
  const header = slot.children.find(c => c.name === 'Header');
  const hDiv = header.children.find(c => c.name === 'Heading-Div');
  const content = hDiv.children.find(c => c.name === 'Content');
  const hTextInst = content.children.find(c => c.name === 'Heading-Text');
  const textNode = hTextInst.children[0].children.find(c => c.type === 'TEXT');
  textNode.characters = 'My Heading';

  // Caption
  const captionCont = slot.children.find(c => c.name === 'Caption-Container');
  captionCont.children.find(c => c.type === 'TEXT').characters = 'My caption';

  // Buttons
  const actions = container.children.find(c => c.name === 'Actions');
  const btnCont = actions.children.find(c => c.name === 'Buttons').children.find(c => c.name === 'Container');
  btnCont.children.find(c => c.name === 'Primary').setProperties({ 'Text#1026:804': 'Confirm' });
  btnCont.children.find(c => c.name === 'Secondary').setProperties({ 'Text#1026:804': 'Cancel' });
  ```
- **Full recipe**:
  ```js
  const compSet = await figma.importComponentSetByKeyAsync('ddc5405a9df0ebdab5ede9d5086f3f614d1a70d7');
  const variant = compSet.children.find(c => c.name.includes('Theme=Warning'));
  const inst = variant.createInstance();
  parent.appendChild(inst);
  // Then use traversal above to update heading/caption/buttons
  ```
- **Code vs Figma diff**:
  - Code `theme` ↔ Figma `Theme` — direct match (5 values)
  - Code `title` → Figma deep-nested heading TEXT
  - Code `description` → Figma caption TEXT
  - Code `primaryLabel`/`secondaryLabel` → Figma button instances `Text#1026:804`
  - Code has runtime-only: `open`, `onClose`, `onPrimary`, `onSecondary`, `portalTarget`, `inline`
  - **Pitfall**: `findAll`/`findOne` crashes on Dialog due to deeply nested instance refs — must use manual `.children.find()` traversal

### ListItem
- **Component key**: `d87773b0c08898197e0b4c2787e8826a6029b517` (component_set)
- **Variant pattern**: `State=Default`
  - State: `Default`, `Hover`, `Selected`
- **Total**: 3 variants
- **Component properties**: `Contents#4080:6` (SLOT) — contains Avatar, Info-Content, Trailing
- **Text editing — SLOT deep traversal with index access** (avoid iterating all children):
  - Title: `inst > SLOT(Contents) > Info-Content(INST) > Content(SLOT) > children[0]` (TEXT "Title")
  - Subtitle: `inst > SLOT(Contents) > Info-Content(INST) > Content(SLOT) > children[1]` (TEXT "Subtitle")
  - Must find Info-Content by name with try/catch (some SLOT children crash on `.name`)
  - Access Title/Subtitle by index, NOT by iterating — other children in Content SLOT crash
  - Must load fonts: `Inter Semi Bold` (title), `Inter Regular` (subtitle), `Inter Medium` (avatar)
  ```js
  const inst = await figma.getNodeByIdAsync(instId);
  const slot = inst.children[0]; // Contents SLOT
  let infoContent = null;
  for (let j = 0; j < slot.children.length; j++) {
    try { if (slot.children[j].name.includes('Info-Content')) { infoContent = slot.children[j]; break; } }
    catch(e) { continue; }
  }
  const contentSlot = infoContent.children[0]; // Content SLOT
  contentSlot.children[0].characters = 'My Title';   // Title TEXT (by index)
  contentSlot.children[1].characters = 'My Caption';  // Subtitle TEXT (by index)
  ```
- **Code vs Figma diff**:
  - Code `leading` is optional (icon, avatar, or nothing) — Figma SLOT always shows Avatar + Trailing (+)
  - Code `trailing` is optional (badge, chevron, chip) — Figma always shows default trailing action
  - Code can omit `caption` for title-only — Figma always shows "Caption" placeholder
  - Code `selected` ↔ Figma `State=Selected` ✅
  - Figma Avatar color/initials in SLOT are hard to customize (deep nested, crashes on traversal)
  - **Limitation**: Figma ListItem SLOT structure is fixed — cannot hide avatar/trailing like code

### Modal (Modal/Forms)
- **Component key**: `b0c53f72e3c0f04237a92de0e1a028500284f650` (component_set)
- **Variant pattern**: `Layout=Basic`
  - Layout: `Basic`, `Fixed-Left`, `Half-Half`, `3-4`, `Big`
- **Total**: 5 variants
- **Component properties**:
  - `Main-Contents#4080:0` (SLOT) — body content
  - `Side-Content#4267:15` (SLOT) — side panel (multi-column only)
- **Structure**:
  - Single column (Basic, Big): `inst > Container > Header(INST) + Body + Footer`
  - Multi column (Fixed-Left, Half-Half, 3-4): `inst > Content > Side-Content(FRAME) + Container > Header(INST) + Body/Placeholder + Footer`
- **Body SLOT manipulation** — can replace placeholder with real components:
  ```js
  const container = inst.children[0]; // Container (single) or Content (multi)
  // Single column:
  const body = container.children.find(n => n.name === 'Body');
  const mainSlot = body.children.find(n => n.type === 'SLOT' || n.name === 'Main-Contents');
  const placeholder = mainSlot.children.find(n => n.name === 'Item');
  if (placeholder) placeholder.remove();
  // Add real components:
  const form = figma.createFrame();
  form.layoutMode = 'VERTICAL';
  form.primaryAxisSizingMode = 'AUTO';
  form.counterAxisSizingMode = 'AUTO';
  form.itemSpacing = 12;
  form.fills = [];
  // Add InputField instances, Checkbox instances, etc.
  mainSlot.appendChild(form);
  form.layoutSizingHorizontal = 'FILL';
  ```
- **Side SLOT manipulation** (multi-column):
  ```js
  const topFrame = inst.children[0]; // Content frame
  const sideFrame = topFrame.children.find(n => n.name === 'Side-Content');
  const sideSlot = sideFrame.children.find(n => n.type === 'SLOT' || n.name === 'Side-Content');
  const sideItem = sideSlot.children.find(n => n.name === 'Item');
  if (sideItem) sideItem.remove();
  // Add custom content (nav, image placeholder, etc.)
  sideSlot.appendChild(customContent);
  ```
- **Text editing** — same deep pattern as Dialog:
  - Caption: `Header(INST) > SLOT > Caption-Container > Caption(TEXT)` — `findTextByName(headerInst, 'Caption', 0, 6)`
  - Heading: depth 9+ — crashes on traverse (known limitation)
  - Buttons: `Footer > Buttons(INST) > Container > Primary/Secondary` — `setProperties({'Text#1026:804': label})`
- **InputField inside Modal — leading icon setup**:
  - InputField key: `742f35b2dc8a34341259b19b28e39090d9b45aa4`
  - Leading icon is hidden by default (`visible: false`)
  - To show: `Field > Container > Leading` → set `visible = true`
  - Set icon mode: `leading.setProperties({ 'Icon': 'Yes', 'Photo': 'No', 'Label': 'No', 'Dropdown': 'No' })`
  - Swap icon: `leading.setProperties({ 'Icon-Src#1495:1343': importedIconComponent.id })`
  - Icon keys: user=`b78670b29d3564121d5345e47c82a41430b2b976`, mail=`bd31c7c58e45cfb64f374008bddfa8d141551364`, lock=`f69377164fcf62cd2166f50ac147487560e63c46`
  - InputField text: Label=`findTextByName(inst, 'Label', 0, 4)`, Placeholder=`findTextByName(inst, 'Text', 0, 5)`
- **Code vs Figma diff**:
  - Code `layout` ↔ Figma `Layout` — exact match (basic/big/fixed-left/half-half/3-4) ✅
  - Code `children` (body) ↔ Figma `Main-Contents` SLOT — can replace placeholder with real components
  - Code `sideSlot` ↔ Figma `Side-Content` SLOT — same pattern
  - Code `title`/`caption` → Figma Header deep nested (heading crashes at depth 9+)
  - **Token fix found**: InputField leading icon color was `--color-content-neutral-primary` in code but `rgba(0,0,0,0.447)` ≈ `--color-content-neutral-tertiary` in Figma → fixed FieldShell.module.css `.addon` color

### Pagination
- **Component key**: `ef6c04b60f136c7d651cfbe3d24523b96b157f23` (component_set)
- **Variant pattern**: `Theme=Primary`
  - Theme: `Primary`, `Secondary`, `Inline`, `Manually`
- **Total**: 4 variants
- **Component properties**: only `Theme` (VARIANT) — no extra props
- **No text editing needed** — page numbers and range text are pre-rendered
- **Full recipe**:
  ```js
  const compSet = await figma.importComponentSetByKeyAsync('ef6c04b60f136c7d651cfbe3d24523b96b157f23');
  const variant = compSet.children.find(c => c.name.includes('Theme=Primary'));
  const inst = variant.createInstance();
  parent.appendChild(inst);
  ```
- **Code vs Figma diff**:
  - Code `theme` (primary/secondary/inline) ↔ Figma `Theme` (Primary/Secondary/Inline/Manually)
  - Figma has extra `Manually` theme — code doesn't have this variant
  - Code computes ellipsis `...` dynamically via `getPageRange()` — Figma renders static
  - Code `onChange`/`onPageSizeChange` — runtime only
  - Code `page`, `totalPages`, `total`, `pageSize` — runtime state, Figma shows fixed default values

### Popover
- **Component keys**:
  - `Popover/Default` — key `51370dd9374fd044bdc0a53e616ef828070acaa4` (single component)
  - `Primitives/Popover/Item` — key `00c4693730dfb827d655212b507caee6a13a22b0` (component_set, 3 variants)
- **Popover properties**:
  - `Search#4031:33` (BOOLEAN) — show/hide search input
  - `Label#4031:34` (BOOLEAN) — show/hide label header
  - `Scroll-Bar#4031:35` (BOOLEAN) — show/hide scrollbar
  - `Item-List#4031:28` (SLOT) — contains popover items
- **Item variant pattern**: `Select-Control=No, State=Default`
  - State: `Default`, `Hover`, `Single-Selected`
- **Item properties**:
  - `Trailing#846:36` (BOOLEAN) — show trailing action
  - `Content#4031:29` (SLOT) — contains inner Item instance
- **Inner Item** (inside Content SLOT):
  - `Theme` (VARIANT): `Icon`, `--`, `Avatar Small`, `Photo Small`, `Avatar Big`, `Photo Big`, `Dock Icon`, `Badge`
  - `Caption#829:0` (BOOLEAN) — show caption text
  - `Icon-Src#1495:1333` (INSTANCE_SWAP) — swap leading icon
  - `Function` (VARIANT): `Default`, `Manual-Add-New`
- **Key patterns**:
  - **Hide leading icon**: set inner Item `Theme=--` (NOT `Theme=Default` — that crashes)
  - **Show avatar**: set inner Item `Theme=Avatar Small`, then configure Avatar instance: `avatar.setProperties({ 'Size': 'Small', 'Color': 'Accent' })`
  - **Center avatar**: set inner Item `counterAxisAlignItems = 'CENTER'`
  - **Label text**: inner Item > Content(FRAME) > Label(TEXT) — edit `.characters`
  - **Caption text**: inner Item > Content(FRAME) > Caption(TEXT) — need `Caption#829:0 = true` first
- **Workflow — must set label BEFORE changing Theme** (Theme change invalidates children nodes):
  ```js
  // 1. Get inner Item
  const container = itemInst.children[0];
  const contentSlot = container.children.find(n => n.type === 'SLOT' || n.name === 'Content');
  const inner = contentSlot.children.find(n => n.type === 'INSTANCE' && n.name === 'Item');
  
  // 2. Update label FIRST
  const contentFrame = inner.children.find(n => n.name === 'Content');
  contentFrame.children.find(n => n.name === 'Label').characters = 'My Label';
  
  // 3. Then set Theme/Icon (this may invalidate children refs)
  inner.setProperties({ 'Theme': '--' }); // hide icon
  // OR
  inner.setProperties({ 'Theme': 'Icon', 'Icon-Src#1495:1333': iconComp.id }); // swap icon
  // OR  
  inner.setProperties({ 'Theme': 'Avatar Small' }); // show avatar
  ```
- **Popover creation recipe**:
  ```js
  const popoverComp = await figma.importComponentByKeyAsync('51370dd9374fd044bdc0a53e616ef828070acaa4');
  const itemSet = await figma.importComponentSetByKeyAsync('00c4693730dfb827d655212b507caee6a13a22b0');
  const itemDefault = itemSet.children.find(c => c.name.includes('State=Default'));
  const itemSelected = itemSet.children.find(c => c.name.includes('State=Single-Selected'));
  
  const inst = popoverComp.createInstance();
  inst.setProperties({ 'Search#4031:33': true, 'Label#4031:34': true });
  
  // Remove default item, add custom
  const container = inst.children.find(n => n.name === 'Container');
  const slot = container.children.find(n => n.type === 'SLOT' || n.name === 'Item-List');
  slot.children.find(n => n.name === 'Item')?.remove();
  
  const item = itemSelected.createInstance();
  slot.appendChild(item);
  item.layoutSizingHorizontal = 'FILL';
  ```
- **Icon keys used**: user=`b78670b29d3564121d5345e47c82a41430b2b976`, settings=`02a6db08ed0d455115b7a40e6b3b7ad8bcc3be1d`, bell=`dd9e6901ce1b366d1be91ff89aa79bf615b318cc`, globe=`e1a18b2ae51853ccd3535a719281efae1b0c0ef9`, heart=`e06663f87068ea13474f53609667383096a78a9b`, star=`c55eb999d090851556dacf694678fb63d1cd0e4d`, trash=`824da5b06dd2899aab22fc189123323f03da1832`
- **Code vs Figma diff**:
  - Code `search`/`label` ↔ Figma `Search#4031:33`/`Label#4031:34` — direct match
  - Code `PopoverItem.leading` (ReactNode) ↔ Figma inner Item Theme (Icon/Avatar Small/etc) + Icon-Src swap
  - Code `PopoverItem.caption` ↔ Figma inner Item `Caption#829:0` boolean + Caption text
  - Code `PopoverItem.trailing` (ReactNode: Badge) ↔ Figma `Trailing#846:36` boolean — but Trailing is fixed FRAME with Icon-Flat button, cannot swap to Badge
  - Code `PopoverItem.noCheck` — Figma doesn't have equivalent, check icon always present
  - Code `PopoverItem.disabled` — Figma doesn't have disabled state
  - **Pitfall**: `setProperties({ Theme: 'Default' })` crashes (invalidates node IDs). Use `Theme: '--'` to hide icon instead

## Common Pitfalls
- `layoutSizingHorizontal = 'FILL'` fails if parent is not auto-layout → set parent layout first
### Segmented
- **Component key**: `920452acfb2ae5077a0b28d655752f1acdca6532` (component_set)
- **Item key**: `4ffed528fc3bb6e087940f1b056fc099d217ca02` (Primitives/Segmented/Item)
- **Variant pattern**: `Level=Secondary`
  - Level: `Secondary`, `Primary`
- **Total**: 2 variants
- **Component properties**: `Item-List#4034:26` (SLOT) — contains segmented items
- **Item properties**:
  - `Label#1238:0` (BOOLEAN) — show/hide label
  - `Icon#1204:0` (BOOLEAN) — show/hide icon
  - `Size` (VARIANT): `Medium`, `Small`
  - `Level` (VARIANT): `Secondary`, `Primary`
  - `Select` (VARIANT): `Yes`, `No`
  - `State` (VARIANT): `Default`
- **Adding more items — clone BEFORE setProperties**:
  - SLOT default has 2 items. Cannot remove them.
  - Clone `slot.children[1]` (unselected) to add 3rd+ items
  - Append clones to SLOT: `slot.appendChild(cloned)`
  - **CRITICAL**: Clone ALL needed items FIRST, then update labels + properties in separate pass
  - `setProperties` invalidates node IDs → clone after setProperties crashes
  ```js
  const slot = inst.children.find(n => n.type === 'SLOT');
  // Step 1: Clone extras FIRST
  for (let i = 2; i < labels.length; i++) {
    slot.appendChild(slot.children[1].clone());
  }
  // Step 2: Update labels (findTextByName safe traversal)
  for (let i = 0; i < slot.children.length; i++) {
    const labelNode = findTextByName(slot.children[i], 'Label', 0, 5);
    if (labelNode) labelNode.characters = labels[i];
  }
  // Step 3: Set properties last
  for (let i = 0; i < slot.children.length; i++) {
    slot.children[i].setProperties({ 'Select': i === 0 ? 'Yes' : 'No' });
  }
  ```
- **Code vs Figma diff**:
  - Code `level` ↔ Figma `Level` — direct match ✅
  - Code `size` (medium/small) ↔ Figma Item `Size` — need to set on each item individually
  - Code has sliding animation — Figma static
  - Code `fullWidth` — Figma doesn't have
  - Code renders N items freely — Figma needs clone pattern above
  - **Pitfall**: SLOT children cannot be removed, only cloned + appended. Clone BEFORE any setProperties.

## Common Pitfalls
- `figma.getNodeById()` fails with async pages → use `figma.getNodeByIdAsync()`
- `figma.loadAllPagesAsync()` can timeout on large files → target specific pages
- Component search results are session-specific (Desktop Bridge) → always re-search at session start
- `figma_execute` timeout default is 5s → use `timeout: 15000` for complex scripts
- Official MCP (`use_figma`): page context resets to first page each call → always `await figma.setCurrentPageAsync(page)` at start
- Official MCP: use `importComponentSetByKeyAsync(key)` not `getNodeByIdAsync(nodeId)` — keys are stable, nodeIds are session-specific
- Official MCP: must load `figma:figma-use` skill before every `use_figma` call
- Official MCP: `figma.notify()` throws — never use it, use `return` for output
- Official MCP: `figma.currentPage = page` throws — always use `await figma.setCurrentPageAsync(page)`

## Token Bindings — MUST apply when building pages

When building any frame/text on Figma, ALWAYS bind to design tokens (variables/styles), never use raw values.

### Spacing variables (gap, padding)

Two libraries available:
- **ZEN DS Optimized** (`Spacings` collection): `Gap/Medium`, `Gap/Large`, `Gap/xLarge`, `Gap/2xLarge`, `Gap/3xLarge`, etc. + `Padding/*`
- **ZEN Kaiz WIP** (`Spacing` collection): `Spacing/Gap/Medium`, `Spacing/Padding/Large`, etc.

Cached keys:
| Variable | Key | Value |
|---|---|---|
| Gap/Medium (ZEN DS) | `8b003aaf679a8c1a47d1968999d93b8b5f8c52a9` | 16px |
| Gap/Large | `c44b62f7d86b37b5077b7520bb20dc6b992dd094` | 24px |
| Gap/xLarge | `04ce9cfcd5451f56aa57221d4ac5c778c49c0548` | 32px |
| Gap/2xLarge | `761e9d6b2ccb060b85a72fda4d540c3610ed5e75` | 40px |
| Gap/3xLarge | `5e44cb26b2ead0cf370c28193a724315bb199ebf` | 48px |
| Padding/Medium | `0e3ea5540e80f354a5e7faf04f662eefaf000c97` | 16px |
| Padding/Large | `745aa18f5ffcd721dcb08ca21bc964d67fc5734a` | 20px |
| Padding/xLarge | `336126e15c024ea10008d706315435775fe84a7f` | 24px |
| Padding/2xLarge | `3045aca3ac23799a419d7127e6701e7f574e3d29` | 32px |

Bind pattern:
```js
const v_gap = await figma.variables.importVariableByKeyAsync('8b003aaf679a8c1a47d1968999d93b8b5f8c52a9');
const v_pad = await figma.variables.importVariableByKeyAsync('3045aca3ac23799a419d7127e6701e7f574e3d29');

frame.setBoundVariable('itemSpacing', v_gap);
frame.setBoundVariable('counterAxisSpacing', v_gap);  // for layoutWrap grids
frame.setBoundVariable('paddingTop', v_pad);
frame.setBoundVariable('paddingBottom', v_pad);
frame.setBoundVariable('paddingLeft', v_pad);
frame.setBoundVariable('paddingRight', v_pad);
```

### Color variables (text fills)

ZEN Kaiz `Mode Colors (Semantic)` collection:
| Variable | Key |
|---|---|
| Color/Content/Neutral/Primary | `c80c8dd806e3af5d9870ec72d7a2ed3ed86b12c0` |
| Color/Content/Neutral/Secondary | `632934022603fd2d1e3877f9a52d626e610fcc34` |
| Color/Content/Neutral/Tertiary | `09474e345281805df4a04d3421e40457a0f4147f` |
| Color/Content/Neutral/Disabled | `938be9fc9228414f481228d9c66a18a9f4b67d5b` |
| Color/Content/Accent/Primary | `435549295c8495611aa08e9ec6d806046793c047` |
| Color/Content/Info/Primary | `de445196196bf2d96150dbd868ff507b09c9f254` |
| Color/Content/Positive/Primary | `e5e5ae89d8caa73edc8595a96178b9d593252935` |
| Color/Content/Negative/Primary | `cf52585d9abe0feb08b6bc87ce59ed4b349b4733` |
| Color/Content/Warning/Primary | `79d8a3aed6e1e2aca56576c4fc9038a467df8f3d` |

Bind pattern (text fills require `setBoundVariableForPaint`):
```js
const v_textPrimary = await figma.variables.importVariableByKeyAsync('c80c8dd806e3af5d9870ec72d7a2ed3ed86b12c0');

const fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
fills[0] = figma.variables.setBoundVariableForPaint(fills[0], 'color', v_textPrimary);
textNode.fills = fills;
```

### Text styles

Two libraries:
- **ZEN DS Optimized** — only `Text-Body/{regular,semibold,bold}` and `Text-Body-Small/{regular,semibold,bold}`
- **ZEN Kaiz WIP** — has full `Heading/1` to `Heading/4` + body styles

Cached keys:
| Style | Library | Key |
|---|---|---|
| Heading/1 (32px) | ZEN Kaiz | `edc8d61e6f849deee89131cd9fe39feadf5a098e` |
| Heading/4 (24px) | ZEN Kaiz | `19fd57619eb0fddd3381aa1bfb4dacdcad4dab28` |
| Text-Body/regular (16px) | ZEN DS Opt | `d8f2d6af1ff94b50918face4a1f4fd0f4768aa42` |
| Text-Body/semibold (16px) | ZEN DS Opt | `a750d6c08f33eab15a50cb88d408ed5f7f80513b` |
| Text-Body/bold (16px) | ZEN DS Opt | `c40f97f4d4bb13a1c3aa95a24ca1da85c9b4afd0` |
| Text-Body-Small/regular (14px) | ZEN DS Opt | `049df24f132fc9f5529b006e2ccf054a882ea3fb` |
| Text-Body-Small/semibold (14px) | ZEN DS Opt | `85292db30857a3398da1eaded60b4ff5f5a25c10` |
| Text-Body-Small/bold (14px) | ZEN DS Opt | `3416be4e29cb0129539a3343412aa45af7b4a49f` |

Apply pattern:
```js
const ts_h1 = await figma.importStyleByKeyAsync('edc8d61e6f849deee89131cd9fe39feadf5a098e');
await textNode.setTextStyleIdAsync(ts_h1.id);
// fontSize, lineHeight, font weight all come from style — no need to set manually
```

### Search query gotchas
- "Text-Heading" or "Heading" — works for finding headings
- "h1 h2 h3" — does NOT match "Heading/1" naming
- "display" — matches `UI_Display_Text` (mobile lib), not Zen
- Always try multiple queries if first returns empty

### Build order (per page)

1. **Import all variables/styles upfront** (single call each)
2. **Create root frame** → bind padding + gap variables immediately
3. **Create sections** → bind item spacing
4. **Create text nodes** → apply text style + bind fill color
5. **Create component instances** → use `createInstance()` from imported component sets
6. **Set instance properties** AFTER text edits (per existing memory rule)

### Verification checklist
After build, click any element in Figma → tab Inspect should show:
- ✅ Variable name (not raw px) for spacing
- ✅ Style name (not raw font-size) for text
- ✅ Variable name (not hex) for colors
- ❌ If raw values shown → bindings failed, re-apply
