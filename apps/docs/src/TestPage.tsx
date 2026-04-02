import { Avatar, AvatarGroup } from '@zen/components';

/* ── Avatar data ── */

const sizes = ['2xl', 'xl', 'l', 'm', 's', 'xs'] as const;
const colors = ['accent', 'neutral', 'blue', 'brown', 'crimson', 'cyan', 'green', 'indigo', 'orange', 'pink', 'plum', 'purple', 'red', 'teal', 'violet', 'yellow'] as const;
const statuses = ['active', 'pending', 'inactive', 'disabled'] as const;

const PHOTO = 'https://i.pravatar.cc/100?img=3';
const GROUP_PHOTOS = [
  'https://i.pravatar.cc/100?img=1',
  'https://i.pravatar.cc/100?img=2',
  'https://i.pravatar.cc/100?img=3',
  'https://i.pravatar.cc/100?img=4',
  'https://i.pravatar.cc/100?img=5',
  'https://i.pravatar.cc/100?img=6',
];

/* ── Shared styles ── */

const sectionStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)' };
const rowStyle: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--gap-small)' };
const labelStyle: React.CSSProperties = { color: 'var(--color-content-neutral-secondary)' };

export function TestPage() {
  return (
    <div style={{ padding: 'var(--padding-2xlarge)', maxWidth: 900, display: 'flex', flexDirection: 'column', gap: 'var(--gap-3xlarge)' }}>

      <h1 className="text-h2">Avatar</h1>

      {/* Sizes — Circle, Initials */}
      <section style={sectionStyle}>
        <h3 className="text-body-small" style={labelStyle}>Sizes — Circle / Initials</h3>
        <div style={rowStyle}>
          {sizes.map(s => (
            <Avatar key={s} size={s} color="accent">{s.toUpperCase()}</Avatar>
          ))}
        </div>
      </section>

      {/* Sizes — Circle, Photo */}
      <section style={sectionStyle}>
        <h3 className="text-body-small" style={labelStyle}>Sizes — Circle / Photo</h3>
        <div style={rowStyle}>
          {sizes.map(s => (
            <Avatar key={s} size={s} src={PHOTO} alt="User" />
          ))}
        </div>
      </section>

      {/* Sizes — Square, Initials */}
      <section style={sectionStyle}>
        <h3 className="text-body-small" style={labelStyle}>Sizes — Square / Initials</h3>
        <div style={rowStyle}>
          {sizes.map(s => (
            <Avatar key={s} size={s} shape="square" color="indigo">{s.toUpperCase()}</Avatar>
          ))}
        </div>
      </section>

      {/* Sizes — Square, Photo */}
      <section style={sectionStyle}>
        <h3 className="text-body-small" style={labelStyle}>Sizes — Square / Photo</h3>
        <div style={rowStyle}>
          {sizes.map(s => (
            <Avatar key={s} size={s} shape="square" src={PHOTO} alt="User" />
          ))}
        </div>
      </section>

      {/* Colors — Subtle */}
      <section style={sectionStyle}>
        <h3 className="text-body-small" style={labelStyle}>Colors — Subtle</h3>
        <div style={rowStyle}>
          {colors.map(c => (
            <Avatar key={c} size="l" color={c} background="subtle">{c[0].toUpperCase()}</Avatar>
          ))}
        </div>
      </section>

      {/* Colors — Solid */}
      <section style={sectionStyle}>
        <h3 className="text-body-small" style={labelStyle}>Colors — Solid</h3>
        <div style={rowStyle}>
          {colors.map(c => (
            <Avatar key={c} size="l" color={c} background="solid">{c[0].toUpperCase()}</Avatar>
          ))}
        </div>
      </section>

      {/* Colors — Square Subtle */}
      <section style={sectionStyle}>
        <h3 className="text-body-small" style={labelStyle}>Colors — Square / Subtle</h3>
        <div style={rowStyle}>
          {colors.map(c => (
            <Avatar key={c} size="l" shape="square" color={c} background="subtle">{c[0].toUpperCase()}</Avatar>
          ))}
        </div>
      </section>

      {/* Colors — Square Solid */}
      <section style={sectionStyle}>
        <h3 className="text-body-small" style={labelStyle}>Colors — Square / Solid</h3>
        <div style={rowStyle}>
          {colors.map(c => (
            <Avatar key={c} size="l" shape="square" color={c} background="solid">{c[0].toUpperCase()}</Avatar>
          ))}
        </div>
      </section>

      {/* Status — Circle */}
      <section style={sectionStyle}>
        <h3 className="text-body-small" style={labelStyle}>Status — Circle</h3>
        <div style={rowStyle}>
          {statuses.map(st => (
            <Avatar key={st} size="xl" color="accent" status={st}>{st[0].toUpperCase()}</Avatar>
          ))}
        </div>
      </section>

      {/* Status — Square */}
      <section style={sectionStyle}>
        <h3 className="text-body-small" style={labelStyle}>Status — Square</h3>
        <div style={rowStyle}>
          {statuses.map(st => (
            <Avatar key={st} size="xl" shape="square" color="indigo" background="solid" status={st}>{st[0].toUpperCase()}</Avatar>
          ))}
        </div>
      </section>

      {/* Status across sizes */}
      <section style={sectionStyle}>
        <h3 className="text-body-small" style={labelStyle}>Status across sizes</h3>
        <div style={rowStyle}>
          {sizes.map(s => (
            <Avatar key={s} size={s} color="green" status="active">{s.toUpperCase()}</Avatar>
          ))}
        </div>
      </section>

      {/* Avatar Group — Photos */}
      <section style={sectionStyle}>
        <h3 className="text-body-small" style={labelStyle}>Avatar Group — Photos</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)' }}>
          <AvatarGroup size="l">
            {GROUP_PHOTOS.slice(0, 4).map((src, i) => (
              <Avatar key={i} src={src} alt={`User ${i + 1}`} />
            ))}
          </AvatarGroup>
          <AvatarGroup size="m" max={3}>
            {GROUP_PHOTOS.map((src, i) => (
              <Avatar key={i} src={src} alt={`User ${i + 1}`} />
            ))}
          </AvatarGroup>
          <AvatarGroup size="s" max={4}>
            {GROUP_PHOTOS.map((src, i) => (
              <Avatar key={i} src={src} alt={`User ${i + 1}`} />
            ))}
          </AvatarGroup>
        </div>
      </section>

      {/* Avatar Group — Initials */}
      <section style={sectionStyle}>
        <h3 className="text-body-small" style={labelStyle}>Avatar Group — Initials</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)' }}>
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
        </div>
      </section>
    </div>
  );
}
