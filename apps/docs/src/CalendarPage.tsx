import { useState } from 'react';
import { Calendar } from '@zen/components';
import { DemoBlock } from './DemoBlock';

export function CalendarPage() {
  const [date, setDate] = useState<Date | null>(null);

  const eventDates = [
    new Date(2026, 0, 1),
    new Date(2026, 0, 15),
    new Date(2026, 0, 22),
  ];

  return (
    <>
      {/* ── Header ── */}
      <div className="docs-page-header">
        <div className="docs-page-header-top">
          <div className="docs-page-header-breadcrumb">
            <span className="text-h4" style={{ letterSpacing: '-0.04em' }}>
              <span style={{ color: 'var(--color-content-neutral-primary)' }}>Zen Design System </span>
              <span style={{ color: 'var(--color-content-neutral-tertiary)' }}>by Đìzai Studio</span>
            </span>
          </div>
        </div>
        <div className="docs-page-header-divider" />
        <h1 className="docs-page-title text-display-1">Calendar</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A calendar panel for selecting dates. Supports single date selection, month/year picker, time picker, action buttons, and event indicators.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

      {/* ── When to Use ── */}
      <div className="docs-when-to-use">
        <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>When to use</h3>
        <ul className="text-body-small">
          <li>As a standalone calendar panel or inside a DateField dropdown.</li>
          <li>Use <strong>timePicker</strong> to add From/To time inputs with AM/PM toggle.</li>
          <li>Use <strong>actions</strong> for Cancel/Submit confirmation buttons.</li>
          <li>Use <strong>eventDates</strong> to show accent dots on specific dates.</li>
          <li>Click the month/year header to switch to month/year picker view.</li>
        </ul>
      </div>

      {/* ── Examples ── */}
      <h2 className="docs-section-title text-h3">Examples</h2>

      <div className="docs-demo-grid">
        {/* Basic */}
        <DemoBlock
          title="Basic"
          description="Default calendar with date selection."
        >
          <Calendar
            value={date}
            onChange={setDate}
          />
        </DemoBlock>

        {/* With event dots */}
        <DemoBlock
          title="Event Dots"
          description="Accent dots on dates with events."
        >
          <Calendar
            eventDates={eventDates}
          />
        </DemoBlock>

        {/* With actions */}
        <DemoBlock
          title="With Actions"
          description="Cancel and Submit buttons for confirmation."
        >
          <Calendar
            actions
            onCancel={() => {}}
            onSubmit={(d) => {
              if (d) alert(`Selected: ${d.toLocaleDateString()}`);
            }}
          />
        </DemoBlock>

        {/* With time picker */}
        <DemoBlock
          title="With Time Picker"
          description="From/To time inputs with AM/PM toggle and All day checkbox."
        >
          <Calendar
            timePicker
            actions
            onCancel={() => {}}
            onSubmit={() => {}}
          />
        </DemoBlock>
      </div>

      {/* ── Selected State ── */}
      {date && (
        <p className="text-body-small" style={{ color: 'var(--color-content-neutral-tertiary)', marginTop: 'var(--gap-medium)' }}>
          Selected date: {date.toLocaleDateString()}
        </p>
      )}

      {/* ── API ── */}
      <h2 className="docs-section-title text-h3">API</h2>

      <table className="docs-api-table text-body-small">
        <thead>
          <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>value</code></td>
            <td>Selected date (controlled)</td>
            <td><code>Date | null</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>defaultValue</code></td>
            <td>Default selected date (uncontrolled)</td>
            <td><code>Date | null</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>onChange</code></td>
            <td>Called when a date is selected</td>
            <td><code>(date: Date) =&gt; void</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>timePicker</code></td>
            <td>Show time picker inputs</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td><code>actions</code></td>
            <td>Show Cancel/Submit buttons</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td><code>onCancel</code></td>
            <td>Called when Cancel is clicked</td>
            <td><code>() =&gt; void</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>onSubmit</code></td>
            <td>Called when Submit is clicked</td>
            <td><code>(date: Date | null) =&gt; void</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>eventDates</code></td>
            <td>Dates to show event dots</td>
            <td><code>Date[]</code></td>
            <td><code>[]</code></td>
          </tr>
          <tr>
            <td><code>minDate</code></td>
            <td>Minimum selectable date</td>
            <td><code>Date</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>maxDate</code></td>
            <td>Maximum selectable date</td>
            <td><code>Date</code></td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
}
