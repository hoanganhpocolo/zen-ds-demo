import { TopNavigationMobile, TopNavActionButton, Avatar, Search } from '@zen/components';
import { Plus, Bell01, ChevronLeftLineSmall } from '@zen/icons/line';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

const MobileFrame = ({ children, bg = 'var(--color-bg-canvas-default)' }: { children: React.ReactNode; bg?: string }) => {
  const isGradient = bg !== 'var(--color-bg-canvas-default)';
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      background: bg,
      borderRadius: 'var(--radius-large)',
      overflow: 'hidden',
      padding: isGradient ? '32px 24px 24px' : '32px 0',
    }}>
      {children}
    </div>
  );
};

export function TopNavigationMobilePage() {
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
        <h1 className="docs-page-title text-display-1">Top Navigation — Mobile</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            Mobile header component (390px) with optional control bar, large heading, and action slots.
            Two types: Master (main page header) and Sub (back navigation). Two themes: Default (white surface) and Overlay (transparent, for use over images or colored backgrounds).
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="docs-page-body">

        {/* ── When to Use ── */}
        <div className="docs-when-to-use">
          <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>When to use</h3>
          <ul className="text-body-small">
            <li>Use <strong>Master</strong> as the top-level page header with a large heading.</li>
            <li>Use <strong>Sub</strong> for nested pages that require back navigation.</li>
            <li>Add <strong>Control Bar</strong> for leading content (avatar, back button) and action icons.</li>
            <li>Add <strong>Addition Block</strong> for supplementary content like a search bar.</li>
            <li>Use <strong>Overlay</strong> theme on images or colored/gradient backgrounds.</li>
          </ul>
        </div>

        {/* ── Examples ── */}
        <h2 className="docs-section-title text-h3">Examples</h2>

        <div className="docs-demo-grid">

          {/* Master / Default — Main bar only */}
          <DemoBlock
            title="Master — Default"
            description="Main bar only. Large heading with optional trailing action slot."
            fullWidth
            code={`<TopNavigationMobile
  theme="default"
  heading="Heading"
  mainSlots={<TopNavActionButton theme="default" icon={<Plus size={20} />} label="Add" />}
/>`}
          >
            <MobileFrame>
              <TopNavigationMobile
                theme="default"
                heading="Heading"
                mainSlots={<TopNavActionButton theme="default" icon={<Plus size={20} />} label="Add" />}
              />
            </MobileFrame>
          </DemoBlock>

          {/* Master / Default — With control bar */}
          <DemoBlock
            title="Master — Default + Control Bar"
            description="Control bar adds a 56px row above the heading for avatar, back button, and icon actions."
            fullWidth
            code={`<TopNavigationMobile
  theme="default"
  heading="Heading"
  showControlBar
  leadingContent={<Avatar size="m" shape="circle" background="subtle" src="..." alt="User" />}
  controlSlots={<TopNavActionButton theme="default" icon={<Bell01 size={20} />} label="Notifications" notiDot />}
  mainSlots={<TopNavActionButton theme="default" icon={<Plus size={20} />} label="Add" />}
/>`}
          >
            <MobileFrame>
              <TopNavigationMobile
                theme="default"
                heading="Heading"
                showControlBar
                leadingContent={<Avatar size="m" shape="circle" background="subtle" src="https://i.pravatar.cc/100?img=3" alt="User" />}
                controlSlots={<TopNavActionButton theme="default" icon={<Bell01 size={20} />} label="Notifications" notiDot />}
                mainSlots={<TopNavActionButton theme="default" icon={<Plus size={20} />} label="Add" />}
              />
            </MobileFrame>
          </DemoBlock>

          {/* Master / Default — With addition block */}
          <DemoBlock
            title="Master — Default + Addition Block"
            description="Addition block adds a 72px slot below the heading for search bars or supplementary content."
            fullWidth
            code={`<TopNavigationMobile
  theme="default"
  heading="Heading"
  showControlBar
  showAdditionBlock
  leadingContent={<Avatar size="m" shape="circle" background="subtle" src="..." alt="User" />}
  controlSlots={<TopNavActionButton theme="default" icon={<Bell01 size={20} />} label="Notifications" />}
  mainSlots={<TopNavActionButton theme="default" icon={<Plus size={20} />} label="Add" />}
  additionContent={<Search placeholder="Search..." />}
/>`}
          >
            <MobileFrame>
              <TopNavigationMobile
                theme="default"
                heading="Heading"
                showControlBar
                showAdditionBlock
                leadingContent={<Avatar size="m" shape="circle" background="subtle" src="https://i.pravatar.cc/100?img=3" alt="User" />}
                controlSlots={<TopNavActionButton theme="default" icon={<Bell01 size={20} />} label="Notifications" />}
                mainSlots={<TopNavActionButton theme="default" icon={<Plus size={20} />} label="Add" />}
                additionContent={<Search placeholder="Search..." />}
              />
            </MobileFrame>
          </DemoBlock>

          {/* Master / Overlay — Main bar only */}
          <DemoBlock
            title="Master — Overlay"
            description="Transparent background with light-colored text and icons. Use on images or gradient backgrounds."
            fullWidth
            previewStyle={{ background: 'none' }}
            code={`<TopNavigationMobile
  theme="overlay"
  heading="Heading"
  mainSlots={<TopNavActionButton theme="overlay" icon={<Plus size={20} />} label="Add" />}
/>`}
          >
            <MobileFrame bg="linear-gradient(135deg, var(--color-bg-fill-accent-solid-default), #b5179e)">
              <TopNavigationMobile
                theme="overlay"
                heading="Heading"
                mainSlots={<TopNavActionButton theme="overlay" icon={<Plus size={20} />} label="Add" />}
              />
            </MobileFrame>
          </DemoBlock>

          {/* Master / Overlay — With control bar */}
          <DemoBlock
            title="Master — Overlay + Control Bar"
            description="Overlay theme with control bar for avatar and notification actions."
            fullWidth
            previewStyle={{ background: 'none' }}
            code={`<TopNavigationMobile
  theme="overlay"
  heading="Heading"
  showControlBar
  leadingContent={<Avatar size="m" shape="circle" background="subtle" src="..." alt="User" />}
  controlSlots={<TopNavActionButton theme="overlay" icon={<Bell01 size={20} />} label="Notifications" notiDot />}
  mainSlots={<TopNavActionButton theme="overlay" icon={<Plus size={20} />} label="Add" />}
/>`}
          >
            <MobileFrame bg="linear-gradient(135deg, var(--color-bg-fill-accent-solid-default), #b5179e)">
              <TopNavigationMobile
                theme="overlay"
                heading="Heading"
                showControlBar
                leadingContent={<Avatar size="m" shape="circle" background="subtle" src="https://i.pravatar.cc/100?img=3" alt="User" />}
                controlSlots={<TopNavActionButton theme="overlay" icon={<Bell01 size={20} />} label="Notifications" notiDot />}
                mainSlots={<TopNavActionButton theme="overlay" icon={<Plus size={20} />} label="Add" />}
              />
            </MobileFrame>
          </DemoBlock>

          {/* Sub / Default — Collapsed */}
          <DemoBlock
            title="Sub — Default (Collapsed)"
            description="Heading collapses into the control bar center. Used when scrolled or navigating deeper."
            fullWidth
            code={`<TopNavigationMobile
  theme="default"
  heading="Heading"
  showControlBar
  expanded={false}
  leadingContent={<TopNavActionButton theme="default" icon={<ChevronLeftLineSmall size={20} />} label="Back" />}
  controlSlots={<TopNavActionButton theme="default" icon={<Plus size={20} />} label="Add" />}
/>`}
          >
            <MobileFrame>
              <TopNavigationMobile
                theme="default"
                heading="Heading"
                showControlBar
                expanded={false}
                leadingContent={<TopNavActionButton theme="default" icon={<ChevronLeftLineSmall size={20} />} label="Back" />}
                controlSlots={<TopNavActionButton theme="default" icon={<Plus size={20} />} label="Add" />}
              />
            </MobileFrame>
          </DemoBlock>

          {/* Sub / Default — Expanded */}
          <DemoBlock
            title="Sub — Default (Expanded)"
            description="Full heading bar shown below the control bar. Default state on page load."
            fullWidth
            code={`<TopNavigationMobile
  theme="default"
  heading="Heading"
  showControlBar
  expanded={true}
  leadingContent={<TopNavActionButton theme="default" icon={<ChevronLeftLineSmall size={20} />} label="Back" />}
  controlSlots={<TopNavActionButton theme="default" icon={<Plus size={20} />} label="Add" />}
/>`}
          >
            <MobileFrame>
              <TopNavigationMobile
                theme="default"
                heading="Heading"
                showControlBar
                expanded={true}
                leadingContent={<TopNavActionButton theme="default" icon={<ChevronLeftLineSmall size={20} />} label="Back" />}
                controlSlots={<TopNavActionButton theme="default" icon={<Plus size={20} />} label="Add" />}
              />
            </MobileFrame>
          </DemoBlock>

          {/* Sub / Overlay — Collapsed */}
          <DemoBlock
            title="Sub — Overlay (Collapsed)"
            description="Overlay sub navigation in collapsed state."
            fullWidth
            previewStyle={{ background: 'none' }}
            code={`<TopNavigationMobile
  theme="overlay"
  heading="Heading"
  showControlBar
  expanded={false}
  leadingContent={<TopNavActionButton theme="overlay" icon={<ChevronLeftLineSmall size={20} />} label="Back" />}
  controlSlots={<TopNavActionButton theme="overlay" icon={<Plus size={20} />} label="Add" />}
/>`}
          >
            <MobileFrame bg="linear-gradient(135deg, var(--color-bg-fill-accent-solid-default), #b5179e)">
              <TopNavigationMobile
                theme="overlay"
                heading="Heading"
                showControlBar
                expanded={false}
                leadingContent={<TopNavActionButton theme="overlay" icon={<ChevronLeftLineSmall size={20} />} label="Back" />}
                controlSlots={<TopNavActionButton theme="overlay" icon={<Plus size={20} />} label="Add" />}
              />
            </MobileFrame>
          </DemoBlock>

          {/* Sub / Overlay — Expanded */}
          <DemoBlock
            title="Sub — Overlay (Expanded)"
            description="Overlay sub navigation in expanded state."
            fullWidth
            previewStyle={{ background: 'none' }}
            code={`<TopNavigationMobile
  theme="overlay"
  heading="Heading"
  showControlBar
  expanded={true}
  leadingContent={<TopNavActionButton theme="overlay" icon={<ChevronLeftLineSmall size={20} />} label="Back" />}
  controlSlots={<TopNavActionButton theme="overlay" icon={<Plus size={20} />} label="Add" />}
/>`}
          >
            <MobileFrame bg="linear-gradient(135deg, var(--color-bg-fill-accent-solid-default), #b5179e)">
              <TopNavigationMobile
                theme="overlay"
                heading="Heading"
                showControlBar
                expanded={true}
                leadingContent={<TopNavActionButton theme="overlay" icon={<ChevronLeftLineSmall size={20} />} label="Back" />}
                controlSlots={<TopNavActionButton theme="overlay" icon={<Plus size={20} />} label="Add" />}
              />
            </MobileFrame>
          </DemoBlock>

        </div>

        {/* ── API ── */}
        <h2 className="docs-section-title text-h3">API — TopNavigationMobile</h2>
        <ApiTable
          columns={['Property', 'Description', 'Type', 'Default']}
          rows={[
            [<code>theme</code>, 'White surface or transparent overlay', <><code>'default'</code> | <code>'overlay'</code></>, <code>'default'</code>],
            [<code>heading</code>, 'Page title in the main bar', <code>string</code>, <code>'Heading'</code>],
            [<code>showControlBar</code>, '56px control bar above the heading', <code>boolean</code>, <code>false</code>],
            [<code>showMainBar</code>, 'Main heading row', <code>boolean</code>, <code>true</code>],
            [<code>showAdditionBlock</code>, '72px slot below the heading', <code>boolean</code>, <code>false</code>],
            [<code>leadingContent</code>, 'Left slot of the control bar', <code>ReactNode</code>, '—'],
            [<code>controlSlots</code>, 'Right slot of the control bar', <code>ReactNode</code>, '—'],
            [<code>mainSlots</code>, 'Right slot of the main bar', <code>ReactNode</code>, '—'],
            [<code>additionContent</code>, 'Content inside the addition block', <code>ReactNode</code>, '—'],
            [<code>expanded</code>, 'Sub variant: false = heading in control bar (collapsed), true = full heading bar', <code>boolean</code>, '—'],
          ]}
        />

        <h2 className="docs-section-title text-h3" style={{ marginTop: 'var(--gap-2xlarge)' }}>API — TopNavActionButton</h2>
        <ApiTable
          columns={['Property', 'Description', 'Type', 'Default']}
          rows={[
            [<code>icon</code>, '20×20 icon element', <code>ReactNode</code>, '—'],
            [<code>theme</code>, 'Matches the parent nav theme', <><code>'default'</code> | <code>'overlay'</code></>, <code>'default'</code>],
            [<code>onClick</code>, 'Click handler', <code>() =&gt; void</code>, '—'],
            [<code>label</code>, 'aria-label for accessibility', <code>string</code>, '—'],
            [<code>notiDot</code>, 'Red notification dot at top-right', <code>boolean</code>, <code>false</code>],
          ]}
        />

      </div>
    </>
  );
}
