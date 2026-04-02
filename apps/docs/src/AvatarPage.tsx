import { Avatar, AvatarGroup } from '@zen/components';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

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
            <span className="text-subheading">
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
          {(['2xl', 'xl', 'l', 'm', 's', 'xs'] as const).map((s) => (
            <Avatar key={s} size={s} color="accent">A</Avatar>
          ))}
        </DemoBlock>

        {/* Photo */}
        <DemoBlock
          title="Photo"
          description="Pass src to display a user's photo instead of initials."
        >
          {(['2xl', 'xl', 'l', 'm', 's', 'xs'] as const).map((s) => (
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
          title="Status — Active"
          description="Show online/active status. Scales with avatar size."
        >
          <Avatar size="2xl" color="accent" status="active">A</Avatar>
          <Avatar size="xl" color="blue" status="active">B</Avatar>
          <Avatar size="l" color="green" status="active">C</Avatar>
          <Avatar size="m" color="purple" status="active">D</Avatar>
          <Avatar size="s" color="red" status="active">E</Avatar>
          <Avatar size="xs" color="orange" status="active">F</Avatar>
        </DemoBlock>

        <DemoBlock
          title="Status variants"
          description="active · pending · inactive · disabled"
        >
          <Avatar size="m" color="accent" status="active">A</Avatar>
          <Avatar size="m" color="accent" status="pending">P</Avatar>
          <Avatar size="m" color="accent" status="inactive">I</Avatar>
          <Avatar size="m" color="accent" status="disabled">D</Avatar>
        </DemoBlock>

        {/* Square + Solid + Status */}
        <DemoBlock
          title="Square + Solid + Status"
          description="All features combined."
        >
          <Avatar size="xl" shape="square" color="crimson" background="solid" status="active">Z</Avatar>
          <Avatar size="l" shape="square" color="indigo" background="solid" status="pending">K</Avatar>
          <Avatar size="m" shape="square" color="teal" background="solid" status="inactive">M</Avatar>
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

      <ApiTable
        columns={['Property', 'Description', 'Type', 'Default']}
        rows={[
          [<code>children</code>, <>Text content (initials). Ignored when <code>src</code> is provided.</>, <code>ReactNode</code>, '—'],
          [<code>src</code>, 'Image source URL', <code>string</code>, '—'],
          [<code>alt</code>, 'Alt text for the image', <code>string</code>, <code>''</code>],
          [<code>shape</code>, 'Shape of the avatar', <><code>'circle'</code> | <code>'square'</code></>, <code>'circle'</code>],
          [<code>size</code>, 'Size variant', <><code>'2xs'</code> | <code>'xs'</code> | <code>'s'</code> | <code>'m'</code> | <code>'l'</code> | <code>'xl'</code> | <code>'2xl'</code></>, <code>'m'</code>],
          [<code>color</code>, 'Color variant', <><code>'accent'</code> | <code>'neutral'</code> | <code>'blue'</code> | <code>'brown'</code> | <code>'crimson'</code> | <code>'cyan'</code> | <code>'green'</code> | <code>'indigo'</code> | <code>'orange'</code> | <code>'pink'</code> | <code>'plum'</code> | <code>'purple'</code> | <code>'red'</code> | <code>'teal'</code> | <code>'violet'</code> | <code>'yellow'</code></>, <code>'accent'</code>],
          [<code>background</code>, 'Background style', <><code>'subtle'</code> | <code>'solid'</code></>, <code>'subtle'</code>],
          [<code>status</code>, 'Show online status indicator', <code>boolean</code>, <code>false</code>],
        ]}
      />

      {/* ── API: AvatarGroup ── */}
      <h2 className="docs-section-title text-h3" style={{ marginTop: 'var(--gap-3xlarge)' }}>API — AvatarGroup</h2>

      <ApiTable
        columns={['Property', 'Description', 'Type', 'Default']}
        rows={[
          [<code>children</code>, 'Avatar elements', <code>ReactElement&lt;AvatarProps&gt;[]</code>, '—'],
          [<code>size</code>, 'Size applied to all avatars', <><code>'2xs'</code> | <code>'xs'</code> | <code>'s'</code> | <code>'m'</code> | <code>'l'</code> | <code>'xl'</code> | <code>'2xl'</code></>, <code>'m'</code>],
          [<code>max</code>, 'Maximum visible avatars before "+N" overflow', <code>number</code>, '—'],
        ]}
      />

      {/* ── Design Tokens ── */}
      <h2 className="docs-section-title text-h3" style={{ marginTop: 'var(--gap-3xlarge)' }}>Design Tokens</h2>

      <ApiTable
        columns={['Size', 'Dimension', 'Token']}
        rows={[
          [<code>2xl</code>, '100px', <code>--image-size-2xlarge</code>],
          [<code>xl</code>, '80px', <code>--image-size-xlarge</code>],
          [<code>l</code>, '60px', <code>--image-size-large</code>],
          [<code>m</code>, '40px', <code>--image-size-medium</code>],
          [<code>s</code>, '32px', <code>--image-size-small</code>],
          [<code>xs</code>, '24px', <code>--image-size-xsmall</code>],
          [<code>2xs</code>, '20px', <code>--image-size-2xsmall</code>],
        ]}
      />
      </div>
    </>
  );
}
