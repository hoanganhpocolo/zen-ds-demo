/**
 * Figma Component Mapping Configuration
 *
 * Maps React component props to Figma component properties, variant axes,
 * and text editing strategies. Used for automated Figma ↔ code sync.
 *
 * All component keys are stable across sessions (from Figma component library).
 * Property keys include Figma node ID suffixes (e.g. `Text#1026:804`).
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** How text content is updated inside a Figma component instance. */
export type TextEditMethod =
  | 'setProperties'    // Best: use inst.setProperties({ 'Key#id': value })
  | 'slotChild'        // SLOT child instance holds TEXT props
  | 'directTextNode'   // Find TEXT node by name, set .characters (needs font load)
  | 'deepTraversal'    // Manual .children.find() chain (findAll crashes on deep refs)
  | 'none';            // No text editing needed

export interface VariantAxis {
  /** Figma variant axis name (e.g. "Level", "Size") */
  figma: string;
  /** React prop value -> Figma variant value */
  values: Record<string, string>;
}

export interface ComponentProperty {
  /** Figma property key including node ID suffix */
  figma: string;
  /** Property type in Figma */
  type: 'text' | 'boolean' | 'instanceSwap' | 'slot';
}

export interface TextEditConfig {
  method: TextEditMethod;
  /** Font styles that must be loaded before editing (e.g. "Semi Bold", "Regular") */
  fontsRequired?: string[];
  /** Step-by-step path for deep traversal methods */
  paths?: Record<string, string>;
  /** Additional notes about editing quirks */
  notes?: string;
}

export interface FigmaComponentConfig {
  /** One or more Figma component keys (stable across sessions) */
  figmaKeys: Record<string, string>;
  /** nodeId if known (session-specific, use keys for MCP) */
  nodeIds?: Record<string, string>;
  /** Variant axes: React prop name -> Figma axis mapping */
  variants: Record<string, VariantAxis>;
  /** Non-variant component properties: React prop -> Figma property */
  properties: Record<string, ComponentProperty>;
  /** How to edit text content in Figma */
  textEditing: TextEditConfig;
  /** Differences between code and Figma that cannot be mapped 1:1 */
  codeOnlyProps?: string[];
  figmaOnlyVariants?: string[];
}

// ---------------------------------------------------------------------------
// Icon Keys (stable component keys for common icons)
// ---------------------------------------------------------------------------

export const iconKeys: Record<string, string> = {
  user: 'b78670b29d3564121d5345e47c82a41430b2b976',
  settings: '02a6db08ed0d455115b7a40e6b3b7ad8bcc3be1d',
  bell: 'dd9e6901ce1b366d1be91ff89aa79bf615b318cc',
  globe: 'e1a18b2ae51853ccd3535a719281efae1b0c0ef9',
  heart: 'e06663f87068ea13474f53609667383096a78a9b',
  star: 'c55eb999d090851556dacf694678fb63d1cd0e4d',
  trash: '824da5b06dd2899aab22fc189123323f03da1832',
  mail: 'bd31c7c58e45cfb64f374008bddfa8d141551364',
  lock: 'f69377164fcf62cd2166f50ac147487560e63c46',
};

// ---------------------------------------------------------------------------
// Component Mappings
// ---------------------------------------------------------------------------

export const figmaMapping: Record<string, FigmaComponentConfig> = {

  // =========================================================================
  // Button
  // =========================================================================
  Button: {
    figmaKeys: {
      main: '18a3a33834c2f39e891dbce1d363de13e98e8458',
      flatN: '1cf3d7ab4dc113239c240117c388924fbe1a1d73',
      iconMain: '074dcc738e40a66fed35fdf890d63fd1c1152a92',
      iconFlat: 'a29e0f0314d3d162e0c2cf43262ffeb59b70f6ff',
      overlay: '707b1ee6b4d631898c2bc47c916ae8d78483465f',
      iconOverlay: '29c71703b8a9fcc468dd03e68debf4398b123298',
    },
    nodeIds: {
      main: '1026:8312',
      flatN: '1070:18754',
      iconFlat: '234:43906',
    },
    variants: {
      size: {
        figma: 'Size',
        values: {
          '2xs': '2XSmall',
          xs: 'XSmall',
          s: 'Small',
          m: 'Medium (Base)',
          l: 'Large',
          xl: 'XLarge',
        },
      },
      level: {
        figma: 'Level',
        values: {
          // Main / Flat-N levels
          primary: 'Primary',
          accent: 'Accent',
          secondary: 'Secondary',
          tertiary: 'Tertiary',
          danger: 'Danger',
          dangerSubtle: 'Danger Subtle',
          positive: 'Positive',
          positiveSubtle: 'Positive Subtle',
          // Overlay levels
          inverse: 'Inverse',
          white: 'White',
          whiteOverlay: 'White Overlay',
          blackOverlay: 'Black Overlay',
          outline: 'Outline',
        },
      },
      state: {
        figma: 'State',
        values: {
          default: 'Default',
          hover: 'Hover',
          pressed: 'Pressed',
          focused: 'Focused',
          disabled: 'Disabled',
        },
      },
    },
    properties: {
      // Main & Flat-N text button properties
      children: { figma: 'Text#1026:804', type: 'text' },
      leadingIcon: { figma: 'Leading-Icon#1026:0', type: 'boolean' },
      trailingIcon: { figma: 'Trailing-Icon#1026:402', type: 'boolean' },
      // Overlay text button properties (different node IDs)
      overlayChildren: { figma: 'Text#1026:1409', type: 'text' },
      overlayLeadingIcon: { figma: 'Leading-Icon#1026:1005', type: 'boolean' },
      overlayTrailingIcon: { figma: 'Trailing-Icon#1026:1207', type: 'boolean' },
      // Icon-only button properties
      iconSrc: { figma: 'Icon-Src#1493:773', type: 'instanceSwap' },
    },
    textEditing: {
      method: 'setProperties',
      notes: 'Icon buttons (Icon-Main, Icon-Flat) have no text property; icon via Icon-Src#1493:773 instance swap.',
    },
    codeOnlyProps: ['onClick', 'disabled', 'loading', 'href', 'as'],
  },

  // =========================================================================
  // Badge
  // =========================================================================
  Badge: {
    figmaKeys: {
      default: '191f97a2c7ad7aba44fd8a2d1a3f81d73e98d2fc',
    },
    nodeIds: {
      default: '260:4825',
    },
    variants: {
      size: {
        figma: 'Size',
        values: {
          m: 'Medium',
          s: 'Small',
        },
      },
      theme: {
        figma: 'Theme',
        values: {
          neutral: 'Neutral',
          inverse: 'Inverse',
          accent: 'Accent',
          yellow: 'Yellow',
          orange: 'Orange',
          red: 'Red',
          crimson: 'Crimson',
          pink: 'Pink',
          plum: 'Plum',
          purple: 'Purple',
          violet: 'Violet',
          indigo: 'Indigo',
          blue: 'Blue',
          cyan: 'Cyan',
          teal: 'Teal',
          green: 'Green',
          brown: 'Brown',
        },
      },
      background: {
        figma: 'Background',
        values: {
          solid: 'Solid',
          subtle: 'Subtle',
        },
      },
    },
    properties: {
      children: { figma: 'Text#1537:0', type: 'text' },
      leadingIcon: { figma: 'Leading-Icon#1037:1510', type: 'boolean' },
      removable: { figma: 'Remove#855:93', type: 'boolean' },
      leadingIconSrc: { figma: 'Leading-Icon-Src#1493:0', type: 'instanceSwap' },
    },
    textEditing: {
      method: 'setProperties',
    },
    codeOnlyProps: ['onRemove'],
    figmaOnlyVariants: ['Inverse has Solid background only'],
  },

  // =========================================================================
  // Checkbox
  // =========================================================================
  Checkbox: {
    figmaKeys: {
      checkbox: '5e79bf20d9f6e610eef02d4d9684f81d64c6fcfa',
      checkMark: '7fb5e7a7e47e30c5982e5d540039b4b39a679850',
    },
    nodeIds: {
      checkbox: '308:46604',
    },
    variants: {
      state: {
        figma: 'State',
        values: {
          default: 'Default',
          hover: 'Hover',
          focus: 'Focus',
          disabled: 'Disabled',
        },
      },
      checked: {
        figma: 'Select',
        values: {
          false: 'No',
          true: 'Yes',
        },
      },
      checkSide: {
        figma: 'Check-Side',
        values: {
          left: 'Left',
          right: 'Right',
        },
      },
    },
    properties: {
      caption: { figma: 'Caption#309:249', type: 'boolean' },
      content: { figma: 'Content#4081:94', type: 'slot' },
    },
    textEditing: {
      method: 'slotChild',
      fontsRequired: ['Semi Bold', 'Regular'],
      paths: {
        label: 'inst > SLOT(Content) > children[0].setProperties({ "Content#40010042:0": value })',
        caption: 'inst > Caption(TEXT) — direct .characters edit, needs font load',
      },
      notes: 'Label text is inside a SLOT child instance with TEXT property Content#40010042:0. Caption is a separate text node requiring font load + .characters.',
    },
    codeOnlyProps: ['onChange', 'indeterminate', 'name', 'value'],
  },

  // =========================================================================
  // Calendar (Date-Picker)
  // =========================================================================
  Calendar: {
    figmaKeys: {
      singleCalendar: '36df3c91e6cdd6977ba06673fdf6f635be65f98f',
      dualCalendar: '94775a761bb6ef362eb5c6921e0f1ec80c915238',
    },
    variants: {
      state: {
        figma: 'State',
        values: {
          default: 'Default',
          selectMonthYear: 'Select-Month-Year',
        },
      },
    },
    properties: {
      timePicker: { figma: 'Time-Picker#510:0', type: 'boolean' },
      actions: { figma: 'Actions#510:1', type: 'boolean' },
    },
    textEditing: {
      method: 'none',
      notes: 'Dates are pre-rendered. No text editing needed.',
    },
    codeOnlyProps: [
      'eventDates', 'minDate', 'maxDate', 'weekStartsOnMonday',
      'onChange', 'onSubmit', 'onCancel',
    ],
  },

  // =========================================================================
  // Chip
  // =========================================================================
  Chip: {
    figmaKeys: {
      normal: 'f0808521e0ebcca154432c50ad684f30f2b96be2',
      single: 'a678c149f7980cea701430b6407c5852480e6834',
      advanced: 'ebae7e2a0fb97db78cdbcf096a8bad9a0e59689a',
    },
    variants: {
      size: {
        figma: 'Size',
        values: {
          s: 'Small',
          m: 'Medium',
        },
      },
      level: {
        figma: 'Level',
        values: {
          primary: 'Primary',
          secondary: 'Secondary',
        },
      },
      theme: {
        figma: 'Theme',
        values: {
          textOnly: 'Text-Only',
          leadingIcon: 'Leading-Icon',
          leadingPhoto: 'Leading-Photo',
        },
      },
      state: {
        figma: 'State',
        values: {
          default: 'Default',
          hover: 'Hover',
          focused: 'Focused',
          pressed: 'Press', // Advanced only
        },
      },
      selected: {
        figma: 'Select',
        values: {
          false: 'No',
          true: 'Yes',
        },
      },
    },
    properties: {
      iconSrc: { figma: 'Icon-Src#4060:30', type: 'instanceSwap' },
    },
    textEditing: {
      method: 'directTextNode',
      fontsRequired: ['Semi Bold'],
      paths: {
        label: 'inst.findOne(n => n.type === "TEXT" && n.name === "Label") -> .characters',
      },
      notes: 'Not a TEXT property or SLOT — find TEXT node named "Label" directly.',
    },
    codeOnlyProps: ['disabled', 'trailing', 'dropdown', 'onRemove', 'onChange'],
    figmaOnlyVariants: ['Advanced has Press state; Normal/Single do not'],
  },

  // =========================================================================
  // Dialog (Modal/Dialog)
  // =========================================================================
  Dialog: {
    figmaKeys: {
      dialog: 'ddc5405a9df0ebdab5ede9d5086f3f614d1a70d7',
    },
    variants: {
      theme: {
        figma: 'Theme',
        values: {
          default: 'Default',
          info: 'Info',
          positive: 'Positive',
          warning: 'Warning',
          negative: 'Negative',
        },
      },
    },
    properties: {},
    textEditing: {
      method: 'deepTraversal',
      fontsRequired: ['Semi Bold', 'Regular'],
      paths: {
        heading: 'Container > Content-Container(INST) > Contents(SLOT) > Header > Heading-Div > Content > Heading-Text(INST) > Frame > Heading(TEXT)',
        caption: 'Container > Content-Container(INST) > Contents(SLOT) > Caption-Container > Caption(TEXT)',
        primaryButton: 'Container > Actions > Buttons(INST) > Container > Primary(INST).setProperties({ "Text#1026:804": value })',
        secondaryButton: 'Container > Actions > Buttons(INST) > Container > Secondary(INST).setProperties({ "Text#1026:804": value })',
      },
      notes: 'findAll/findOne crashes on Dialog due to deeply nested instance refs. Must use manual .children.find() traversal at each level.',
    },
    codeOnlyProps: ['open', 'onClose', 'onPrimary', 'onSecondary', 'portalTarget', 'inline'],
  },

  // =========================================================================
  // ListItem
  // =========================================================================
  ListItem: {
    figmaKeys: {
      default: 'd87773b0c08898197e0b4c2787e8826a6029b517',
    },
    variants: {
      state: {
        figma: 'State',
        values: {
          default: 'Default',
          hover: 'Hover',
          selected: 'Selected',
        },
      },
    },
    properties: {
      contents: { figma: 'Contents#4080:6', type: 'slot' },
    },
    textEditing: {
      method: 'deepTraversal',
      fontsRequired: ['Semi Bold', 'Regular', 'Medium'],
      paths: {
        title: 'inst > SLOT(Contents) > Info-Content(INST, find by name with try/catch) > Content(SLOT) > children[0] (TEXT)',
        subtitle: 'inst > SLOT(Contents) > Info-Content(INST) > Content(SLOT) > children[1] (TEXT)',
      },
      notes: 'Some SLOT children crash on .name access — use try/catch. Access Title/Subtitle by index, NOT by iterating. Figma SLOT structure is fixed: cannot hide avatar/trailing like code.',
    },
    codeOnlyProps: ['leading', 'trailing', 'onClick'],
    figmaOnlyVariants: ['SLOT always shows Avatar + Trailing — cannot be hidden'],
  },

  // =========================================================================
  // Modal (Modal/Forms)
  // =========================================================================
  Modal: {
    figmaKeys: {
      forms: 'b0c53f72e3c0f04237a92de0e1a028500284f650',
    },
    variants: {
      layout: {
        figma: 'Layout',
        values: {
          basic: 'Basic',
          fixedLeft: 'Fixed-Left',
          halfHalf: 'Half-Half',
          threeFourths: '3-4',
          big: 'Big',
        },
      },
    },
    properties: {
      mainContents: { figma: 'Main-Contents#4080:0', type: 'slot' },
      sideContent: { figma: 'Side-Content#4267:15', type: 'slot' },
    },
    textEditing: {
      method: 'deepTraversal',
      fontsRequired: ['Semi Bold', 'Regular'],
      paths: {
        caption: 'Header(INST) > SLOT > Caption-Container > Caption(TEXT)',
        heading: 'Header — depth 9+, crashes on traverse (known limitation)',
        primaryButton: 'Footer > Buttons(INST) > Container > Primary(INST).setProperties({ "Text#1026:804": value })',
        secondaryButton: 'Footer > Buttons(INST) > Container > Secondary(INST).setProperties({ "Text#1026:804": value })',
      },
      notes: 'Single-column (Basic, Big): inst > Container > Header + Body + Footer. Multi-column (Fixed-Left, Half-Half, 3-4): inst > Content > Side-Content + Container. Heading at depth 9+ crashes on traverse.',
    },
    codeOnlyProps: ['open', 'onClose', 'children', 'sideSlot', 'title', 'portalTarget'],
  },

  // =========================================================================
  // InputField (Input/Text-Field)
  // =========================================================================
  InputField: {
    figmaKeys: {
      textField: '742f35b2dc8a34341259b19b28e39090d9b45aa4',
      numberLeft: '27ea2bac',
    },
    nodeIds: {
      textField: '421:4108',
      numberLeft: '421:10057',
    },
    variants: {},
    properties: {},
    textEditing: {
      method: 'deepTraversal',
      fontsRequired: ['Regular', 'Medium'],
      paths: {
        label: 'findTextByName(inst, "Label", 0, 4)',
        placeholder: 'findTextByName(inst, "Text", 0, 5)',
      },
      notes: 'Leading icon is hidden by default (visible: false). To show: Field > Container > Leading -> set visible = true, then setProperties({ Icon: "Yes", Photo: "No", Label: "No", Dropdown: "No" }). Swap icon via Leading-Icon-Src with icon keys.',
    },
    /**
     * Leading icon setup steps:
     * 1. Find: Field > Container > Leading
     * 2. Set visible = true
     * 3. Set mode: leading.setProperties({ 'Icon': 'Yes', 'Photo': 'No', 'Label': 'No', 'Dropdown': 'No' })
     * 4. Swap icon: leading.setProperties({ 'Icon-Src#1495:1343': importedIconComponent.id })
     */
    codeOnlyProps: ['value', 'onChange', 'onBlur', 'error', 'disabled', 'name', 'type'],
  },

  // =========================================================================
  // Pagination
  // =========================================================================
  Pagination: {
    figmaKeys: {
      default: 'ef6c04b60f136c7d651cfbe3d24523b96b157f23',
    },
    variants: {
      theme: {
        figma: 'Theme',
        values: {
          primary: 'Primary',
          secondary: 'Secondary',
          inline: 'Inline',
          manually: 'Manually',
        },
      },
    },
    properties: {},
    textEditing: {
      method: 'none',
      notes: 'Page numbers and range text are pre-rendered. No editing needed.',
    },
    codeOnlyProps: ['page', 'totalPages', 'total', 'pageSize', 'onChange', 'onPageSizeChange'],
    figmaOnlyVariants: ['Manually theme has no code equivalent'],
  },

  // =========================================================================
  // Popover
  // =========================================================================
  Popover: {
    figmaKeys: {
      /** Single component (not a component set) */
      default: '51370dd9374fd044bdc0a53e616ef828070acaa4',
      /** Component set with 3 state variants */
      item: '00c4693730dfb827d655212b507caee6a13a22b0',
    },
    variants: {
      /** Item-level variant axes */
      itemState: {
        figma: 'State',
        values: {
          default: 'Default',
          hover: 'Hover',
          selected: 'Single-Selected',
        },
      },
      /** Inner Item Theme — controls leading element type */
      itemTheme: {
        figma: 'Theme',
        values: {
          icon: 'Icon',
          none: '--',
          avatarSmall: 'Avatar Small',
          photoSmall: 'Photo Small',
          avatarBig: 'Avatar Big',
          photoBig: 'Photo Big',
          dockIcon: 'Dock Icon',
          badge: 'Badge',
        },
      },
      itemFunction: {
        figma: 'Function',
        values: {
          default: 'Default',
          manualAddNew: 'Manual-Add-New',
        },
      },
    },
    properties: {
      // Popover-level properties
      search: { figma: 'Search#4031:33', type: 'boolean' },
      label: { figma: 'Label#4031:34', type: 'boolean' },
      scrollBar: { figma: 'Scroll-Bar#4031:35', type: 'boolean' },
      itemList: { figma: 'Item-List#4031:28', type: 'slot' },
      // Item-level properties
      itemTrailing: { figma: 'Trailing#846:36', type: 'boolean' },
      itemContent: { figma: 'Content#4031:29', type: 'slot' },
      // Inner Item properties
      itemCaption: { figma: 'Caption#829:0', type: 'boolean' },
      itemIconSrc: { figma: 'Icon-Src#1495:1333', type: 'instanceSwap' },
    },
    textEditing: {
      method: 'deepTraversal',
      fontsRequired: ['Semi Bold', 'Regular', 'Medium'],
      paths: {
        itemLabel: 'itemInst > Container > Content(SLOT) > Item(INST) > Content(FRAME) > Label(TEXT)',
        itemCaption: 'itemInst > Container > Content(SLOT) > Item(INST) > Content(FRAME) > Caption(TEXT)',
      },
      notes: 'IMPORTANT: Set label text BEFORE changing Theme — Theme change invalidates children node refs. Use Theme="--" to hide icon (Theme="Default" crashes). Trailing is a fixed FRAME with Icon-Flat button, cannot swap to Badge.',
    },
    codeOnlyProps: ['PopoverItem.noCheck', 'PopoverItem.disabled'],
  },

  // =========================================================================
  // InlineMessage
  // =========================================================================
  InlineMessage: {
    figmaKeys: {
      default: '9e3c6dcb4eb5252b5f2eaad4541c4829cec3a059',
    },
    nodeIds: {
      default: '595:54857',
    },
    variants: {
      theme: {
        figma: 'Theme',
        values: {
          neutral: 'Neutral',
          info: 'Info',
          positive: 'Positive',
          warning: 'Warning',
          negative: 'Negative',
        },
      },
    },
    properties: {
      action: { figma: 'Action#595:57', type: 'boolean' },
      closable: { figma: 'Close#595:63', type: 'boolean' },
      caption: { figma: 'Caption#595:69', type: 'boolean' },
      title: { figma: 'Title#595:75', type: 'boolean' },
    },
    textEditing: {
      method: 'directTextNode',
      fontsRequired: ['Semi Bold', 'Regular'],
      paths: {
        title: 'findTextByName(inst, "Title", 0, 6) -> .characters',
        caption: 'findTextByName(inst, "Caption", 0, 6) -> .characters',
        actionLabel: 'findTextByName(inst, "Label", 0, 8) -> .characters',
      },
    },
    codeOnlyProps: ['onAction', 'onClose'],
  },

  // =========================================================================
  // Segmented
  // =========================================================================
  Segmented: {
    figmaKeys: {
      default: '920452acfb2ae5077a0b28d655752f1acdca6532',
      item: '4ffed528fc3bb6e087940f1b056fc099d217ca02',
    },
    variants: {
      level: {
        figma: 'Level',
        values: { primary: 'Primary', secondary: 'Secondary' },
      },
    },
    properties: {
      itemList: { figma: 'Item-List#4034:26', type: 'slot' },
    },
    textEditing: {
      method: 'directTextNode',
      fontsRequired: ['Semi Bold'],
      paths: {
        label: 'item > Text-Wrapper > Label(TEXT)',
      },
      notes: 'SLOT default has 2 items. Clone slot.children[1] BEFORE any setProperties to add more. Clone ALL first, then update labels, then setProperties last. setProperties invalidates node IDs.',
    },
    codeOnlyProps: ['fullWidth', 'onChange', 'defaultValue', 'sliding animation'],
    figmaOnlyVariants: ['Item has Size(Medium/Small), Select(Yes/No), State(Default) variants'],
  },

  // =========================================================================
  // MetricCard
  // =========================================================================
  MetricCard: {
    figmaKeys: {
      default: '9bfaf72fe748b950ba6a286af0cb32d03778498f',
    },
    variants: {
      level: {
        figma: 'Level',
        values: { master: 'Master', sub: 'Sub' },
      },
      theme: {
        figma: 'Theme',
        values: { default: 'Default', subtle: 'Subtle' },
      },
    },
    properties: {
      metricChart: { figma: 'Metric-Chart#595:99', type: 'boolean' },
      metricIcon: { figma: 'Metric-Icon#595:102', type: 'boolean' },
      action: { figma: 'Action#595:105', type: 'boolean' },
      metricContents: { figma: 'Metric-Contents#4080:21', type: 'slot' },
    },
    textEditing: {
      method: 'directTextNode',
      fontsRequired: ['Semi Bold', 'Regular', 'Medium'],
      paths: {
        title: 'findTextByName(inst, "Label", 0, 8) — first match = metric title',
        value: 'findTextByName(inst, "Metric-Number", 0, 8)',
        trend: 'findAllTexts → second "Label" at deeper depth = trend label',
      },
      notes: 'Metric value font in Figma = Inter Semi Bold 36px (NOT display font). Code was fixed to match.',
    },
    codeOnlyProps: ['onAction', 'metricColor'],
  },

  // =========================================================================
  // Search
  // =========================================================================
  Search: {
    figmaKeys: {
      default: '01bcf98944b4a8ed8c82169aef3ead9ad62b72ec',
    },
    variants: {
      theme: {
        figma: 'Theme',
        values: { default: 'Default', filterDropdown: 'Filter-Dropdown', filterIcon: 'Filter-Icon' },
      },
      state: {
        figma: 'State',
        values: { default: 'Default', hover: 'Hover', focused: 'Focused', typing: 'Typing', inputted: 'Inputted' },
      },
      size: {
        figma: 'Size',
        values: { default: 'Default', small: 'Small' },
      },
      iconSearch: {
        figma: 'Icon-Search',
        values: { yes: 'Yes', no: 'No' },
      },
    },
    properties: {},
    textEditing: { method: 'none' },
    codeOnlyProps: ['value', 'onChange', 'onClear'],
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Resolve a Figma variant name string from React props. */
export function buildVariantName(
  componentName: keyof typeof figmaMapping,
  props: Record<string, string>,
): string {
  const config = figmaMapping[componentName];
  if (!config) throw new Error(`Unknown component: ${componentName}`);

  const parts: string[] = [];
  for (const [reactProp, axis] of Object.entries(config.variants)) {
    const reactValue = props[reactProp];
    if (reactValue !== undefined) {
      const figmaValue = axis.values[reactValue];
      if (figmaValue) {
        parts.push(`${axis.figma}=${figmaValue}`);
      }
    }
  }
  return parts.join(', ');
}

/** Get the primary component key for a component. */
export function getPrimaryKey(componentName: keyof typeof figmaMapping): string {
  const config = figmaMapping[componentName];
  if (!config) throw new Error(`Unknown component: ${componentName}`);
  const keys = Object.values(config.figmaKeys);
  return keys[0];
}

/** Look up an icon component key by name. */
export function getIconKey(iconName: keyof typeof iconKeys): string | undefined {
  return iconKeys[iconName];
}
