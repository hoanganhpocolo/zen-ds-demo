import { Badge } from '@zen/components';

export function ZenLogo() {
  return (
    <>
      <img src="/zen-mark.svg" alt="Zen" style={{ width: 28, height: 28 }} />
      <span style={{
        fontFamily: 'var(--font-family-display)',
        fontWeight: 'var(--font-weight-primary)',
        fontSize: '22px',
        letterSpacing: '-0.5px',
        lineHeight: 1,
      }}>
        Zen
      </span>
      <Badge label="Kaiz" color="neutral" variant="subtle" size="s" dot={false} />
    </>
  );
}
