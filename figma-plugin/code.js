// Zen Component Replacer — Figma Plugin
// Reads zen-map.json exported by figma-annotate.js,
// matches components by position, and replaces layers with library instances.

const ZEN_COMPONENTS = [
  { id: 'btn-main',        name: 'Button',               nodeId: '1026:8312', category: 'Button',     keywords: ['button', 'btn'] },
  { id: 'btn-overlay',     name: 'Button (Overlay)',      nodeId: '1026:8747', category: 'Button',     keywords: [] },
  { id: 'btn-flat',        name: 'Button (Flat)',         nodeId: '1070:18754', category: 'Button',    keywords: [] },
  { id: 'btn-icon-main',   name: 'Button Icon',           nodeId: '205:21062',  category: 'Button',    keywords: ['icon-button'] },
  { id: 'btn-icon-overlay',name: 'Button Icon (Overlay)', nodeId: '291:41855',  category: 'Button',    keywords: [] },
  { id: 'btn-icon-flat',   name: 'Button Icon (Flat)',    nodeId: '234:43906',  category: 'Button',    keywords: [] },
  { id: 'input-text',      name: 'Input Text Field',      nodeId: '421:4108',  category: 'Input',      keywords: ['input', 'textfield'] },
  { id: 'input-select',    name: 'Input Select',          nodeId: '421:7303',  category: 'Input',      keywords: ['select'] },
  { id: 'input-date',      name: 'Input Date',            nodeId: '421:8388',  category: 'Input',      keywords: [] },
  { id: 'textarea',        name: 'Text Area',             nodeId: '450:7027',  category: 'Input',      keywords: ['textarea'] },
  { id: 'number-left',     name: 'Number Field',          nodeId: '421:10057', category: 'Input',      keywords: ['number'] },
  { id: 'number-center',   name: 'Number Field (Center)', nodeId: '450:7900',  category: 'Input',      keywords: [] },
  { id: 'input-heading',   name: 'Input Heading',         nodeId: '694:13062', category: 'Input',      keywords: ['inputheading'] },
  { id: 'search',          name: 'Search',                nodeId: '846:37624', category: 'Input',      keywords: ['search'] },
  { id: 'checkbox',        name: 'Checkbox',              nodeId: '309:46871', category: 'Input',      keywords: ['checkbox'] },
  { id: 'radio',           name: 'Radio',                 nodeId: '373:96272', category: 'Input',      keywords: ['radio'] },
  { id: 'toggle',          name: 'Toggle',                nodeId: '1526:5703', category: 'Input',      keywords: ['toggle'] },
  { id: 'toggle-btn',      name: 'Toggle Button',         nodeId: '1523:104',  category: 'Input',      keywords: [] },
  { id: 'slider',          name: 'Slider',                nodeId: '4010:35946', category: 'Input',     keywords: ['slider'] },
  { id: 'date-single',     name: 'Date Picker',           nodeId: '895:31954', category: 'Input',      keywords: ['datepicker', 'calendar'] },
  { id: 'date-dual',       name: 'Date Picker (Dual)',    nodeId: '465:41427', category: 'Input',      keywords: [] },
  { id: 'file-upload',     name: 'File Uploader',         nodeId: '1581:22708', category: 'Input',     keywords: ['uploader'] },
  { id: 'avatar',          name: 'Avatar',                nodeId: '223:9050',  category: 'Display',    keywords: ['avatar'] },
  { id: 'avatar-group',    name: 'Avatar Group',          nodeId: '364:92561', category: 'Display',    keywords: ['avatar-group'] },
  { id: 'badge',           name: 'Badge',                 nodeId: '260:4825',  category: 'Display',    keywords: ['badge'] },
  { id: 'tag',             name: 'Tag',                   nodeId: '288:32046', category: 'Display',    keywords: ['tag'] },
  { id: 'chip-normal',     name: 'Chip',                  nodeId: '512:6843',  category: 'Display',    keywords: ['chip'] },
  { id: 'chip-advanced',   name: 'Chip (Advanced)',        nodeId: '512:7659',  category: 'Display',    keywords: [] },
  { id: 'metric-card',     name: 'Metric Card',           nodeId: '595:55410', category: 'Display',    keywords: ['metric', 'kpi'] },
  { id: 'progress-bar',    name: 'Progress Bar',          nodeId: '1536:260',  category: 'Display',    keywords: ['progress'] },
  { id: 'progress-circle', name: 'Progress Circle',       nodeId: '1531:13954', category: 'Display',   keywords: [] },
  { id: 'rating-star',     name: 'Rating (Star)',         nodeId: '1536:26008', category: 'Display',   keywords: ['rating'] },
  { id: 'rating-nps',      name: 'Rating (NPS)',          nodeId: '1536:26034', category: 'Display',   keywords: ['nps'] },
  { id: 'rating-opinion',  name: 'Rating (Opinion)',      nodeId: '1536:25762', category: 'Display',   keywords: [] },
  { id: 'divider',         name: 'Divider',               nodeId: '460:38361', category: 'Display',    keywords: ['divider'] },
  { id: 'alert-banner',    name: 'Alert Banner',          nodeId: '234:32943', category: 'Feedback',   keywords: ['alert'] },
  { id: 'sidebar',         name: 'Sidebar',               nodeId: '4081:15234', category: 'Navigation', keywords: ['sidebar'] },
  { id: 'tab',             name: 'Tab',                   nodeId: '1577:5477', category: 'Navigation', keywords: ['tab'] },
  { id: 'breadcrumb',      name: 'Breadcrumb',            nodeId: '4031:20161', category: 'Navigation', keywords: ['breadcrumb'] },
  { id: 'pagination',      name: 'Pagination',            nodeId: '774:29083', category: 'Navigation', keywords: ['pagination'] },
  { id: 'segmented',       name: 'Segmented',             nodeId: '1238:892',  category: 'Navigation', keywords: ['segmented'] },
  { id: 'stepper-h',       name: 'Stepper (Horizontal)',  nodeId: '1625:8328', category: 'Navigation', keywords: ['stepper'] },
  { id: 'stepper-v',       name: 'Stepper (Vertical)',    nodeId: '1625:8656', category: 'Navigation', keywords: [] },
  { id: 'list-item',       name: 'List Item',             nodeId: '4080:11700', category: 'Data',      keywords: ['list-item'] },
  { id: 'table-header',    name: 'Table Header',          nodeId: '1604:12968', category: 'Data',      keywords: ['table-header'] },
  { id: 'table-cell',      name: 'Table Cell',            nodeId: '4270:19981', category: 'Data',      keywords: ['table-cell'] },
  { id: 'dialog',          name: 'Dialog',                nodeId: '841:17177', category: 'Overlay',    keywords: ['dialog'] },
  { id: 'modal',           name: 'Modal',                 nodeId: '841:17182', category: 'Overlay',    keywords: ['modal'] },
  { id: 'popover',         name: 'Popover',               nodeId: '4031:26126', category: 'Overlay',   keywords: ['popover'] },
  { id: 'bottom-sheet',    name: 'Bottom Sheet',          nodeId: '4059:14161', category: 'Overlay',   keywords: ['bottom-sheet'] },
  { id: 'side-panel',      name: 'Side Panel',            nodeId: '1573:3128', category: 'Overlay',    keywords: ['side-panel'] },
  { id: 'accordion',       name: 'Accordion',             nodeId: '239:16847', category: 'Layout',     keywords: ['accordion'] },
  { id: 'icon',            name: 'Icon',                  nodeId: '1340:4450', category: 'Display',    keywords: ['icon'] },
];

figma.showUI(__html__, { width: 320, height: 560, title: 'Zen Component Replacer' });
figma.ui.postMessage({ type: 'init', components: ZEN_COMPONENTS });

figma.on('selectionchange', sendSelectionInfo);
sendSelectionInfo();

function sendSelectionInfo() {
  const sel = figma.currentPage.selection;
  figma.ui.postMessage({
    type: 'selection',
    count: sel.length,
    names: sel.map(n => n.name),
  });
}

// ── Message handler ──
figma.ui.onmessage = async (msg) => {

  // ── Import from zen-map.json ──
  if (msg.type === 'import-map') {
    await handleImport(msg.data);
  }

  // ── Preview matches from zen-map.json ──
  if (msg.type === 'preview-map') {
    await handlePreview(msg.data);
  }

  // ── Manual replace ──
  if (msg.type === 'replace') {
    const comp = ZEN_COMPONENTS.find(c => c.id === msg.compId);
    if (!comp) return;
    const selection = [...figma.currentPage.selection];
    if (!selection.length) { notify('Select at least one layer first', true); return; }
    let replaced = 0;
    for (const node of selection) {
      const instance = await createInstance(comp.nodeId);
      if (!instance) continue;
      swapLayer(node, instance, msg.resize);
      replaced++;
    }
    notify(`Replaced ${replaced} layer${replaced !== 1 ? 's' : ''}`);
    sendSelectionInfo();
  }

  // ── Auto scan (name/keyword matching) ──
  if (msg.type === 'scan') {
    const selection = figma.currentPage.selection;
    if (!selection.length) { notify('Select a frame to scan', true); return; }
    const matches = [];
    for (const node of selection) walkNode(node, matches, 0);
    figma.ui.postMessage({ type: 'scan-results', matches });
  }

  // ── Batch replace from scan ──
  if (msg.type === 'batch-replace') {
    let replaced = 0;
    for (const item of msg.items) {
      const node = figma.getNodeById(item.nodeId);
      if (!node) continue;
      const instance = await createInstance(item.compNodeId, item.props);
      if (!instance) continue;
      swapLayer(node, instance, true);
      replaced++;
    }
    notify(`Replaced ${replaced} layer${replaced !== 1 ? 's' : ''}`);
  }

  if (msg.type === 'close') figma.closePlugin();
};

// ── Handle zen-map.json preview ──
async function handlePreview(mapData) {
  try {
    const map = typeof mapData === 'string' ? JSON.parse(mapData) : mapData;
    const components = map.components || [];

    const targetFrame = figma.currentPage.selection[0];
    if (!targetFrame) {
      notify('Select the captured frame first', true);
      return;
    }

    // Build layer index (name → list of layers) with depth + count limit
    const index = buildLayerIndex(targetFrame);

    const matches = [];
    for (const comp of components) {
      const match = findLayer(index, comp);
      matches.push({
        comp,
        layerId:    match ? match.id   : null,
        layerName:  match ? match.name : null,
        confidence: match ? match.conf : 0,
      });
    }

    figma.ui.postMessage({ type: 'preview-results', matches, total: components.length });
  } catch (e) {
    notify(`Error: ${e.message}`, true);
  }
}

// ── Handle zen-map.json import ──
async function handleImport(mapData) {
  try {
    const map = typeof mapData === 'string' ? JSON.parse(mapData) : mapData;
    const components = map.components || [];

    const targetFrame = figma.currentPage.selection[0];
    if (!targetFrame) {
      notify('Select the captured frame first, then import.', true);
      return;
    }

    const index = buildLayerIndex(targetFrame);

    let replaced = 0;
    let skipped = 0;

    for (const comp of components) {
      const match = findLayer(index, comp);
      if (!match || match.conf < 0.4) { skipped++; continue; }

      const layer = figma.getNodeById(match.id);
      if (!layer || !layer.parent) { skipped++; continue; }

      const instance = await createInstance(comp.nodeId, comp.variantProps);
      if (!instance) { skipped++; continue; }

      swapLayer(layer, instance, true);
      replaced++;
    }

    notify(`Done: ${replaced} replaced, ${skipped} skipped`);
  } catch (e) {
    notify(`Error: ${e.message}`, true);
  }
}

// ── Build a name-keyed index of layers (safe, depth-limited) ──
function buildLayerIndex(root) {
  // index: { [lowerName]: [ {id, name, x, y, w, h} ] }
  const index = {};
  const MAX_NODES = 3000;
  let count = 0;

  function walk(node, depth) {
    if (!node || count >= MAX_NODES || depth > 8) return;
    count++;

    try {
      const name = node.name || '';
      const key = name.toLowerCase();
      const entry = {
        id:   node.id,
        name: node.name,
        x:    typeof node.x === 'number' ? node.x : 0,
        y:    typeof node.y === 'number' ? node.y : 0,
        w:    typeof node.width  === 'number' ? node.width  : 0,
        h:    typeof node.height === 'number' ? node.height : 0,
      };
      if (!index[key]) index[key] = [];
      index[key].push(entry);
    } catch(e) {}

    if ('children' in node) {
      for (const child of node.children) {
        walk(child, depth + 1);
        if (count >= MAX_NODES) break;
      }
    }
  }

  walk(root, 0);
  return index;
}

// ── Find best-matching layer for a component entry ──
function findLayer(index, comp) {
  const compName = comp.component.toLowerCase();
  const cw = comp.width;
  const ch = comp.height;
  const SIZE_TOL = 24;

  // Candidates: exact name match first, then all layers
  const candidates = [
    ...(index[compName] || []),
    ...Object.values(index).flat().filter(l => l.name.toLowerCase() !== compName),
  ];

  let best = null;
  let bestScore = -Infinity;

  for (const layer of candidates) {
    const dw = Math.abs(layer.w - cw);
    const dh = Math.abs(layer.h - ch);
    if (dw > SIZE_TOL * 2 || dh > SIZE_TOL * 2) continue;

    const nameMatch  = layer.name.toLowerCase() === compName ? 1.0 : 0;
    const sizeScore  = Math.max(0, 1 - (dw + dh) / (SIZE_TOL * 2));
    const score      = nameMatch * 2 + sizeScore;

    if (score > bestScore) {
      bestScore = score;
      best = { id: layer.id, name: layer.name, conf: Math.min(1, score / 3) };
    }
  }

  return best;
}

// ── Flatten all layers (safe version with limits) ──
function walkAll(node, result, depth = 0) {
  if (!node || depth > 6 || result.length > 2000) return;
  try { result.push(node); } catch(e) {}
  if ('children' in node) {
    for (const child of node.children) walkAll(child, result, depth + 1);
  }
}

// ── Create a component instance with optional variant matching ──
async function createInstance(nodeId, propsMap) {
  try {
    const node = figma.getNodeById(nodeId);
    if (!node) { notify(`Node ${nodeId} not found`, true); return null; }

    let component;
    if (node.type === 'COMPONENT_SET') {
      component = (propsMap && Object.keys(propsMap).length)
        ? findVariant(node, propsMap) || node.defaultVariant
        : node.defaultVariant;
    } else if (node.type === 'COMPONENT') {
      component = node;
    } else {
      notify(`${nodeId} is not a component (${node.type})`, true); return null;
    }
    return component.createInstance();
  } catch (e) {
    notify(`Error: ${e.message}`, true); return null;
  }
}

// ── Find best-matching variant by props ──
function findVariant(componentSet, propsMap) {
  const children = componentSet.children.filter(n => n.type === 'COMPONENT');
  if (!children.length) return null;

  const normalized = {};
  for (const [k, v] of Object.entries(propsMap)) {
    normalized[k.charAt(0).toUpperCase() + k.slice(1)] = String(v);
  }

  let bestScore = -Infinity;
  let bestVariant = null;
  for (const child of children) {
    const vp = child.variantProperties || {};
    let score = 0;
    for (const [k, v] of Object.entries(normalized)) {
      if (vp[k] !== undefined) {
        score += vp[k].toLowerCase() === v.toLowerCase() ? 2 : -1;
      }
    }
    if (score > bestScore) { bestScore = score; bestVariant = child; }
  }
  return bestVariant;
}

// ── Swap layer with instance ──
function swapLayer(node, instance, resize) {
  instance.x = node.x;
  instance.y = node.y;
  if (resize) {
    try { instance.resizeWithoutConstraints(node.width, node.height); } catch (e) {}
  }
  const parent = node.parent;
  const index = parent.children.indexOf(node);
  parent.insertChild(index, instance);
  node.remove();
}

// ── Name/keyword scan fallback ──
function walkNode(node, matches, depth) {
  if (depth > 6 || matches.length > 500) return;
  try {
    const match = detectFromName(node);
    if (match) {
      matches.push({
        nodeId: node.id, nodeName: node.name,
        w: Math.round(node.width || 0), h: Math.round(node.height || 0),
        compId: match.id, compName: match.name, compNodeId: match.nodeId,
        props: {}, source: 'name',
      });
      return; // don't descend into matched node
    }
  } catch(e) {}
  if ('children' in node) {
    for (const child of node.children) walkNode(child, matches, depth + 1);
  }
}

function detectFromName(node) {
  const name = (node.name || '').toLowerCase();
  for (const comp of ZEN_COMPONENTS) {
    if (comp.name.toLowerCase() === node.name) return comp;
    if (comp.keywords.some(kw => name.includes(kw))) return comp;
  }
  return null;
}

function notify(message, error = false) {
  figma.ui.postMessage({ type: 'toast', message, error });
}
