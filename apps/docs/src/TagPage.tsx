import { Tag, Avatar } from '@zen/components';
import { MarkerPin01 } from '@zen/icons/solid';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

export function TagPage() {
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
        <h1 className="docs-page-title text-display-1">Tag</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            Compact pill-shaped labels used to categorise or annotate content. Supports text-only, leading icon, and leading photo variants with optional remove action.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-xlarge)', marginBottom: 'var(--gap-3xlarge)' }}>
          <DemoBlock title="Text Only" description="Minimal tag with label only.">
            <Tag label="Default" />
            <Tag label="Error" error />
            <Tag label="Disabled" disabled />
          </DemoBlock>

          <DemoBlock title="Removable" description="Tag with remove (×) action — pass onRemove to handle dismissal.">
            <Tag label="Default" removable />
            <Tag label="Error" removable error />
            <Tag label="Disabled" removable disabled />
          </DemoBlock>

          <DemoBlock title="Leading Icon" description="20px icon before the label.">
            <Tag label="Location" theme="leading-icon" icon={<MarkerPin01 size={20} />} />
            <Tag label="Location" theme="leading-icon" icon={<MarkerPin01 size={20} />} removable />
            <Tag label="Error" theme="leading-icon" icon={<MarkerPin01 size={20} />} error />
            <Tag label="Error" theme="leading-icon" icon={<MarkerPin01 size={20} />} error removable />
            <Tag label="Disabled" theme="leading-icon" icon={<MarkerPin01 size={20} />} disabled />
            <Tag label="Disabled" theme="leading-icon" icon={<MarkerPin01 size={20} />} disabled removable />
          </DemoBlock>

          <DemoBlock title="Leading Photo" description="Avatar before the label — pass any ReactNode via avatar.">
            <Tag label="Nguyen Van A" theme="leading-photo" avatar={<Avatar size="2xs">N</Avatar>} />
            <Tag label="Nguyen Van A" theme="leading-photo" avatar={<Avatar size="2xs">N</Avatar>} removable />
            <Tag label="Disabled" theme="leading-photo" avatar={<Avatar size="2xs">N</Avatar>} disabled />
            <Tag label="Disabled" theme="leading-photo" avatar={<Avatar size="2xs">N</Avatar>} disabled removable />
          </DemoBlock>
        </div>

        {/* API */}
        <h2 className="text-h3 docs-section-title">API</h2>
        <ApiTable
          style={{ marginBottom: 'var(--gap-3xlarge)' }}
          columns={['Prop', 'Type', 'Default', 'Description']}
          rows={[
            [<code>label</code>, <code>ReactNode</code>, '—', 'Tag content'],
            [<code>theme</code>, <><code>'text-only'</code> | <code>'leading-icon'</code> | <code>'leading-photo'</code></>, <code>'text-only'</code>, 'Visual variant'],
            [<code>icon</code>, <code>ReactNode</code>, '—', 'Leading icon (leading-icon theme)'],
            [<code>avatar</code>, <code>ReactNode</code>, '—', 'Leading avatar (leading-photo theme)'],
            [<code>removable</code>, <code>boolean</code>, <code>false</code>, 'Show remove button'],
            [<code>onRemove</code>, <code>() =&gt; void</code>, '—', 'Remove button click handler'],
            [<code>error</code>, <code>boolean</code>, <code>false</code>, 'Error state'],
            [<code>disabled</code>, <code>boolean</code>, <code>false</code>, 'Disabled state'],
          ]}
        />

      </div>
    </>
  );
}
