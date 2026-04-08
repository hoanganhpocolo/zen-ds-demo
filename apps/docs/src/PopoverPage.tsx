import { useState } from 'react';
import { Popover, PopoverItem, Avatar, Badge, Checkbox } from '@zen/components';
import type { BadgeColor } from '@zen/components';
import {
  Edit01, Copy, Archive, Trash,
  Star01,
} from '@zen/icons/line';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

/* ── Demo data ── */

const STATUS_OPTIONS: { value: string; label: string; color: BadgeColor }[] = [
  { value: 'discussion',  label: 'In Discussion', color: 'info'     },
  { value: 'not-started', label: 'Not Started',   color: 'neutral'  },
  { value: 'in-progress', label: 'In Progress',   color: 'warning'  },
  { value: 'cancelled',   label: 'Cancelled',     color: 'negative' },
  { value: 'done',        label: 'Done',          color: 'positive' },
];

const PEOPLE = [
  { id: 'albert',   name: 'Albert Flores',     initials: 'AF', color: 'accent'  },
  { id: 'annette',  name: 'Annette Black',      initials: 'AB', color: 'neutral' },
  { id: 'arlene',   name: 'Arlene McCoy',       initials: 'AM', color: 'purple'  },
  { id: 'bessie',   name: 'Bessie Cooper',      initials: 'BC', color: 'teal'    },
  { id: 'brooklyn', name: 'Brooklyn Simmons',   initials: 'BS', color: 'orange'  },
  { id: 'cameron',  name: 'Cameron Williamson', initials: 'CW', color: 'blue'    },
  { id: 'cody',     name: 'Cody Fisher',        initials: 'CF', color: 'green'   },
] as const;

const ACTIONS = [
  { id: 'edit',    label: 'Edit',    icon: <Edit01 size={24} /> },
  { id: 'copy',    label: 'Copy',    icon: <Copy size={24} /> },
  { id: 'archive', label: 'Archive', icon: <Archive size={24} /> },
  { id: 'delete',  label: 'Delete',  icon: <Trash size={24} /> },
];

export function PopoverPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>('discussion');
  const [selectedPerson, setSelectedPerson] = useState<string>('albert');
  const [selectedPeople, setSelectedPeople] = useState<Set<string>>(new Set(['albert', 'arlene']));
  const [search, setSearch] = useState('');
  const [searchMulti, setSearchMulti] = useState('');

  const filteredPeople = PEOPLE.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  const filteredPeopleMulti = PEOPLE.filter((p) =>
    p.name.toLowerCase().includes(searchMulti.toLowerCase()),
  );

  const togglePerson = (id: string) => {
    setSelectedPeople((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <>
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
        <h1 className="docs-page-title text-display-1">Popover</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A floating list panel for contextual menus, dropdowns, and option selectors.
            Supports search, labels, single select, multi-select, and flexible leading/trailing slots.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        <h2 className="docs-section-title text-h3">Variants</h2>
        <div className="docs-demo-grid">

          {/* Action menu */}
          <DemoBlock title="Action menu">
            <Popover>
              {ACTIONS.map(({ id, label, icon }) => (
                <PopoverItem
                  key={id}
                  leading={icon}
                  label={label}
                  noCheck
                  onClick={() => {}}
                />
              ))}
            </Popover>
          </DemoBlock>

          {/* Status picker — badge leading */}
          <DemoBlock title="Status picker">
            <Popover search label="Select an option or create one" searchPlaceholder="Search" searchValue={''} onSearchChange={() => {}}>
              {STATUS_OPTIONS.map(({ value, label, color }) => (
                <PopoverItem
                  key={value}
                  selected={selectedStatus === value}
                  leading={
                    <Badge label={label} color={color} variant="subtle" size="s" />
                  }
                  onClick={() => setSelectedStatus(value)}
                />
              ))}
            </Popover>
          </DemoBlock>

          {/* People picker — single select */}
          <DemoBlock title="Single select — avatar">
            <Popover
              search
              label="Select an option or create one"
              searchPlaceholder="Search"
              searchValue={search}
              onSearchChange={setSearch}
              maxHeight={280}
            >
              {filteredPeople.map(({ id, name, initials, color }) => (
                <PopoverItem
                  key={id}
                  selected={selectedPerson === id}
                  leading={
                    <Avatar size="xs" shape="circle" color={color as any}>
                      {initials}
                    </Avatar>
                  }
                  label={name}
                  onClick={() => setSelectedPerson(id)}
                />
              ))}
            </Popover>
          </DemoBlock>

          {/* People picker — multi select */}
          <DemoBlock title="Multi select — avatar + checkbox">
            <Popover
              search
              label="Select an option or create one"
              searchPlaceholder="Search"
              searchValue={searchMulti}
              onSearchChange={setSearchMulti}
              maxHeight={280}
            >
              {filteredPeopleMulti.map(({ id, name, initials, color }) => (
                <PopoverItem
                  key={id}
                  selected={selectedPeople.has(id)}
                  leading={
                    <Avatar size="xs" shape="circle" color={color as any}>
                      {initials}
                    </Avatar>
                  }
                  label={name}
                  trailing={
                    <Checkbox
                      checked={selectedPeople.has(id)}
                      onChange={() => togglePerson(id)}
                    />
                  }
                  onClick={() => togglePerson(id)}
                />
              ))}
            </Popover>
          </DemoBlock>

        </div>

        <h2 className="docs-section-title text-h3">Item states</h2>
        <div className="docs-demo-grid">
          <DemoBlock title="Default">
            <Popover>
              <PopoverItem leading={<Star01 size={24} />} label="Popover Item" />
            </Popover>
          </DemoBlock>
          <DemoBlock title="Hover (CSS)">
            <Popover>
              <PopoverItem leading={<Star01 size={24} />} label="Hover me" />
            </Popover>
          </DemoBlock>
          <DemoBlock title="Selected">
            <Popover>
              <PopoverItem selected leading={<Star01 size={24} />} label="Popover Item" />
            </Popover>
          </DemoBlock>
          <DemoBlock title="With caption">
            <Popover>
              <PopoverItem leading={<Star01 size={24} />} label="Popover Item" caption="Secondary info" />
              <PopoverItem selected leading={<Star01 size={24} />} label="Selected Item" caption="Secondary info" />
            </Popover>
          </DemoBlock>
        </div>

        <h2 className="docs-section-title text-h3">Leading content types</h2>
        <div className="docs-demo-grid">

          <DemoBlock title="Icon">
            <Popover>
              {ACTIONS.map(({ id, label, icon }) => (
                <PopoverItem key={id} leading={icon} label={label} />
              ))}
            </Popover>
          </DemoBlock>

          <DemoBlock title="Avatar (small 24px)">
            <Popover>
              {PEOPLE.slice(0, 4).map(({ id, name, initials, color }) => (
                <PopoverItem
                  key={id}
                  leading={<Avatar size="xs" shape="circle" color={color as any}>{initials}</Avatar>}
                  label={name}
                />
              ))}
            </Popover>
          </DemoBlock>

          <DemoBlock title="Avatar (big 48px)">
            <Popover style={{ width: 280 }}>
              {PEOPLE.slice(0, 3).map(({ id, name, initials, color }) => (
                <PopoverItem
                  key={id}
                  leading={<Avatar size="m" shape="circle" color={color as any}>{initials}</Avatar>}
                  label={name}
                  caption="Product Designer"
                />
              ))}
            </Popover>
          </DemoBlock>

          <DemoBlock title="Color dot">
            <Popover>
              {STATUS_OPTIONS.map(({ value, label, color }) => (
                <PopoverItem
                  key={value}
                  leading={<Badge label={label} color={color} variant="ghost" size="s" />}
                  onClick={() => {}}
                />
              ))}
            </Popover>
          </DemoBlock>

        </div>

        <h2 className="docs-section-title text-h3">API — Popover</h2>
        <ApiTable
          columns={['Property', 'Description', 'Type', 'Default']}
          rows={[
            [<code>search</code>, 'Show search input', <code>boolean</code>, <code>false</code>],
            [<code>searchValue</code>, 'Controlled search value', <code>string</code>, '—'],
            [<code>onSearchChange</code>, 'Search input callback', <code>(v: string) =&gt; void</code>, '—'],
            [<code>label</code>, 'Label text above items', <code>string</code>, '—'],
            [<code>maxHeight</code>, 'Max list height before scroll (px)', <code>number</code>, '—'],
          ]}
        />

        <h2 className="docs-section-title text-h3">API — PopoverItem</h2>
        <ApiTable
          columns={['Property', 'Description', 'Type', 'Default']}
          rows={[
            [<code>selected</code>, 'Highlight + show check icon', <code>boolean</code>, <code>false</code>],
            [<code>leading</code>, 'Leading slot (icon, avatar, dot…)', <code>ReactNode</code>, '—'],
            [<code>label</code>, 'Primary label text', <code>ReactNode</code>, '—'],
            [<code>caption</code>, 'Secondary caption text', <code>ReactNode</code>, '—'],
            [<code>trailing</code>, 'Trailing slot (badge, checkbox…) — hidden when selected', <code>ReactNode</code>, '—'],
            [<code>disabled</code>, 'Disable interaction', <code>boolean</code>, <code>false</code>],
            [<code>onClick</code>, 'Click / Enter handler', <code>() =&gt; void</code>, '—'],
          ]}
        />

      </div>
    </>
  );
}
