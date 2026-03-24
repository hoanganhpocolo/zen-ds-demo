/**
 * Zen Figma Annotator
 * Reads the React fiber tree, collects all Zen component metadata,
 * and exports a zen-map.json file for the Figma plugin to consume.
 *
 * Triggered automatically when URL hash contains "figmacapture".
 * Also available via: window.__zenExport()
 */
(function () {
  'use strict';

  const ZEN_MAP = {
    Button:           { nodeId: '1026:8312',  variantProps: ['variant', 'size'] },
    InputField:       { nodeId: '421:4108',   variantProps: ['size', 'state'] },
    TextArea:         { nodeId: '450:7027',   variantProps: ['size', 'state'] },
    NumberField:      { nodeId: '421:10057',  variantProps: ['size', 'align'] },
    InputHeading:     { nodeId: '694:13062',  variantProps: [] },
    Search:           { nodeId: '846:37624',  variantProps: ['size'] },
    Checkbox:         { nodeId: '309:46871',  variantProps: ['size', 'checked'] },
    Radio:            { nodeId: '373:96272',  variantProps: ['size', 'checked'] },
    Toggle:           { nodeId: '1526:5703',  variantProps: ['size', 'checked'] },
    ToggleButton:     { nodeId: '1523:104',   variantProps: ['size', 'selected'] },
    Slider:           { nodeId: '4010:35946', variantProps: ['size'] },
    Avatar:           { nodeId: '223:9050',   variantProps: ['size', 'color', 'background', 'shape'] },
    AvatarGroup:      { nodeId: '364:92561',  variantProps: ['size'] },
    Badge:            { nodeId: '260:4825',   variantProps: ['color', 'variant', 'size'] },
    Tag:              { nodeId: '288:32046',  variantProps: ['size', 'theme', 'state'] },
    Chip:             { nodeId: '512:6843',   variantProps: ['variant', 'selected', 'size'] },
    MetricCard:       { nodeId: '595:55410',  variantProps: [] },
    ProgressBar:      { nodeId: '1536:260',   variantProps: ['color'] },
    Progress:         { nodeId: '1536:260',   variantProps: ['color'] },
    ProgressCircle:   { nodeId: '1531:13954', variantProps: ['color'] },
    Rating:           { nodeId: '1536:26008', variantProps: ['type'] },
    Divider:          { nodeId: '460:38361',  variantProps: ['direction'] },
    AlertBanner:      { nodeId: '234:32943',  variantProps: ['type'] },
    Sidebar:          { nodeId: '4081:15234', variantProps: ['background'] },
    SidebarItem:      { nodeId: '4081:15234', variantProps: ['selected'] },
    Tab:              { nodeId: '1577:5477',  variantProps: ['active'] },
    TabGroup:         { nodeId: '1577:5477',  variantProps: [] },
    TabItem:          { nodeId: '1577:5477',  variantProps: ['active'] },
    Breadcrumb:       { nodeId: '4031:20161', variantProps: [] },
    BreadcrumbItem:   { nodeId: '4031:20161', variantProps: [] },
    Pagination:       { nodeId: '774:29083',  variantProps: ['size'] },
    Segmented:        { nodeId: '1238:892',   variantProps: [] },
    Stepper:          { nodeId: '1625:8328',  variantProps: ['orientation'] },
    ListItem:         { nodeId: '4080:11700', variantProps: ['size'] },
    Dialog:           { nodeId: '841:17177',  variantProps: [] },
    Modal:            { nodeId: '841:17182',  variantProps: [] },
    Popover:          { nodeId: '4031:26126', variantProps: [] },
    BottomSheet:      { nodeId: '4059:14161', variantProps: [] },
    SidePanel:        { nodeId: '1573:3128',  variantProps: [] },
    Accordion:        { nodeId: '239:16847',  variantProps: [] },
    Calendar:         { nodeId: '895:31954',  variantProps: [] },
    FileUploader:     { nodeId: '1581:22708', variantProps: ['type'] },
    // Table sub-components
    TableBody:        { nodeId: '4270:19981', variantProps: [] },
    TableCell:        { nodeId: '4270:19981', variantProps: [] },
    TableHead:        { nodeId: '1604:12968', variantProps: [] },
    TableHeader:      { nodeId: '1604:12968', variantProps: [] },
    TableHeaderCell:  { nodeId: '1604:12968', variantProps: [] },
    TableRow:         { nodeId: '4270:19981', variantProps: [] },
  };

  // All @zen/icons component names → map to Icon node
  // Icons have pattern: Name01, Name02, etc. or plain names
  const ICON_NODE_ID = '1340:4450';
  const ICON_NAME_RE = /^[A-Z][a-zA-Z0-9]+(?:\d{2})?$/;
  function isIconComponent(name) {
    // Known icon names from the debug output
    const known = ['Bell01','Star01','Plus','Mail01','Heart','Settings01',
      'Search01','Home01','User01','ChevronDown01','ChevronRight01',
      'ChevronLeft01','ChevronUp01','Edit01','Trash01','Download01',
      'Upload01','FileCheck01','FilePdf01','File01','CheckCircle',
      'XCircle','AlertCircle','UserPlus01','Info01','ArrowRight01',
      'ArrowLeft01','ArrowUp01','ArrowDown01','Calendar01','Clock01'];
    return known.includes(name);
  }

  function getFiber(el) {
    const key = Object.keys(el).find(k =>
      k.startsWith('__reactFiber') || k.startsWith('__reactInternalInstance')
    );
    return key ? el[key] : null;
  }

  // Handles: function, forwardRef, memo, lazy, class components
  function getComponentName(type) {
    if (!type) return '';
    if (typeof type === 'string') return type; // 'div', 'button', etc.
    if (typeof type === 'function') return type.displayName || type.name || '';
    if (typeof type === 'object') {
      return type.displayName
        || type.render?.displayName
        || type.render?.name
        || type.type?.displayName
        || type.type?.name
        || '';
    }
    return '';
  }

  function getScrollOffset() {
    return { x: window.scrollX || 0, y: window.scrollY || 0 };
  }

  function collectComponents() {
    const results = [];
    const seen = new WeakSet();
    const scroll = getScrollOffset();
    const allNames = new Set(); // debug: track all component names found

    document.querySelectorAll('*').forEach(el => {
      if (seen.has(el)) return;
      const fiber = getFiber(el);
      if (!fiber) return;

      // Walk fiber upward to find nearest Zen component
      let f = fiber;
      let depth = 0;
      while (f && depth < 8) {
        const name = getComponentName(f.type);
        if (name) allNames.add(name); // debug
        const def = ZEN_MAP[name] || (isIconComponent(name) ? { nodeId: ICON_NODE_ID, variantProps: [] } : null);
        if (name && def) {
          const props = f.memoizedProps || {};
          const stateNode = f.stateNode;

          // Get the actual DOM element for this fiber
          const domEl = stateNode instanceof Element ? stateNode : el;
          if (seen.has(domEl)) break;
          seen.add(domEl);

          const rect = domEl.getBoundingClientRect();
          if (rect.width === 0 && rect.height === 0) break;

          // Extract variant props
          const variantProps = {};
          def.variantProps.forEach(k => {
            if (props[k] !== undefined && props[k] !== null && props[k] !== false) {
              variantProps[k] = String(props[k]);
            }
          });

          // Extract all scalar props for full context
          const allProps = {};
          Object.entries(props).forEach(([k, v]) => {
            if (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') {
              allProps[k] = v;
            }
          });

          results.push({
            component: name,
            nodeId: def.nodeId,
            variantProps,
            allProps,
            // Position relative to document (accounts for scroll)
            x: Math.round(rect.left + scroll.x),
            y: Math.round(rect.top + scroll.y),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
          });
          break;
        }
        f = f.return;
        depth++;
      }
    });

    return results;
  }

  function exportJSON(data) {
    const payload = {
      version: 1,
      capturedAt: new Date().toISOString(),
      url: window.location.href,
      viewport: { width: window.innerWidth, height: window.innerHeight },
      devicePixelRatio: window.devicePixelRatio || 1,
      components: data,
    };

    const json = JSON.stringify(payload, null, 2);

    // Save to localStorage so plugin can also read it if needed
    try { localStorage.setItem('zen-figma-map', json); } catch(e) {}

    // Trigger file download
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'zen-map.json';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 1000);

    console.log(`[Zen Figma Annotator] Exported ${data.length} components to zen-map.json`);
    if (data.length === 0) {
      console.warn('[Zen Figma Annotator] ⚠ 0 components found! Run window.__zenDebug() for details.');
    }
    return payload;
  }

  function run() {
    // Wait for React to fully render
    const delays = [500, 1500, 2500];
    delays.forEach(delay => {
      setTimeout(() => {
        const data = collectComponents();
        if (data.length > 0) {
          console.log(`[Zen Figma Annotator] Found ${data.length} Zen components at ${delay}ms`);
          if (delay === delays[delays.length - 1]) {
            exportJSON(data);
          }
        }
      }, delay);
    });
  }

  // Debug: show all React component names found in the page
  window.__zenDebug = function () {
    const names = new Set();
    let totalElements = 0;
    let elementsWithFiber = 0;

    document.querySelectorAll('*').forEach(el => {
      totalElements++;
      const fiber = getFiber(el);
      if (!fiber) return;
      elementsWithFiber++;
      let f = fiber;
      let d = 0;
      while (f && d < 15) {
        const name = getComponentName(f.type);
        if (name && !name.match(/^[a-z]/)) names.add(name); // skip HTML tags
        f = f.return;
        d++;
      }
    });

    const zenFound = [...names].filter(n => ZEN_MAP[n]);
    const allSorted = [...names].sort();

    console.group('[Zen Debug]');
    console.log(`DOM elements: ${totalElements}`);
    console.log(`Elements with React fiber: ${elementsWithFiber}`);
    console.log(`Unique React component names: ${names.size}`);
    console.log(`Zen components found:`, zenFound);
    console.log(`All component names:`, allSorted);
    console.groupEnd();

    return { total: totalElements, withFiber: elementsWithFiber, zenFound, allNames: allSorted };
  };

  // Auto-run in capture mode
  if (window.location.hash.includes('figmacapture')) {
    console.log('[Zen Figma Annotator] Capture mode — exporting zen-map.json');
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run);
    } else {
      run();
    }
  }

  // Also expose manually: open browser console → window.__zenExport()
  window.__zenExport = function () {
    const data = collectComponents();
    return exportJSON(data);
  };
})();
