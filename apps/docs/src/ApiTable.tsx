import type { ReactNode, CSSProperties } from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
} from '@zen/components';
import styles from './ApiTable.module.css';

interface ApiTableProps {
  columns: string[];
  rows: ReactNode[][];
  /** Override column widths, e.g. ['40%', '30%', '30%']. Falls back to built-in presets. */
  colWidths?: string[];
  style?: CSSProperties;
  className?: string;
}

/** Default column width presets keyed by number of columns */
const COL_CLASSES: Record<number, string[]> = {
  4: [styles['col-prop'], styles['col-desc'], styles['col-type'], styles['col-default']],
  3: [styles['col-3-a'], styles['col-3-b'], styles['col-3-c']],
};

export function ApiTable({ columns, rows, colWidths, style, className }: ApiTableProps) {
  const colClasses = COL_CLASSES[columns.length] ?? [];
  const hasColWidths = colWidths && colWidths.length === columns.length;

  return (
    <TableContainer
      style={style}
      className={[styles.wrap, className].filter(Boolean).join(' ')}
    >
      <Table style={{ width: '100%', tableLayout: 'fixed' }}>
        {(hasColWidths || colClasses.length > 0) && (
          <colgroup>
            {columns.map((_, i) => (
              <col
                key={i}
                style={hasColWidths ? { width: colWidths![i] } : undefined}
                className={!hasColWidths ? colClasses[i] : undefined}
              />
            ))}
          </colgroup>
        )}
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableHeaderCell key={col}>{col}</TableHeaderCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              {row.map((cell, j) => (
                <TableCell key={j}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
