import { SelectField } from '@zen/components';
import { Globe01, User } from '@zen/icons/line';
import { DemoBlock } from './DemoBlock';

/* ── Sample data ── */

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'dragonfruit', label: 'Dragon Fruit' },
  { value: 'elderberry', label: 'Elderberry' },
];

const countries = [
  { value: 'vn', label: 'Vietnam' },
  { value: 'us', label: 'United States' },
  { value: 'jp', label: 'Japan' },
  { value: 'kr', label: 'South Korea' },
  { value: 'sg', label: 'Singapore' },
  { value: 'th', label: 'Thailand' },
];

const roles = [
  { value: 'admin', label: 'Admin', caption: 'Full access to all features' },
  { value: 'editor', label: 'Editor', caption: 'Can edit and publish content' },
  { value: 'viewer', label: 'Viewer', caption: 'Read-only access' },
  { value: 'guest', label: 'Guest', caption: 'Limited access', disabled: true },
];

const priorities = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'critical', label: 'Critical' },
];

export function SelectFieldPage() {
  return (
    <>
      {/* ── Header ── */}
      <div className="docs-page-header">
        <div className="docs-page-header-top">
          <div className="docs-page-header-breadcrumb">
            <span className="text-subheading">
              <span style={{ color: 'var(--color-content-neutral-primary)' }}>Zen Design System </span>
              <span style={{ color: 'var(--color-content-neutral-tertiary)' }}>by Đìzai Studio</span>
            </span>
          </div>
        </div>
        <div className="docs-page-header-divider" />
        <h1 className="docs-page-title text-display-1">Select Field</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A dropdown select field built on FieldShell and Popover. Supports search, leading icons, captions, help text, error, disabled, and read-only states.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

      {/* ── When to Use ── */}
      <div className="docs-when-to-use">
        <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>When to use</h3>
        <ul className="text-body-small">
          <li>For selecting a single option from a list of predefined choices.</li>
          <li>Use <strong>searchable</strong> when the list is long and users need to filter.</li>
          <li>Use <strong>leading</strong> slot for contextual icons (globe, user, etc.).</li>
          <li>Use <strong>captions</strong> on options to provide additional context about each choice.</li>
        </ul>
      </div>

      {/* ── Examples ── */}
      <h2 className="docs-section-title text-h3">Examples</h2>

      <div className="docs-demo-grid">
        {/* Basic */}
        <DemoBlock
          title="Basic"
          description="Simple select with a list of options."
          direction="column"
          fullWidth
          style={{ overflow: 'visible' }}
        >
          <SelectField label="Fruit" placeholder="Choose a fruit" options={fruits} />
        </DemoBlock>

        {/* Sizes */}
        <DemoBlock
          title="Sizes"
          description="4 sizes matching InputField: Small, Medium, Large, XLarge."
          direction="column"
          fullWidth
          style={{ overflow: 'visible' }}
        >
          <SelectField label="Small" size="s" options={fruits} placeholder="Small" />
          <SelectField label="Medium (default)" size="m" options={fruits} placeholder="Medium" />
          <SelectField label="Large" size="l" options={fruits} placeholder="Large" />
          <SelectField label="Extra Large" size="xl" options={fruits} placeholder="Extra Large" />
        </DemoBlock>

        {/* With leading icon */}
        <DemoBlock
          title="With leading icon"
          description="Icons provide context about the field's purpose."
          direction="column"
          fullWidth
          style={{ overflow: 'visible' }}
        >
          <SelectField label="Country" placeholder="Select country" options={countries} leading={<Globe01 size={20} />} />
          <SelectField label="Assign to" placeholder="Select user" options={[{ value: 'john', label: 'John Doe' }, { value: 'jane', label: 'Jane Smith' }, { value: 'alex', label: 'Alex Johnson' }]} leading={<User size={20} />} />
        </DemoBlock>

        {/* Searchable — inline */}
        <DemoBlock
          title="Searchable (inline)"
          description="Type directly in the field to filter options — like Ant Design Select showSearch."
          direction="column"
          fullWidth
          style={{ overflow: 'visible' }}
        >
          <SelectField label="Country" placeholder="Type to search..." options={countries} searchable leading={<Globe01 size={20} />} />
          <SelectField label="Fruit" placeholder="Search fruits..." options={fruits} searchable />
        </DemoBlock>

        {/* With captions */}
        <DemoBlock
          title="Options with captions"
          description="Captions provide additional context. Disabled options are grayed out."
          direction="column"
          fullWidth
          style={{ overflow: 'visible' }}
        >
          <SelectField label="Role" placeholder="Select a role" options={roles} />
        </DemoBlock>

        {/* Default value */}
        <DemoBlock
          title="Default value"
          description="Pre-selected option via defaultValue prop."
          direction="column"
          fullWidth
          style={{ overflow: 'visible' }}
        >
          <SelectField label="Priority" options={priorities} defaultValue="medium" />
        </DemoBlock>

        {/* With help text */}
        <DemoBlock
          title="With help text"
          description="Guidance text below the field."
          direction="column"
          fullWidth
          style={{ overflow: 'visible' }}
        >
          <SelectField label="Category" placeholder="Select category" options={fruits} helpText="Choose the most relevant category" />
        </DemoBlock>

        {/* Error state */}
        <DemoBlock
          title="Error state"
          description="Validation error with red border and message."
          direction="column"
          fullWidth
          style={{ overflow: 'visible' }}
        >
          <SelectField label="Department" placeholder="Select department" options={[]} error="Please select a department" />
        </DemoBlock>

        {/* Disabled + Read-only */}
        <DemoBlock
          title="Disabled & Read-only"
          description="Disabled prevents interaction. Read-only shows the value but blocks changes."
          direction="column"
          fullWidth
          style={{ overflow: 'visible' }}
        >
          <SelectField label="Disabled" placeholder="Cannot select" options={fruits} disabled />
          <SelectField label="Read-only" options={priorities} defaultValue="high" readOnly />
        </DemoBlock>

        {/* ── Multiple Selection ── */}
        <h2 className="docs-section-title text-h3" style={{ marginTop: 'var(--gap-3xlarge)' }}>Multiple Selection</h2>

        {/* Multi basic */}
        <DemoBlock
          title="Multiple select"
          description="Select multiple options. Selected items appear as Tag chips with × remove."
          direction="column"
          fullWidth
          style={{ overflow: 'visible' }}
        >
          <SelectField mode="multiple" label="Fruits" placeholder="Select fruits..." options={fruits} clearable />
        </DemoBlock>

        {/* Multi sizes */}
        <DemoBlock
          title="Multiple — Sizes"
          description="All 4 sizes supported. Field grows vertically when tags wrap."
          direction="column"
          fullWidth
          style={{ overflow: 'visible' }}
        >
          <SelectField mode="multiple" label="Small" size="s" options={fruits} defaultValue={['apple', 'banana']} clearable />
          <SelectField mode="multiple" label="Medium" size="m" options={fruits} defaultValue={['apple', 'cherry']} clearable />
          <SelectField mode="multiple" label="Large" size="l" options={fruits} defaultValue={['apple']} clearable />
          <SelectField mode="multiple" label="Extra Large" size="xl" options={fruits} defaultValue={['apple', 'banana', 'cherry']} clearable />
        </DemoBlock>

        {/* Multi searchable */}
        <DemoBlock
          title="Multiple + Searchable"
          description="Type to filter options. Backspace removes the last tag when search is empty."
          direction="column"
          fullWidth
          style={{ overflow: 'visible' }}
        >
          <SelectField mode="multiple" label="Countries" placeholder="Search countries..." options={countries} searchable clearable leading={<Globe01 size={20} />} />
        </DemoBlock>

        {/* Multi with captions */}
        <DemoBlock
          title="Multiple with captions"
          description="Options with descriptions. Disabled options cannot be selected."
          direction="column"
          fullWidth
          style={{ overflow: 'visible' }}
        >
          <SelectField mode="multiple" label="Team roles" placeholder="Assign roles..." options={roles} searchable clearable />
        </DemoBlock>

        {/* Multi default values */}
        <DemoBlock
          title="Multiple with default values"
          description="Pre-selected options via defaultValue array."
          direction="column"
          fullWidth
          style={{ overflow: 'visible' }}
        >
          <SelectField mode="multiple" label="Selected fruits" options={fruits} defaultValue={['apple', 'cherry']} clearable />
        </DemoBlock>

        {/* Multi creatable */}
        <DemoBlock
          title="Creatable (tags mode)"
          description="Type a new value and press Enter to create it. Like Ant Design mode='tags'."
          direction="column"
          fullWidth
          style={{ overflow: 'visible' }}
        >
          <SelectField
            mode="multiple"
            label="Tags"
            placeholder="Type and press Enter to add..."
            options={[
              { value: 'react', label: 'React' },
              { value: 'vue', label: 'Vue' },
              { value: 'angular', label: 'Angular' },
              { value: 'svelte', label: 'Svelte' },
            ]}
            searchable
            creatable
            clearable
          />
        </DemoBlock>

        {/* Max tag count */}
        <DemoBlock
          title="Max tag count (+N overflow)"
          description="Show max 3 tags, rest collapsed into +N badge. Hover +N to see hidden items. Opens all when dropdown is open."
          direction="column"
          fullWidth
          style={{ overflow: 'visible' }}
        >
          <SelectField mode="multiple" label="Max 3 visible" options={fruits} defaultValue={['apple', 'banana', 'cherry', 'dragonfruit', 'elderberry']} maxTagCount={3} clearable />
          <SelectField mode="multiple" label="Max 2 visible" options={countries} defaultValue={['vn', 'us', 'jp', 'kr', 'sg']} maxTagCount={2} clearable searchable />
          <SelectField mode="multiple" label="Max 1 visible" options={priorities} defaultValue={['low', 'medium', 'high', 'critical']} maxTagCount={1} clearable />
        </DemoBlock>

        {/* Multi error */}
        <DemoBlock
          title="Multiple with error"
          description="Validation error state."
          direction="column"
          fullWidth
          style={{ overflow: 'visible' }}
        >
          <SelectField mode="multiple" label="Required tags" placeholder="Select at least one..." options={fruits} error="Please select at least one option" clearable />
        </DemoBlock>
      </div>

      </div>
    </>
  );
}
