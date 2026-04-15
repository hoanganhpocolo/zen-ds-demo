#!/usr/bin/env node
/**
 * Zen Component Audit Script
 *
 * Scans all components in src/ across 9 quality dimensions.
 * Outputs audit-data.json for the dashboard page in docs app.
 *
 * Usage:
 *   node scripts/audit-components.mjs          # generate audit-data.json + print summary
 *   node scripts/audit-components.mjs --check  # CI mode: exit 1 on critical failures
 */

import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC_DIR = join(__dirname, '..', 'src');
const OUTPUT_FILE = join(SRC_DIR, 'audit-data.json');
const CI_MODE = process.argv.includes('--check');

// Form components that should use FieldShell
const FORM_COMPONENTS = new Set([
  'InputField', 'TextArea', 'NumberField', 'SelectField',
  'Search', 'Checkbox', 'Radio', 'Toggle', 'Slider', 'FileUploader',
]);

// --- Component Discovery ---

async function discoverComponents() {
  const entries = await readdir(SRC_DIR, { withFileTypes: true });
  const components = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const name = entry.name;
    const dir = join(SRC_DIR, name);
    const mainFile = join(dir, `${name}.tsx`);
    const indexFile = join(dir, 'index.ts');

    // Find main tsx file(s) — some dirs have DirName.tsx, others have sub-component files
    const hasMainFile = await fileExists(mainFile);
    let tsxFiles = [];

    if (hasMainFile) {
      tsxFiles = [mainFile];
    } else {
      // Multi-component dirs (Progress, Rating) — gather all .tsx files
      const dirEntries = await readdir(dir);
      tsxFiles = dirEntries
        .filter((f) => f.endsWith('.tsx'))
        .map((f) => join(dir, f));
    }

    if (tsxFiles.length === 0) continue;

    // Find CSS module file
    const dirFiles = await readdir(dir);
    const cssFile = dirFiles.find((f) => f.endsWith('.module.css'));

    components.push({
      name,
      dir,
      mainFiles: tsxFiles,
      cssFile: cssFile ? join(dir, cssFile) : null,
      indexFile: (await fileExists(indexFile)) ? indexFile : null,
    });
  }

  return components.sort((a, b) => a.name.localeCompare(b.name));
}

async function fileExists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

// --- Audit-Ignore Parser ---

function parseAuditIgnores(content) {
  const ignores = new Set();
  const regex = /\/\/\s*audit-ignore:\s*(.+)/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    match[1].split(',').forEach((id) => ignores.add(id.trim()));
  }
  return ignores;
}

// --- 9 Audit Checks ---

function checkForwardRef(allContent) {
  if (/forwardRef[<(]/.test(allContent)) {
    return { status: 'pass', detail: 'forwardRef found' };
  }
  return { status: 'fail', detail: 'No forwardRef usage detected' };
}

function checkDisplayName(allContent, name) {
  if (new RegExp(`\\.displayName\\s*=`).test(allContent)) {
    return { status: 'pass', detail: `displayName set` };
  }
  return { status: 'fail', detail: `No displayName assignment found` };
}

function checkPropsExport(indexContent) {
  if (!indexContent) {
    return { status: 'fail', detail: 'No index.ts file found' };
  }
  if (/export\s+(type\s+\{[^}]*Props|type\s+\w*Props)/.test(indexContent)) {
    return { status: 'pass', detail: 'Props types exported' };
  }
  return { status: 'fail', detail: 'No Props type export in index.ts' };
}

function checkSizeNaming(allContent) {
  // Only check if component defines size-related types
  const hasSizeType = /size.*?:/i.test(allContent) || /Size\s*=/.test(allContent);
  if (!hasSizeType) {
    return { status: 'pass', detail: 'No size prop defined' };
  }
  // Flag if using long-form size names in type definitions
  if (/['"](?:small|medium|large)['"]/.test(allContent)) {
    return { status: 'fail', detail: 'Uses small/medium/large instead of s/m/l' };
  }
  return { status: 'pass', detail: 'Consistent size naming (s/m/l)' };
}

function checkIconStrategy(allContent) {
  const hasInlineSvg = /<svg[\s>]/.test(allContent);
  const hasIconImport = /@zen\/icons/.test(allContent);

  if (hasInlineSvg && hasIconImport) {
    return { status: 'warn', detail: 'Mixed: inline SVG + @zen/icons import' };
  }
  if (hasInlineSvg) {
    return { status: 'warn', detail: 'Uses inline SVG instead of @zen/icons' };
  }
  if (hasIconImport) {
    return { status: 'pass', detail: 'Uses @zen/icons' };
  }
  return { status: 'n/a', detail: 'No icons used' };
}

function checkAccessibility(allContent) {
  let score = 0;
  const details = [];

  if (/aria-/.test(allContent)) { score++; details.push('aria attrs'); }
  if (/role\s*=/.test(allContent)) { score++; details.push('role'); }
  if (/onKey(Down|Up|Press)/.test(allContent)) { score++; details.push('keyboard'); }
  if (/tabIndex/.test(allContent)) { score++; details.push('tabIndex'); }

  if (score >= 2) {
    return { status: 'pass', detail: `Found: ${details.join(', ')}` };
  }
  if (score === 1) {
    return { status: 'warn', detail: `Only: ${details.join(', ')}` };
  }
  return { status: 'fail', detail: 'No accessibility attributes found' };
}

function checkFileSize(allContent, totalLines) {
  if (totalLines <= 200) {
    return { status: 'pass', detail: `${totalLines} lines` };
  }
  if (totalLines <= 400) {
    return { status: 'warn', detail: `${totalLines} lines (>200)` };
  }
  return { status: 'fail', detail: `${totalLines} lines (>400)` };
}

function checkCssTokens(cssContent) {
  if (!cssContent) {
    return { status: 'pass', detail: 'No CSS module file' };
  }
  const tokenUsage = (cssContent.match(/var\(--/g) || []).length;
  // Match hex colors but exclude common harmless ones in SVG data URIs
  const hardcodedHex = (cssContent.match(/#[0-9a-fA-F]{3,8}\b/g) || []).length;

  if (hardcodedHex === 0) {
    return { status: 'pass', detail: `${tokenUsage} token refs, 0 hardcoded hex` };
  }
  return {
    status: 'warn',
    detail: `${tokenUsage} token refs, ${hardcodedHex} hardcoded hex values`,
  };
}

function checkFieldShell(allContent, name) {
  if (!FORM_COMPONENTS.has(name)) {
    return { status: 'n/a', detail: 'Not a form component' };
  }
  if (/FieldShell/.test(allContent)) {
    return { status: 'pass', detail: 'Uses FieldShell' };
  }
  return { status: 'warn', detail: 'Form component without FieldShell' };
}

// --- Score Calculator ---

function computeScore(checks) {
  let earned = 0;
  let applicable = 0;

  for (const check of Object.values(checks)) {
    if (check.status === 'n/a') continue;
    applicable++;
    if (check.status === 'pass') earned += 1;
    else if (check.status === 'warn') earned += 0.5;
    // fail = 0
  }

  return applicable > 0 ? +(earned / applicable).toFixed(2) : 1;
}

// --- Main Runner ---

async function run() {
  const components = await discoverComponents();
  console.log(`Discovered ${components.length} components\n`);

  const results = [];
  let totalPass = 0;
  let totalWarn = 0;
  let totalFail = 0;

  for (const comp of components) {
    // Read all tsx files and concatenate content
    const tsxContents = await Promise.all(
      comp.mainFiles.map((f) => readFile(f, 'utf-8'))
    );
    const allContent = tsxContents.join('\n');
    const totalLines = tsxContents.reduce(
      (sum, c) => sum + c.split('\n').length, 0
    );

    const indexContent = comp.indexFile
      ? await readFile(comp.indexFile, 'utf-8')
      : null;
    const cssContent = comp.cssFile
      ? await readFile(comp.cssFile, 'utf-8')
      : null;

    // Parse audit-ignore comments
    const ignores = parseAuditIgnores(allContent);

    // Run all 9 checks
    const rawChecks = {
      forwardRef: checkForwardRef(allContent),
      displayName: checkDisplayName(allContent, comp.name),
      propsExport: checkPropsExport(indexContent),
      sizeNaming: checkSizeNaming(allContent),
      iconStrategy: checkIconStrategy(allContent),
      accessibility: checkAccessibility(allContent),
      fileSize: checkFileSize(allContent, totalLines),
      cssTokens: checkCssTokens(cssContent),
      fieldShell: checkFieldShell(allContent, comp.name),
    };

    // Apply audit-ignore overrides
    const checks = {};
    for (const [id, result] of Object.entries(rawChecks)) {
      if (ignores.has(id)) {
        checks[id] = { status: 'pass', detail: `Ignored via audit-ignore` };
      } else {
        checks[id] = result;
      }
    }

    // Count statuses
    for (const c of Object.values(checks)) {
      if (c.status === 'pass') totalPass++;
      else if (c.status === 'warn') totalWarn++;
      else if (c.status === 'fail') totalFail++;
    }

    results.push({
      name: comp.name,
      score: computeScore(checks),
      checks,
    });
  }

  const output = {
    _generated: 'Auto-generated by audit-components.mjs. Do not edit manually.',
    generated: new Date().toISOString(),
    summary: {
      total: components.length,
      averageScore: +(
        results.reduce((s, r) => s + r.score, 0) / results.length
      ).toFixed(2),
      passCount: totalPass,
      warnCount: totalWarn,
      failCount: totalFail,
    },
    components: results,
  };

  // Write JSON
  await writeFile(OUTPUT_FILE, JSON.stringify(output, null, 2) + '\n', 'utf-8');
  console.log(`Written: ${OUTPUT_FILE}\n`);

  // Print summary table
  printSummary(results, output.summary);

  // CI mode: exit 1 on critical failures
  if (CI_MODE) {
    const criticalFailures = results.filter((r) =>
      r.checks.forwardRef.status === 'fail' ||
      r.checks.displayName.status === 'fail'
    );
    if (criticalFailures.length > 0) {
      console.log(`\n❌ CI CHECK FAILED: ${criticalFailures.length} component(s) with critical failures:`);
      for (const c of criticalFailures) {
        const fails = [];
        if (c.checks.forwardRef.status === 'fail') fails.push('forwardRef');
        if (c.checks.displayName.status === 'fail') fails.push('displayName');
        console.log(`  - ${c.name}: ${fails.join(', ')}`);
      }
      process.exit(1);
    }
    console.log('\n✓ CI CHECK PASSED: All critical checks (forwardRef, displayName) pass.');
  }
}

function printSummary(results, summary) {
  // Header
  const header = [
    'Component'.padEnd(22),
    'Score'.padStart(6),
    'Ref'.padStart(5),
    'Name'.padStart(5),
    'Props'.padStart(6),
    'Size'.padStart(5),
    'Icons'.padStart(6),
    'A11y'.padStart(5),
    'Lines'.padStart(6),
    'CSS'.padStart(5),
    'Field'.padStart(6),
  ].join(' ');

  console.log(header);
  console.log('-'.repeat(header.length));

  for (const r of results) {
    const c = r.checks;
    const row = [
      r.name.padEnd(22),
      `${Math.round(r.score * 100)}%`.padStart(6),
      statusIcon(c.forwardRef.status).padStart(5),
      statusIcon(c.displayName.status).padStart(5),
      statusIcon(c.propsExport.status).padStart(6),
      statusIcon(c.sizeNaming.status).padStart(5),
      statusIcon(c.iconStrategy.status).padStart(6),
      statusIcon(c.accessibility.status).padStart(5),
      statusIcon(c.fileSize.status).padStart(6),
      statusIcon(c.cssTokens.status).padStart(5),
      statusIcon(c.fieldShell.status).padStart(6),
    ].join(' ');
    console.log(row);
  }

  console.log('-'.repeat(header.length));
  console.log(
    `Total: ${summary.total} components | ` +
    `Avg score: ${Math.round(summary.averageScore * 100)}% | ` +
    `Pass: ${summary.passCount} | Warn: ${summary.warnCount} | Fail: ${summary.failCount}`
  );
}

function statusIcon(status) {
  switch (status) {
    case 'pass': return 'OK';
    case 'warn': return '~~';
    case 'fail': return 'XX';
    case 'n/a':  return '--';
    default:     return '??';
  }
}

run().catch((err) => {
  console.error('Audit script failed:', err);
  process.exit(2);
});
