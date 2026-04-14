import { useState } from 'react';
import { InputField } from '@zen/components';
import { Mail01, Lock01, User, SearchMedium, Eye, EyeOff } from '@zen/icons/line';

const labelStyle: React.CSSProperties = { color: 'var(--color-content-neutral-secondary)' };


function InputFieldDemo() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [search, setSearch] = useState('');

  const rowStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 'var(--gap-medium)',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-large)' }}>
      {/* Sizes */}
      <div>
        <h3 className="text-body-small" style={labelStyle}>Sizes: s / m / l / xl</h3>
        <div style={{ ...rowStyle, marginTop: 'var(--gap-small)' }}>
          <InputField size="s" label="Small" placeholder="Enter text" />
          <InputField size="m" label="Medium" placeholder="Enter text" />
          <InputField size="l" label="Large" placeholder="Enter text" />
          <InputField size="xl" label="XLarge" placeholder="Enter text" />
        </div>
      </div>

      {/* With leading/trailing icons */}
      <div>
        <h3 className="text-body-small" style={labelStyle}>With leading & trailing icons</h3>
        <div style={{ ...rowStyle, marginTop: 'var(--gap-small)' }}>
          <InputField
            size="m"
            label="Email"
            placeholder="you@company.com"
            leading={<Mail01 size={20} />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            size="m"
            label="Username"
            placeholder="Enter username"
            leading={<User size={20} />}
          />
          <InputField
            size="m"
            label="Search"
            placeholder="Search…"
            leading={<SearchMedium size={20} />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <InputField
            size="m"
            label="Password"
            placeholder="Enter password"
            type={showPass ? 'text' : 'password'}
            leading={<Lock01 size={20} />}
            trailing={
              <button
                type="button"
                onClick={() => setShowPass((v) => !v)}
                style={{ background: 'none', border: 0, cursor: 'pointer', display: 'inline-flex', color: 'var(--color-content-neutral-tertiary)' }}
                aria-label={showPass ? 'Hide password' : 'Show password'}
              >
                {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            }
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {/* States */}
      <div>
        <h3 className="text-body-small" style={labelStyle}>States: default / disabled / error</h3>
        <div style={{ ...rowStyle, marginTop: 'var(--gap-small)' }}>
          <InputField size="m" label="Default" placeholder="Active" />
          <InputField size="m" label="Disabled" placeholder="Can't edit" disabled value="Disabled value" />
          <InputField size="m" label="Error" placeholder="Invalid input" error="Email already exists" defaultValue="duplicate@co.com" />
        </div>
      </div>

      {/* Character count */}
      <div>
        <h3 className="text-body-small" style={labelStyle}>Char count + maxLength</h3>
        <div style={{ ...rowStyle, marginTop: 'var(--gap-small)' }}>
          <InputField
            size="m"
            label="Bio (auto count)"
            placeholder="Tell us about you"
            charCount={true as any}
            maxLength={100}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <InputField
            size="m"
            label="Bio (manual count)"
            placeholder="No max length"
            charCount="custom/∞"
          />
          <InputField
            size="m"
            label="Title (limit 30)"
            placeholder="Short title"
            charCount={true as any}
            maxLength={30}
            defaultValue="Hello world"
          />
        </div>
      </div>

      {/* No label */}
      <div>
        <h3 className="text-body-small" style={labelStyle}>No label (inline)</h3>
        <div style={{ ...rowStyle, marginTop: 'var(--gap-small)' }}>
          <InputField size="m" placeholder="Placeholder only" />
          <InputField size="m" placeholder="Read-only" readOnly defaultValue="Read-only text" />
        </div>
      </div>
    </div>
  );
}

export function TestPage() {
  return (
    <div style={{ padding: 'var(--padding-2xlarge)', maxWidth: 1100, display: 'flex', flexDirection: 'column', gap: 'var(--gap-3xlarge)' }}>
      <h1 className="text-h2">InputField</h1>
      <InputFieldDemo />
    </div>
  );
}
