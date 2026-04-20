import { useState } from 'react';
import {
  Segmented,
  Table, TableContainer, TableHead, TableBody, TableRow, TableHeaderCell, TableCell,
} from '@zen/components';
import { WidgetShell } from './WidgetShell';
import { registerWidget } from './registry';
import './widget-content.css';

type RowType = 'section' | 'data';
interface Row {
  type: RowType;
  label: string;
  values?: (string | number)[];
}

const rows: Row[] = [
  { type: 'section', label: 'STRATEGIC (VNDbn)' },
  { type: 'data', label: 'Gross Booking',                       values: ['6,138', '6,961', '6,572', '94%',  '7%',  '3,062', '44%', '95%'] },
  { type: 'data', label: 'Net Revenue (IFRS)',                  values: ['5,556', '6,405', '5,733', '90%',  '3%',  '2,559', '40%', '86%'] },
  { type: 'data', label: 'Adjusted Operating Profit',           values: ['1,476', '1,336', '1,368', '102%', '-7%', '808',   '60%', '176%'] },
  { type: 'section', label: 'FINANCIALS (VNDbn)' },
  { type: 'data', label: '% International Contributing Margin', values: ['-35%',  '5%',    '-12%',  '',     '',    '-12%',  '',    '']    },
  { type: 'data', label: 'Revenue of ever-green titles',        values: ['2,256', '2,594', '2,678', '103%', '19%', '1,355', '52%', '153%'] },
];

interface Col {
  key: string;
  header: string[];
}

const columns: Col[] = [
  { key: 'a2024',   header: ['A2024'] },
  { key: 'kpi2025', header: ['KPI2025'] },
  { key: 'fcs2025', header: ['FCS2025'] },
  { key: 'pctkpi',  header: ['% KPI', '2025'] },
  { key: 'yoy',     header: ['%YoY vs', 'A2024'] },
  { key: 'actual',  header: ['Actual', '1H.2025'] },
  { key: 'vskpi',   header: ['%1H.2025', 'vs KPI2025'] },
  { key: 'vsplan',  header: ['%1H.2025', 'vs YTD Plan'] },
];

export function FinanceWidget({ menu }: { menu?: React.ReactNode }) {
  const [tab, setTab] = useState('highlights');

  return (
    <WidgetShell
      title=""
      icon={
        <Segmented
          size="medium"
          items={[
            { value: 'highlights', label: 'Key Highlights' },
            { value: 'gross',      label: 'Gross Booking' },
          ]}
          value={tab}
          onChange={(v) => setTab(v)}
        />
      }
      menu={menu}
    >
      <TableContainer className="wc-finance-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell label="Goals" sticky="left" />
              {columns.map((col) => (
                <TableHeaderCell key={col.key} align="right">
                  {col.header.map((line, i) => (
                    <span key={i} className="wc-finance-header-line">{line}</span>
                  ))}
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, ri) =>
              row.type === 'section' ? (
                <TableRow key={ri} className="wc-finance-section-row">
                  <TableCell sticky="left" className="wc-finance-section-cell">
                    <span className="text-body-small wc-finance-section-label">{row.label}</span>
                  </TableCell>
                  {columns.map((col) => (
                    <TableCell key={col.key} className="wc-finance-section-cell" />
                  ))}
                </TableRow>
              ) : (
                <TableRow key={ri}>
                  <TableCell sticky="left">{row.label}</TableCell>
                  {columns.map((col, ci) => (
                    <TableCell key={col.key} align="right">
                      {row.values?.[ci] ?? ''}
                    </TableCell>
                  ))}
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </WidgetShell>
  );
}

registerWidget({
  id: 'finance',
  title: 'Finance Key Highlight',
  category: 'fpa',
  defaultW: 2,
  defaultH: 4,
  minW: 2,
  minH: 3,
  component: FinanceWidget,
  emoji: '💰',
  description: 'Key financial metrics at a glance',
});
