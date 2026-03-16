import { ListItem } from '@zen/components';
import { Avatar } from '@zen/components';
import { Button } from '@zen/components';
import { Plus, ChevronRight01, DotsHorizontal } from '@zen/icons/line';
import { CheckCircle } from '@zen/icons/solid';
import { DemoBlock } from './DemoBlock';

export function ListItemPage() {
  return (
    <>
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
        <h1 className="docs-page-title text-display-1">List Item</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A composable row component for lists and menus. Supports a leading slot, title/caption info area,
            and a trailing slot — each accepting any ReactNode for maximum flexibility.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        <h2 className="docs-section-title text-h3">States</h2>
        <div className="docs-demo-grid">
          <DemoBlock title="Default">
            <div style={{ width: 375, border: '1px solid var(--color-border-neutral-subtle-default)', borderRadius: 'var(--radius-large)', overflow: 'hidden' }}>
              <ListItem
                leading={<Avatar size="m" shape="circle" color="accent">AJ</Avatar>}
                title="Alex Johnson"
                caption="Product Designer"
                trailing={
                  <Button variant="flat-primary" size="s" icon={<Plus size={24} />} aria-label="Add" />
                }
              />
            </div>
          </DemoBlock>

          <DemoBlock title="Hover (CSS)">
            <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)', marginBottom: 'var(--gap-xsmall)' }}>
              Hover to preview
            </p>
            <div style={{ width: 375, border: '1px solid var(--color-border-neutral-subtle-default)', borderRadius: 'var(--radius-large)', overflow: 'hidden' }}>
              <ListItem
                leading={<Avatar size="m" shape="circle" color="blue">MG</Avatar>}
                title="Maria Garcia"
                caption="Engineering Lead"
                trailing={
                  <Button variant="flat-primary" size="s" icon={<Plus size={24} />} aria-label="Add" />
                }
              />
            </div>
          </DemoBlock>

          <DemoBlock title="Selected">
            <div style={{ width: 375, border: '1px solid var(--color-border-neutral-subtle-default)', borderRadius: 'var(--radius-large)', overflow: 'hidden' }}>
              <ListItem
                selected
                leading={<Avatar size="m" shape="circle" color="green">SL</Avatar>}
                title="Sam Lee"
                caption="Design Systems"
                trailing={
                  <Button variant="flat-primary" size="s" icon={<Plus size={24} />} aria-label="Add" />
                }
              />
            </div>
          </DemoBlock>
        </div>

        <h2 className="docs-section-title text-h3">Slots</h2>
        <div className="docs-demo-grid">
          <DemoBlock title="Avatar — initials">
            <div style={{ width: 375, border: '1px solid var(--color-border-neutral-subtle-default)', borderRadius: 'var(--radius-large)', overflow: 'hidden' }}>
              <ListItem
                leading={<Avatar size="m" shape="circle" color="purple">JK</Avatar>}
                title="Jordan Kim"
                caption="Product Manager"
              />
            </div>
          </DemoBlock>

          <DemoBlock title="Avatar — status">
            <div style={{ width: 375, border: '1px solid var(--color-border-neutral-subtle-default)', borderRadius: 'var(--radius-large)', overflow: 'hidden' }}>
              <ListItem
                leading={<Avatar size="m" shape="circle" color="teal" status>LC</Avatar>}
                title="Luna Chen"
                caption="Online"
              />
            </div>
          </DemoBlock>

          <DemoBlock title="Avatar — square">
            <div style={{ width: 375, border: '1px solid var(--color-border-neutral-subtle-default)', borderRadius: 'var(--radius-large)', overflow: 'hidden' }}>
              <ListItem
                leading={<Avatar size="m" shape="square" color="orange">DS</Avatar>}
                title="Design Studio"
                caption="Workspace"
                trailing={<ChevronRight01 size={20} style={{ color: 'var(--color-content-neutral-tertiary)' }} />}
              />
            </div>
          </DemoBlock>

          <DemoBlock title="Trailing — Actions">
            <div style={{ width: 375, border: '1px solid var(--color-border-neutral-subtle-default)', borderRadius: 'var(--radius-large)', overflow: 'hidden' }}>
              <ListItem
                leading={<Avatar size="m" shape="circle" color="crimson">WR</Avatar>}
                title="Workspace Research"
                caption="5 members"
                trailing={
                  <Button variant="flat-primary" size="s" icon={<DotsHorizontal size={20} />} aria-label="More options" />
                }
              />
            </div>
          </DemoBlock>

          <DemoBlock title="No leading">
            <div style={{ width: 375, border: '1px solid var(--color-border-neutral-subtle-default)', borderRadius: 'var(--radius-large)', overflow: 'hidden' }}>
              <ListItem
                title="Notifications"
                caption="Push and email"
                trailing={<ChevronRight01 size={20} style={{ color: 'var(--color-content-neutral-tertiary)' }} />}
              />
            </div>
          </DemoBlock>

          <DemoBlock title="Leading — icon">
            <div style={{ width: 375, border: '1px solid var(--color-border-neutral-subtle-default)', borderRadius: 'var(--radius-large)', overflow: 'hidden' }}>
              <ListItem
                leading={
                  <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-rounded)', background: 'var(--color-bg-fill-positive-subtle-default)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-content-positive-primary)' }}>
                    <CheckCircle size={24} />
                  </div>
                }
                title="Task completed"
                caption="2 minutes ago"
              />
            </div>
          </DemoBlock>
        </div>

        <h2 className="docs-section-title text-h3">List</h2>
        <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)', marginBottom: 'var(--gap-large)' }}>
          Compose multiple items into a list.
        </p>
        <DemoBlock title="Contact list">
          <div style={{ width: 375, border: '1px solid var(--color-border-neutral-subtle-default)', borderRadius: 'var(--radius-large)', overflow: 'hidden' }}>
            {[
              { name: 'Alex Johnson',  initials: 'AJ', color: 'accent',  role: 'Product Designer' },
              { name: 'Maria Garcia',  initials: 'MG', color: 'blue',    role: 'Engineering Lead' },
              { name: 'Sam Lee',       initials: 'SL', color: 'green',   role: 'Design Systems' },
              { name: 'Jordan Kim',    initials: 'JK', color: 'purple',  role: 'Product Manager' },
            ].map(({ name, initials, color, role }, i) => (
              <ListItem
                key={name}
                selected={i === 1}
                leading={<Avatar size="m" shape="circle" color={color as any}>{initials}</Avatar>}
                title={name}
                caption={role}
                trailing={
                  <Button variant="flat-primary" size="s" icon={<Plus size={24} />} aria-label="Add" />
                }
              />
            ))}
          </div>
        </DemoBlock>

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
              <td><code>selected</code></td>
              <td>Highlights the row with accent background</td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
            </tr>
            <tr>
              <td><code>leading</code></td>
              <td>Leading slot — avatar, icon, image</td>
              <td><code>ReactNode</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>title</code></td>
              <td>Primary title text</td>
              <td><code>ReactNode</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>caption</code></td>
              <td>Secondary caption text</td>
              <td><code>ReactNode</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>trailing</code></td>
              <td>Trailing slot — buttons, badge, chevron</td>
              <td><code>ReactNode</code></td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
