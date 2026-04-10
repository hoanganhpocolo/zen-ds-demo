import { TopNavigationMobile, TopNavActionButton, Avatar } from '@zen/components';
import { Plus, Bell01, ArrowLeft, SearchMedium } from '@zen/icons/line';
import { ApiTable } from './ApiTable';

// Wrapper to center 390px component inside the demo preview
const MobileFrame = ({ children, bg = 'var(--color-bg-canvas-default)' }: { children: React.ReactNode; bg?: string }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    background: bg,
    borderRadius: 'var(--radius-large)',
    overflow: 'hidden',
  }}>
    {children}
  </div>
);

export function TopNavigationMobilePage() {
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
        <h1 className="docs-page-title text-display-1">Top Navigation — Mobile</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            Mobile header component (390px) with iOS status bar, optional control bar, large heading, and action slots.
            Two types: Master (main page header) and Sub (back navigation). Two themes: Default (white surface) and Overlay (transparent, for use over images or colored backgrounds).
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        {/* ── Master ── */}
        <h2 className="docs-section-title text-h3">Master</h2>

        {/* Master / Default */}
        <h3 className="docs-subsection-title text-body-base" style={{ fontWeight: 'var(--font-weight-primary)', marginTop: 'var(--gap-large)', marginBottom: 'var(--gap-small)', color: 'var(--color-content-neutral-secondary)' }}>Default</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)' }}>

          <div>
            <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)', marginBottom: 'var(--gap-xsmall)' }}>Main bar only</p>
            <MobileFrame>
              <TopNavigationMobile
                theme="default"
                heading="Heading"
                mainSlots={<TopNavActionButton theme="default" icon={<Plus size={20} />} label="Add" />}
              />
            </MobileFrame>
          </div>

          <div>
            <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)', marginBottom: 'var(--gap-xsmall)' }}>With control bar</p>
            <MobileFrame>
              <TopNavigationMobile
                theme="default"
                heading="Heading"
                showControlBar
                leadingContent={<Avatar size="m" src="https://i.pravatar.cc/100?img=3" alt="User" />}
                controlSlots={<TopNavActionButton theme="default" icon={<Bell01 size={20} />} label="Notifications" notiDot />}
                mainSlots={<TopNavActionButton theme="default" icon={<Plus size={20} />} label="Add" />}
              />
            </MobileFrame>
          </div>

          <div>
            <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)', marginBottom: 'var(--gap-xsmall)' }}>With control bar + addition block</p>
            <MobileFrame>
              <TopNavigationMobile
                theme="default"
                heading="Heading"
                showControlBar
                showAdditionBlock
                leadingContent={<Avatar size="m" src="https://i.pravatar.cc/100?img=3" alt="User" />}
                controlSlots={<TopNavActionButton theme="default" icon={<Bell01 size={20} />} label="Notifications" />}
                mainSlots={<TopNavActionButton theme="default" icon={<Plus size={20} />} label="Add" />}
                additionContent={
                  <div style={{
                    width: '100%',
                    height: 40,
                    borderRadius: 'var(--radius-base)',
                    background: 'var(--color-bg-fill-neutral-subtle-default)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--gap-xsmall)',
                    padding: '0 var(--padding-small)',
                    color: 'var(--color-content-placeholder)',
                  }}>
                    <SearchMedium size={16} />
                    <span className="text-body-base">Search...</span>
                  </div>
                }
              />
            </MobileFrame>
          </div>

        </div>

        {/* Master / Overlay */}
        <h3 className="docs-subsection-title text-body-base" style={{ fontWeight: 'var(--font-weight-primary)', marginTop: 'var(--gap-large)', marginBottom: 'var(--gap-small)', color: 'var(--color-content-neutral-secondary)' }}>Overlay</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)' }}>

          <div>
            <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)', marginBottom: 'var(--gap-xsmall)' }}>Main bar only</p>
            <MobileFrame bg="linear-gradient(135deg, var(--color-bg-fill-accent-solid-default), #b5179e)">
              <TopNavigationMobile
                theme="overlay"
                heading="Heading"
                mainSlots={<TopNavActionButton theme="overlay" icon={<Plus size={20} />} label="Add" />}
              />
            </MobileFrame>
          </div>

          <div>
            <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)', marginBottom: 'var(--gap-xsmall)' }}>With control bar</p>
            <MobileFrame bg="linear-gradient(135deg, var(--color-bg-fill-accent-solid-default), #b5179e)">
              <TopNavigationMobile
                theme="overlay"
                heading="Heading"
                showControlBar
                leadingContent={<Avatar size="m" src="https://i.pravatar.cc/100?img=3" alt="User" />}
                controlSlots={<TopNavActionButton theme="overlay" icon={<Bell01 size={20} />} label="Notifications" notiDot />}
                mainSlots={<TopNavActionButton theme="overlay" icon={<Plus size={20} />} label="Add" />}
              />
            </MobileFrame>
          </div>

        </div>

        {/* ── Sub ── */}
        <h2 className="docs-section-title text-h3" style={{ marginTop: 'var(--gap-2xlarge)' }}>Sub</h2>

        {/* Sub / Default */}
        <h3 className="docs-subsection-title text-body-base" style={{ fontWeight: 'var(--font-weight-primary)', marginTop: 'var(--gap-large)', marginBottom: 'var(--gap-small)', color: 'var(--color-content-neutral-secondary)' }}>Default</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)' }}>

          <div>
            <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)', marginBottom: 'var(--gap-xsmall)' }}>Not expanded</p>
            <MobileFrame>
              <TopNavigationMobile
                theme="default"
                heading="Heading"
                showControlBar
                expanded={false}
                leadingContent={<TopNavActionButton theme="default" icon={<ArrowLeft size={20} />} label="Back" />}
                controlSlots={<TopNavActionButton theme="default" icon={<Plus size={20} />} label="Add" />}
              />
            </MobileFrame>
          </div>

          <div>
            <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)', marginBottom: 'var(--gap-xsmall)' }}>Expanded</p>
            <MobileFrame>
              <TopNavigationMobile
                theme="default"
                heading="Heading"
                showControlBar
                expanded={true}
                leadingContent={<TopNavActionButton theme="default" icon={<ArrowLeft size={20} />} label="Back" />}
                controlSlots={<TopNavActionButton theme="default" icon={<Plus size={20} />} label="Add" />}
              />
            </MobileFrame>
          </div>

        </div>

        {/* Sub / Overlay */}
        <h3 className="docs-subsection-title text-body-base" style={{ fontWeight: 'var(--font-weight-primary)', marginTop: 'var(--gap-large)', marginBottom: 'var(--gap-small)', color: 'var(--color-content-neutral-secondary)' }}>Overlay</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)' }}>

          <div>
            <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)', marginBottom: 'var(--gap-xsmall)' }}>Not expanded</p>
            <MobileFrame bg="linear-gradient(135deg, var(--color-bg-fill-accent-solid-default), #b5179e)">
              <TopNavigationMobile
                theme="overlay"
                heading="Heading"
                showControlBar
                expanded={false}
                leadingContent={<TopNavActionButton theme="overlay" icon={<ArrowLeft size={20} />} label="Back" />}
                controlSlots={<TopNavActionButton theme="overlay" icon={<Plus size={20} />} label="Add" />}
              />
            </MobileFrame>
          </div>

          <div>
            <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)', marginBottom: 'var(--gap-xsmall)' }}>Expanded</p>
            <MobileFrame bg="linear-gradient(135deg, var(--color-bg-fill-accent-solid-default), #b5179e)">
              <TopNavigationMobile
                theme="overlay"
                heading="Heading"
                showControlBar
                expanded={true}
                leadingContent={<TopNavActionButton theme="overlay" icon={<ArrowLeft size={20} />} label="Back" />}
                controlSlots={<TopNavActionButton theme="overlay" icon={<Plus size={20} />} label="Add" />}
              />
            </MobileFrame>
          </div>

        </div>

        {/* ── API ── */}
        <h2 className="docs-section-title text-h3" style={{ marginTop: 'var(--gap-2xlarge)' }}>API — TopNavigationMobile</h2>
        <ApiTable
          columns={['Prop', 'Type', 'Default', 'Description']}
          rows={[
            [<code>theme</code>, <><code>'default'</code> | <code>'overlay'</code></>, <code>'default'</code>, 'White surface or transparent overlay'],
            [<code>heading</code>, <code>string</code>, <code>'Heading'</code>, 'Page title in the main bar'],
            [<code>showControlBar</code>, <code>boolean</code>, <code>false</code>, '56px control bar above the heading'],
            [<code>showMainBar</code>, <code>boolean</code>, <code>true</code>, 'Main heading row'],
            [<code>showAdditionBlock</code>, <code>boolean</code>, <code>false</code>, '72px slot below the heading'],
            [<code>leadingContent</code>, <code>ReactNode</code>, '—', 'Left slot of the control bar'],
            [<code>controlSlots</code>, <code>ReactNode</code>, '—', 'Right slot of the control bar'],
            [<code>mainSlots</code>, <code>ReactNode</code>, '—', 'Right slot of the main bar'],
            [<code>additionContent</code>, <code>ReactNode</code>, '—', 'Content inside the addition block'],
            [<code>expanded</code>, <code>boolean</code>, '—', 'Sub type: false = heading in control bar center (collapsed), true = full heading bar shown'],
          ]}
        />

        <h2 className="docs-section-title text-h3" style={{ marginTop: 'var(--gap-2xlarge)' }}>API — TopNavActionButton</h2>
        <ApiTable
          columns={['Prop', 'Type', 'Default', 'Description']}
          rows={[
            [<code>icon</code>, <code>ReactNode</code>, '—', '20×20 icon element'],
            [<code>theme</code>, <><code>'default'</code> | <code>'overlay'</code></>, <code>'default'</code>, 'Matches the parent nav theme'],
            [<code>onClick</code>, <code>() =&gt; void</code>, '—', 'Click handler'],
            [<code>label</code>, <code>string</code>, '—', 'aria-label for accessibility'],
            [<code>notiDot</code>, <code>boolean</code>, <code>false</code>, 'Red notification dot at top-right'],
          ]}
        />

      </div>
    </>
  );
}
