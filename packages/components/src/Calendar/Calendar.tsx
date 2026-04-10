import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type HTMLAttributes,
} from 'react';
import { Button } from '../Button';
import { InputField } from '../InputField';
import { Checkbox } from '../Checkbox';
import styles from './Calendar.module.css';

/* ── Types ── */

export type CalendarVariant = 'popover' | 'inline';

export interface CalendarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue' | 'onSubmit'> {
  /** Visual variant: 'popover' (default, with border/shadow/glass) or 'inline' (flat, no decoration) */
  variant?: CalendarVariant;
  /** Selected date */
  value?: Date | null;
  /** Default selected date (uncontrolled) */
  defaultValue?: Date | null;
  /** Called when a date is selected */
  onChange?: (date: Date) => void;
  /** Show time picker (From/To inputs + All day checkbox) */
  timePicker?: boolean;
  /** Show action buttons (Cancel / Submit) */
  actions?: boolean;
  /** Called when Cancel is clicked */
  onCancel?: () => void;
  /** Called when Submit is clicked */
  onSubmit?: (date: Date | null) => void;
  /** Dates with event dots */
  eventDates?: Date[];
  /** Week starts on Monday (default true) */
  weekStartsOnMonday?: boolean;
  /** Min selectable date */
  minDate?: Date;
  /** Max selectable date */
  maxDate?: Date;
}

type ViewMode = 'calendar' | 'month-year';

interface TimeState {
  fromTime: string;
  fromPeriod: 'AM' | 'PM';
  fromAllDay: boolean;
  toTime: string;
  toPeriod: 'AM' | 'PM';
  toAllDay: boolean;
}

/* ── Helpers ── */

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const DAY_HEADERS_MON = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const DAY_HEADERS_SUN = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isToday(date: Date): boolean {
  return isSameDay(date, new Date());
}

function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number, mondayStart: boolean): number {
  const day = new Date(year, month, 1).getDay();
  if (mondayStart) return day === 0 ? 6 : day - 1;
  return day;
}

function hasEvent(date: Date, eventDates: Date[]): boolean {
  return eventDates.some((ed) => isSameDay(date, ed));
}

/* ── Component ── */

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      variant = 'popover',
      value: controlledValue,
      defaultValue,
      onChange,
      timePicker = false,
      actions = false,
      onCancel,
      onSubmit,
      eventDates = [],
      weekStartsOnMonday = true,
      minDate,
      maxDate,
      className,
      ...rest
    },
    ref,
  ) => {
    const today = new Date();
    const [internalValue, setInternalValue] = useState<Date | null>(defaultValue ?? null);
    const isControlled = controlledValue !== undefined;
    const selected = isControlled ? controlledValue : internalValue;

    const [viewMonth, setViewMonth] = useState(selected?.getMonth() ?? today.getMonth());
    const [viewYear, setViewYear] = useState(selected?.getFullYear() ?? today.getFullYear());
    const [viewMode, setViewMode] = useState<ViewMode>('calendar');

    const [time, setTime] = useState<TimeState>({
      fromTime: '',
      fromPeriod: 'AM',
      fromAllDay: false,
      toTime: '',
      toPeriod: 'AM',
      toAllDay: false,
    });

    // Month/Year picker state
    const [pickerMonth, setPickerMonth] = useState(viewMonth);
    const [pickerYear, setPickerYear] = useState(viewYear);

    const handleSelectDate = useCallback(
      (date: Date) => {
        if (minDate && date < minDate) return;
        if (maxDate && date > maxDate) return;
        if (!isControlled) setInternalValue(date);
        onChange?.(date);
      },
      [isControlled, onChange, minDate, maxDate],
    );

    const handlePrevMonth = useCallback(() => {
      setViewMonth((m) => {
        if (m === 0) {
          setViewYear((y) => y - 1);
          return 11;
        }
        return m - 1;
      });
    }, []);

    const handleNextMonth = useCallback(() => {
      setViewMonth((m) => {
        if (m === 11) {
          setViewYear((y) => y + 1);
          return 0;
        }
        return m + 1;
      });
    }, []);

    const toggleView = useCallback(() => {
      if (viewMode === 'calendar') {
        setPickerMonth(viewMonth);
        setPickerYear(viewYear);
        setViewMode('month-year');
      } else {
        setViewMonth(pickerMonth);
        setViewYear(pickerYear);
        setViewMode('calendar');
      }
    }, [viewMode, viewMonth, viewYear, pickerMonth, pickerYear]);

    const handleMonthYearCancel = useCallback(() => {
      setViewMode('calendar');
    }, []);

    const handleMonthYearSubmit = useCallback(() => {
      setViewMonth(pickerMonth);
      setViewYear(pickerYear);
      setViewMode('calendar');
    }, [pickerMonth, pickerYear]);

    // Build calendar grid
    const calendarGrid = useMemo(() => {
      const firstDay = getFirstDayOfMonth(viewYear, viewMonth, weekStartsOnMonday);
      const daysInMonth = getDaysInMonth(viewYear, viewMonth);
      const rows: (Date | null)[][] = [];
      let currentRow: (Date | null)[] = [];

      // Leading blanks
      for (let i = 0; i < firstDay; i++) {
        currentRow.push(null);
      }

      // Days
      for (let d = 1; d <= daysInMonth; d++) {
        currentRow.push(new Date(viewYear, viewMonth, d));
        if (currentRow.length === 7) {
          rows.push(currentRow);
          currentRow = [];
        }
      }

      // Trailing blanks
      if (currentRow.length > 0) {
        while (currentRow.length < 7) {
          currentRow.push(null);
        }
        rows.push(currentRow);
      }

      return rows;
    }, [viewYear, viewMonth, weekStartsOnMonday]);

    // ── Drag-scroll state for month/year columns ──
    const ITEM_HEIGHT = 36; // line-height-h4 (32) + gap (4)
    const CENTER = 4; // center index in 9-item array

    const monthColRef = useRef<HTMLDivElement>(null);
    const yearColRef = useRef<HTMLDivElement>(null);

    // dragDelta: pixels dragged upward (positive = up = later values)
    const [monthDragDelta, setMonthDragDelta] = useState(0);
    const [yearDragDelta, setYearDragDelta] = useState(0);
    const [isMonthDragging, setIsMonthDragging] = useState(false);
    const [isYearDragging, setIsYearDragging] = useState(false);

    const DRAG_THRESHOLD = 5; // px — below this, treat as click
    const monthDragRef = useRef({ startY: 0, pointerId: -1 });
    const yearDragRef = useRef({ startY: 0, pointerId: -1 });

    // Render 9 items centered on pickerMonth/pickerYear for drag buffer
    const monthItems = useMemo(() => {
      const items: { name: string; monthIdx: number }[] = [];
      for (let i = -CENTER; i <= CENTER; i++) {
        const m = ((pickerMonth + i) % 12 + 12) % 12;
        items.push({ name: MONTH_NAMES[m], monthIdx: m });
      }
      return items;
    }, [pickerMonth]);

    const yearItems = useMemo(() => {
      const items: { year: number }[] = [];
      for (let i = -CENTER; i <= CENTER; i++) {
        items.push({ year: pickerYear + i });
      }
      return items;
    }, [pickerYear]);

    // Smooth opacity based on visual distance from center
    const getItemOpacity = useCallback((index: number, dragDelta: number) => {
      const dist = Math.abs(index - (CENTER + dragDelta / ITEM_HEIGHT));
      if (dist < 0.5) return 1;
      if (dist < 1.5) return 1 - (dist - 0.5) * 0.6;
      if (dist < 2.5) return 0.4 - (dist - 1.5) * 0.2;
      return 0;
    }, []);

    // translateY for the inner wrapper:
    // center item (index CENTER) at visual center of 5-item viewport
    // baseOffset = -(CENTER - 2) * ITEM_HEIGHT = -2 * ITEM_HEIGHT
    const getTranslateY = useCallback((dragDelta: number) => {
      return -2 * ITEM_HEIGHT - dragDelta;
    }, []);

    // Effective values during drag (for header display)
    const effectiveMonth = useMemo(() => {
      const steps = Math.round(monthDragDelta / ITEM_HEIGHT);
      return ((pickerMonth + steps) % 12 + 12) % 12;
    }, [pickerMonth, monthDragDelta]);

    const effectiveYear = useMemo(() => {
      return pickerYear + Math.round(yearDragDelta / ITEM_HEIGHT);
    }, [pickerYear, yearDragDelta]);

    // ── Month drag handlers ──
    const handleMonthPointerDown = useCallback((e: React.PointerEvent) => {
      monthDragRef.current = { startY: e.clientY, pointerId: e.pointerId };
      setIsMonthDragging(true);
      setMonthDragDelta(0);
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    }, []);

    const handleMonthPointerMove = useCallback((e: React.PointerEvent) => {
      if (!isMonthDragging) return;
      const delta = monthDragRef.current.startY - e.clientY;
      setMonthDragDelta(delta);
    }, [isMonthDragging]);

    const handleMonthPointerUp = useCallback((e: React.PointerEvent) => {
      if (!isMonthDragging) return;
      const totalMove = Math.abs(monthDragDelta);

      if (totalMove < DRAG_THRESHOLD) {
        // Click — determine which item was clicked based on Y position
        const rect = monthColRef.current?.getBoundingClientRect();
        if (rect) {
          const clickY = e.clientY - rect.top;
          // Each visible slot is ITEM_HEIGHT, center is at slot index 2 (0-based)
          const slotIndex = Math.floor(clickY / ITEM_HEIGHT);
          const offset = slotIndex - 2; // -2 to +2 from center
          if (offset !== 0) {
            setPickerMonth((m) => ((m + offset) % 12 + 12) % 12);
          }
        }
        setMonthDragDelta(0);
        setIsMonthDragging(false);
        return;
      }

      const steps = Math.round(monthDragDelta / ITEM_HEIGHT);
      const remainder = monthDragDelta - steps * ITEM_HEIGHT;

      setPickerMonth((m) => ((m + steps) % 12 + 12) % 12);
      setMonthDragDelta(remainder);
      setIsMonthDragging(false);

      requestAnimationFrame(() => {
        setMonthDragDelta(0);
      });
    }, [isMonthDragging, monthDragDelta]);

    // ── Year drag handlers ──
    const handleYearPointerDown = useCallback((e: React.PointerEvent) => {
      yearDragRef.current = { startY: e.clientY, pointerId: e.pointerId };
      setIsYearDragging(true);
      setYearDragDelta(0);
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    }, []);

    const handleYearPointerMove = useCallback((e: React.PointerEvent) => {
      if (!isYearDragging) return;
      const delta = yearDragRef.current.startY - e.clientY;
      setYearDragDelta(delta);
    }, [isYearDragging]);

    const handleYearPointerUp = useCallback((e: React.PointerEvent) => {
      if (!isYearDragging) return;
      const totalMove = Math.abs(yearDragDelta);

      if (totalMove < DRAG_THRESHOLD) {
        const rect = yearColRef.current?.getBoundingClientRect();
        if (rect) {
          const clickY = e.clientY - rect.top;
          const slotIndex = Math.floor(clickY / ITEM_HEIGHT);
          const offset = slotIndex - 2;
          if (offset !== 0) {
            setPickerYear((y) => y + offset);
          }
        }
        setYearDragDelta(0);
        setIsYearDragging(false);
        return;
      }

      const steps = Math.round(yearDragDelta / ITEM_HEIGHT);
      const remainder = yearDragDelta - steps * ITEM_HEIGHT;

      setPickerYear((y) => y + steps);
      setYearDragDelta(remainder);
      setIsYearDragging(false);

      requestAnimationFrame(() => {
        setYearDragDelta(0);
      });
    }, [isYearDragging, yearDragDelta]);

    // ── Wheel handlers ──
    const handleMonthWheel = useCallback((e: React.WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) setPickerMonth((m) => (m + 1) % 12);
      else if (e.deltaY < 0) setPickerMonth((m) => (m - 1 + 12) % 12);
    }, []);

    const handleYearWheel = useCallback((e: React.WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) setPickerYear((y) => y + 1);
      else if (e.deltaY < 0) setPickerYear((y) => y - 1);
    }, []);

    // Prevent default wheel (must be non-passive)
    useEffect(() => {
      const monthEl = monthColRef.current;
      const yearEl = yearColRef.current;
      const prevent = (e: WheelEvent) => e.preventDefault();
      const opts: AddEventListenerOptions = { passive: false };
      monthEl?.addEventListener('wheel', prevent, opts);
      yearEl?.addEventListener('wheel', prevent, opts);
      return () => {
        monthEl?.removeEventListener('wheel', prevent);
        yearEl?.removeEventListener('wheel', prevent);
      };
    }, [viewMode]);

    const rootClassNames = [styles.root, variant === 'inline' ? styles['root-inline'] : '', className ?? ''].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={rootClassNames} {...rest}>
        <div className={styles.container}>
          {viewMode === 'calendar' && (
            <>
              {/* Header */}
              <div className={styles.header}>
                <Button
                  variant="tertiary"
                  size="s"
                  icon={<ChevronLeftIcon />}
                  onClick={handlePrevMonth}
                  aria-label="Previous month"
                />
                <button
                  type="button"
                  className={styles['header-label']}
                  onClick={toggleView}
                >
                  <span>{MONTH_NAMES[viewMonth]}</span>
                  <span>{viewYear}</span>
                </button>
                <Button
                  variant="tertiary"
                  size="s"
                  icon={<ChevronRightIcon />}
                  onClick={handleNextMonth}
                  aria-label="Next month"
                />
              </div>

              {/* Calendar Table */}
              <div className={styles.table}>
                {/* Day headers */}
                <div className={styles['day-headers']}>
                  {(weekStartsOnMonday ? DAY_HEADERS_MON : DAY_HEADERS_SUN).map((d, i) => (
                    <span key={i} className={styles['day-header']}>
                      {d}
                    </span>
                  ))}
                </div>

                {/* Day rows */}
                {calendarGrid.map((row, ri) => (
                  <div key={ri} className={styles.row}>
                    {row.map((date, ci) => {
                      if (!date) {
                        return <div key={ci} className={styles.cell} />;
                      }

                      const isSelected = selected ? isSameDay(date, selected) : false;
                      const isTodayDate = isToday(date);
                      const isWeekendDate = isWeekend(date);
                      const hasEventDot = hasEvent(date, eventDates);
                      const isDisabled =
                        (minDate && date < minDate) || (maxDate && date > maxDate);

                      const cellClassNames = [
                        styles.cell,
                        styles['cell-interactive'],
                        isSelected ? styles['cell-selected'] : '',
                        isTodayDate && !isSelected ? styles['cell-today'] : '',
                        isWeekendDate && !isSelected ? styles['cell-weekend'] : '',
                        isDisabled ? styles['cell-disabled'] : '',
                      ]
                        .filter(Boolean)
                        .join(' ');

                      return (
                        <button
                          key={ci}
                          type="button"
                          className={cellClassNames}
                          onClick={() => !isDisabled && handleSelectDate(date)}
                          disabled={!!isDisabled}
                        >
                          <span>{date.getDate()}</span>
                          {hasEventDot && (
                            <span className={styles['event-dot']} />
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Time Picker */}
              {timePicker && (
                <>
                  <div className={styles.divider} />
                  <div className={styles['time-section']}>
                    {/* From */}
                    <InputField
                      label="From"
                      size="s"
                      placeholder="hh:mm"
                      value={time.fromTime}
                      onChange={(e) =>
                        setTime((t) => ({ ...t, fromTime: e.target.value }))
                      }
                      disabled={time.fromAllDay}
                      trailing={
                        <button
                          type="button"
                          className={styles['period-toggle']}
                          onClick={() =>
                            setTime((t) => ({
                              ...t,
                              fromPeriod: t.fromPeriod === 'AM' ? 'PM' : 'AM',
                            }))
                          }
                          disabled={time.fromAllDay}
                        >
                          {time.fromPeriod}
                          <ChevronDownIcon />
                        </button>
                      }
                    />
                    <Checkbox
                      label="All day"
                      checked={time.fromAllDay}
                      onChange={(e) =>
                        setTime((t) => ({ ...t, fromAllDay: e.target.checked }))
                      }
                    />

                    {/* To */}
                    <InputField
                      label="To"
                      size="s"
                      placeholder="hh:mm"
                      value={time.toTime}
                      onChange={(e) =>
                        setTime((t) => ({ ...t, toTime: e.target.value }))
                      }
                      disabled={time.toAllDay}
                      trailing={
                        <button
                          type="button"
                          className={styles['period-toggle']}
                          onClick={() =>
                            setTime((t) => ({
                              ...t,
                              toPeriod: t.toPeriod === 'AM' ? 'PM' : 'AM',
                            }))
                          }
                          disabled={time.toAllDay}
                        >
                          {time.toPeriod}
                          <ChevronDownIcon />
                        </button>
                      }
                    />
                    <Checkbox
                      label="All day"
                      checked={time.toAllDay}
                      onChange={(e) =>
                        setTime((t) => ({ ...t, toAllDay: e.target.checked }))
                      }
                    />
                  </div>
                </>
              )}

              {/* Actions */}
              {actions && (
                <div className={styles.actions}>
                  <Button variant="tertiary" size="s" onClick={onCancel}>
                    Cancel
                  </Button>
                  <Button variant="primary" size="s" onClick={() => onSubmit?.(selected ?? null)}>
                    Submit
                  </Button>
                </div>
              )}
            </>
          )}

          {viewMode === 'month-year' && (
            <>
              {/* Month/Year header (focused style) */}
              <button
                type="button"
                className={styles['header-label-focused']}
                onClick={toggleView}
              >
                <span>{MONTH_NAMES[effectiveMonth]}</span>
                <span>{effectiveYear}</span>
              </button>

              {/* Month/Year scroller */}
              <div className={styles['month-year-list']}>
                {/* Month column */}
                <div
                  ref={monthColRef}
                  className={styles['month-year-col']}
                  onWheel={handleMonthWheel}
                  onPointerDown={handleMonthPointerDown}
                  onPointerMove={handleMonthPointerMove}
                  onPointerUp={handleMonthPointerUp}
                  onPointerCancel={handleMonthPointerUp}
                >
                  <div
                    className={styles['month-year-col-inner']}
                    style={{
                      transform: `translateY(${getTranslateY(monthDragDelta)}px)`,
                      transition: isMonthDragging ? 'none' : 'transform 250ms ease-out',
                    }}
                  >
                    {monthItems.map((item, i) => (
                      <span
                        key={`${pickerMonth}-${i}`}
                        className={styles['month-year-item']}
                        style={{ opacity: getItemOpacity(i, monthDragDelta) }}
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Year column */}
                <div
                  ref={yearColRef}
                  className={[styles['month-year-col'], styles['month-year-col-right']].join(' ')}
                  onWheel={handleYearWheel}
                  onPointerDown={handleYearPointerDown}
                  onPointerMove={handleYearPointerMove}
                  onPointerUp={handleYearPointerUp}
                  onPointerCancel={handleYearPointerUp}
                >
                  <div
                    className={styles['month-year-col-inner']}
                    style={{
                      transform: `translateY(${getTranslateY(yearDragDelta)}px)`,
                      transition: isYearDragging ? 'none' : 'transform 250ms ease-out',
                    }}
                  >
                    {yearItems.map((item, i) => (
                      <span
                        key={`${pickerYear}-${i}`}
                        className={styles['month-year-item']}
                        style={{ opacity: getItemOpacity(i, yearDragDelta) }}
                      >
                        {item.year}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Month/Year actions */}
              <div className={styles.actions}>
                <Button variant="tertiary" size="s" onClick={handleMonthYearCancel}>
                  Cancel
                </Button>
                <Button variant="primary" size="s" onClick={handleMonthYearSubmit}>
                  Submit
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  },
);

Calendar.displayName = 'Calendar';

/* ── Inline SVG icons ── */

function ChevronLeftIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
