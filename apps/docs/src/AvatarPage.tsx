import { Avatar, AvatarGroup } from '@zen/components';
import { DemoBlock } from './DemoBlock';

const COLORS = ['accent', 'blue', 'crimson', 'cyan', 'green', 'indigo', 'orange', 'pink', 'plum', 'purple', 'red', 'teal', 'violet', 'yellow'] as const;

const SAMPLE_PHOTO = 'https://i.pravatar.cc/100?img=3';
const SAMPLE_PHOTOS = [
  'https://i.pravatar.cc/100?img=1',
  'https://i.pravatar.cc/100?img=2',
  'https://i.pravatar.cc/100?img=3',
  'https://i.pravatar.cc/100?img=4',
  'https://i.pravatar.cc/100?img=5',
  'https://i.pravatar.cc/100?img=6',
];

export function AvatarPage() {
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
        <h1 className="docs-page-title text-display-1">Avatar</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            Avatars represent a user or entity with an image, initials, or icon. Use AvatarGroup to stack multiple avatars with an overflow indicator.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

      {/* ── When to Use ── */}
      <div className="docs-when-to-use">
        <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>When to use</h3>
        <ul className="text-body-small">
          <li>To visually identify a user with their photo or initials.</li>
          <li>Use <strong>Circle</strong> shape for user profiles and <strong>Square</strong> for teams or workspaces.</li>
          <li>Use <strong>Subtle</strong> background for light contexts, <strong>Solid</strong> for bolder emphasis.</li>
          <li>Use <strong>AvatarGroup</strong> to show multiple users in a compact layout.</li>
          <li>Use the <strong>status</strong> prop to indicate online/active state.</li>
        </ul>
      </div>

      {/* ── Examples ── */}
      <h2 className="docs-section-title text-h3">Examples</h2>

      <div className="docs-demo-grid">
        {/* Sizes */}
        <DemoBlock
          title="Sizes"
          description="7 sizes from 2XSmall (20px) to 2XLarge (100px)."
        >
          {(['2xl', 'xl', 'l', 'm', 's', 'xs', '2xs'] as const).map((s) => (
            <Avatar key={s} size={s} color="accent">A</Avatar>
          ))}
        </DemoBlock>

        {/* Photo */}
        <DemoBlock
          title="Photo"
          description="Pass src to display a user's photo instead of initials."
        >
          {(['2xl', 'xl', 'l', 'm', 's', 'xs', '2xs'] as const).map((s) => (
            <Avatar key={s} size={s} src={SAMPLE_PHOTO} alt="User" />
          ))}
        </DemoBlock>

        {/* Shape */}
        <DemoBlock
          title="Shape"
          description="Circle (default) and Square shapes."
        >
          <Avatar size="xl" shape="circle" color="accent">A</Avatar>
          <Avatar size="xl" shape="square" color="accent">A</Avatar>
          <Avatar size="xl" shape="circle" src={SAMPLE_PHOTO} alt="User" />
          <Avatar size="xl" shape="square" src={SAMPLE_PHOTO} alt="User" />
        </DemoBlock>

        {/* Colors — Subtle */}
        <DemoBlock
          title="Colors — Subtle"
          description="16 color variants with subtle (semi-transparent) background."
          fullWidth
        >
          {COLORS.map((c) => (
            <Avatar key={c} size="l" color={c} background="subtle">{c[0].toUpperCase()}</Avatar>
          ))}
        </DemoBlock>

        {/* Colors — Solid */}
        <DemoBlock
          title="Colors — Solid"
          description="Same 16 colors with solid (opaque) background."
          fullWidth
        >
          {COLORS.map((c) => (
            <Avatar key={c} size="l" color={c} background="solid">{c[0].toUpperCase()}</Avatar>
          ))}
        </DemoBlock>

        {/* Status */}
        <DemoBlock
          title="Status Indicator"
          description="Show an online/active status dot. Scales with avatar size."
        >
          <Avatar size="2xl" color="accent" status>A</Avatar>
          <Avatar size="xl" color="blue" status>B</Avatar>
          <Avatar size="l" color="green" status>C</Avatar>
          <Avatar size="m" color="purple" status>D</Avatar>
          <Avatar size="s" color="red" status>E</Avatar>
          <Avatar size="xs" color="orange" status>F</Avatar>
        </DemoBlock>

        {/* Square + Solid + Status */}
        <DemoBlock
          title="Square + Solid + Status"
          description="All features combined."
        >
          <Avatar size="xl" shape="square" color="crimson" background="solid" status>Z</Avatar>
          <Avatar size="l" shape="square" color="indigo" background="solid" status>K</Avatar>
          <Avatar size="m" shape="square" color="teal" background="solid" status>M</Avatar>
        </DemoBlock>

        {/* Avatar Group */}
        <DemoBlock
          title="Avatar Group"
          description="Stack avatars with overlapping layout. Use max to limit visible count."
          direction="column"
          fullWidth
        >
          <AvatarGroup size="l">
            {SAMPLE_PHOTOS.slice(0, 4).map((src, i) => (
              <Avatar key={i} src={src} alt={`User ${i + 1}`} />
            ))}
          </AvatarGroup>

          <AvatarGroup size="m" max={3}>
            {SAMPLE_PHOTOS.map((src, i) => (
              <Avatar key={i} src={src} alt={`User ${i + 1}`} />
            ))}
          </AvatarGroup>

          <AvatarGroup size="s" max={4}>
            {SAMPLE_PHOTOS.map((src, i) => (
              <Avatar key={i} src={src} alt={`User ${i + 1}`} />
            ))}
          </AvatarGroup>
        </DemoBlock>

        {/* Avatar Group with initials */}
        <DemoBlock
          title="Avatar Group — Initials"
          description="Mix of colors and backgrounds in a group."
          direction="column"
          fullWidth
        >
          <AvatarGroup size="m">
            <Avatar color="accent">A</Avatar>
            <Avatar color="blue">B</Avatar>
            <Avatar color="green">C</Avatar>
            <Avatar color="purple">D</Avatar>
            <Avatar color="red">E</Avatar>
          </AvatarGroup>

          <AvatarGroup size="m" max={3}>
            <Avatar color="accent" background="solid">A</Avatar>
            <Avatar color="crimson" background="solid">B</Avatar>
            <Avatar color="indigo" background="solid">C</Avatar>
            <Avatar color="teal" background="solid">D</Avatar>
            <Avatar color="orange" background="solid">E</Avatar>
          </AvatarGroup>
        </DemoBlock>
      </div>

      {/* ── API: Avatar ── */}
      <h2 className="docs-section-title text-h3">API — Avatar</h2>

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
            <td><code>children</code></td>
            <td>Text content (initials). Ignored when <code>src</code> is provided.</td>
            <td><code>ReactNode</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>src</code></td>
            <td>Image source URL</td>
            <td><code>string</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>alt</code></td>
            <td>Alt text for the image</td>
            <td><code>string</code></td>
            <td><code>''</code></td>
          </tr>
          <tr>
            <td><code>shape</code></td>
            <td>Shape of the avatar</td>
            <td><code>'circle'</code> | <code>'square'</code></td>
            <td><code>'circle'</code></td>
          </tr>
          <tr>
            <td><code>size</code></td>
            <td>Size variant</td>
            <td><code>'2xs'</code> | <code>'xs'</code> | <code>'s'</code> | <code>'m'</code> | <code>'l'</code> | <code>'xl'</code> | <code>'2xl'</code></td>
            <td><code>'m'</code></td>
          </tr>
          <tr>
            <td><code>color</code></td>
            <td>Color variant</td>
            <td><code>'accent'</code> | <code>'neutral'</code> | <code>'blue'</code> | <code>'brown'</code> | <code>'crimson'</code> | <code>'cyan'</code> | <code>'green'</code> | <code>'indigo'</code> | <code>'orange'</code> | <code>'pink'</code> | <code>'plum'</code> | <code>'purple'</code> | <code>'red'</code> | <code>'teal'</code> | <code>'violet'</code> | <code>'yellow'</code></td>
            <td><code>'accent'</code></td>
          </tr>
          <tr>
            <td><code>background</code></td>
            <td>Background style</td>
            <td><code>'subtle'</code> | <code>'solid'</code></td>
            <td><code>'subtle'</code></td>
          </tr>
          <tr>
            <td><code>status</code></td>
            <td>Show online status indicator</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
        </tbody>
      </table>

      {/* ── API: AvatarGroup ── */}
      <h2 className="docs-section-title text-h3" style={{ marginTop: 'var(--gap-3xlarge)' }}>API — AvatarGroup</h2>

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
            <td><code>children</code></td>
            <td>Avatar elements</td>
            <td><code>ReactElement&lt;AvatarProps&gt;[]</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>size</code></td>
            <td>Size applied to all avatars</td>
            <td><code>'2xs'</code> | <code>'xs'</code> | <code>'s'</code> | <code>'m'</code> | <code>'l'</code> | <code>'xl'</code> | <code>'2xl'</code></td>
            <td><code>'m'</code></td>
          </tr>
          <tr>
            <td><code>max</code></td>
            <td>Maximum visible avatars before "+N" overflow</td>
            <td><code>number</code></td>
            <td>—</td>
          </tr>
        </tbody>
      </table>

      {/* ── Design Tokens ── */}
      <h2 className="docs-section-title text-h3" style={{ marginTop: 'var(--gap-3xlarge)' }}>Design Tokens</h2>

      <table className="docs-api-table text-body-small">
        <thead>
          <tr>
            <th>Size</th>
            <th>Dimension</th>
            <th>Token</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>2xl</code></td><td>100px</td><td><code>--image-size-2xlarge</code></td></tr>
          <tr><td><code>xl</code></td><td>80px</td><td><code>--image-size-xlarge</code></td></tr>
          <tr><td><code>l</code></td><td>60px</td><td><code>--image-size-large</code></td></tr>
          <tr><td><code>m</code></td><td>40px</td><td><code>--image-size-medium</code></td></tr>
          <tr><td><code>s</code></td><td>32px</td><td><code>--image-size-small</code></td></tr>
          <tr><td><code>xs</code></td><td>24px</td><td><code>--image-size-xsmall</code></td></tr>
          <tr><td><code>2xs</code></td><td>20px</td><td><code>--image-size-2xsmall</code></td></tr>
        </tbody>
      </table>
      </div>
    </>
  );
}
