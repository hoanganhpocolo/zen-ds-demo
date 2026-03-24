import { useState } from 'react';
import {
  Sidebar, SidebarItem,
  Avatar,
  Badge,
  Button,
  Search,
  ProgressBar,
  Slider,
  Chip,
  Divider,
} from '@zen/components';
import {
  Home01, Compass, BookClosed, Microphone, Disc,
  Play, Pause, SkipBack, SkipForward, Shuffle, Repeat01,
  Heart, DotsHorizontal, VolumeMax, VolumeMin,
  Bell01, ChevronDown,
  MusicNote01, Star01, TrendUp01,
  Users,
} from '@zen/icons/line';
import styles from './SonixDemo.module.css';

/* ── Data ──────────────────────────────────────────────────────────── */

// picsum.photos with named seeds → same photo every reload
function pic(seed: string, size = 400) {
  return `https://picsum.photos/seed/${seed}/${size}/${size}`;
}

const ALBUMS = [
  { id: 1, title: 'Midnight Aurora',  artist: 'Luna Waves',      img: pic('aurora'),   genre: 'Electronic', year: '2024', plays: '2.4M' },
  { id: 2, title: 'Golden Hour',      artist: 'The Solar Winds', img: pic('golden'),   genre: 'Pop',        year: '2024', plays: '1.8M' },
  { id: 3, title: 'Ocean Drive',      artist: 'Coastal Drift',   img: pic('ocean'),    genre: 'Chill',      year: '2024', plays: '3.1M' },
  { id: 4, title: 'Neon Jungle',      artist: 'Synth Riders',    img: pic('jungle77'), genre: 'Electronic', year: '2024', plays: '901K' },
  { id: 5, title: 'Desert Storm',     artist: 'Echo Chamber',    img: pic('desert'),   genre: 'Rock',       year: '2023', plays: '1.2M' },
  { id: 6, title: 'Arctic Bloom',     artist: 'Frost Quartet',   img: pic('arctic'),   genre: 'Classical',  year: '2024', plays: '754K' },
] as const;

const TRENDING = [
  { rank: 1, title: 'Neon Lights',    artist: 'Luna Waves',      dur: '3:42', plays: '12.4M', trend: 'up'   as const, img: pic('aurora',   80) },
  { rank: 2, title: 'Golden Touch',   artist: 'The Solar Winds', dur: '4:12', plays: '9.8M',  trend: 'up'   as const, img: pic('golden',   80) },
  { rank: 3, title: 'Tidal Wave',     artist: 'Coastal Drift',   dur: '3:58', plays: '8.2M',  trend: 'same' as const, img: pic('ocean',    80) },
  { rank: 4, title: 'Synthwave City', artist: 'Synth Riders',    dur: '5:04', plays: '7.6M',  trend: 'up'   as const, img: pic('jungle77', 80) },
  { rank: 5, title: 'Canyon Echo',    artist: 'Echo Chamber',    dur: '4:33', plays: '6.9M',  trend: 'down' as const, img: pic('desert',   80) },
];

const GENRES = ['All', 'Pop', 'Hip-Hop', 'Electronic', 'Jazz', 'Rock', 'Chill', 'Classical'] as const;

const PLAYLISTS = [
  { id: 'p1', name: 'Chill Evening Vibes', count: 24, color: 'blue'   as const },
  { id: 'p2', name: 'Workout Bangers',     count: 18, color: 'red'    as const },
  { id: 'p3', name: 'Late Night Focus',    count: 31, color: 'purple' as const },
  { id: 'p4', name: 'Sunday Morning',      count: 12, color: 'teal'   as const },
];

const NOW = { title: 'Neon Lights', artist: 'Luna Waves', album: 'Midnight Aurora', img: pic('aurora', 600), total: 222 };

const UP_NEXT = [
  { title: 'Golden Touch',   artist: 'The Solar Winds', dur: '4:12', img: pic('golden',   80) },
  { title: 'Tidal Wave',     artist: 'Coastal Drift',   dur: '3:58', img: pic('ocean',    80) },
  { title: 'Synthwave City', artist: 'Synth Riders',    dur: '5:04', img: pic('jungle77', 80) },
];

// Pre-generated waveform heights (40 bars)
const WAVE = [8,14,22,30,18,11,26,34,20,9,24,32,15,8,28,22,13,30,19,11,25,17,21,34,13,9,27,19,23,7,31,25,17,11,29,21,14,19,23,16];

function fmt(s: number) { return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; }

/* ── Component ─────────────────────────────────────────────────────── */

export function SonixDemo() {
  const [nav,       setNav]       = useState('home');
  const [genre,     setGenre]     = useState('All');
  const [playing,   setPlaying]   = useState(true);
  const [volume,    setVolume]    = useState(72);
  const [progress,  setProgress]  = useState(67);
  const [liked,     setLiked]     = useState(() => new Set<number>());

  const pct      = (progress / NOW.total) * 100;
  const waveCut  = Math.round((progress / NOW.total) * WAVE.length);

  function toggleLike(id: number) {
    setLiked(prev => { const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s; });
  }

  return (
    <div className={styles.root}>

      {/* ══ SIDEBAR ══ */}
      <div className={styles.sidebarWrap}>
        <Sidebar
          background="alternate"
          header={
            <div className={styles.logo}>
              <MusicNote01 size={22} style={{ color: 'var(--color-content-accent-primary)' }} />
              <span className={styles.logoText}>Sonix</span>
            </div>
          }
          footer={
            <div className={styles.sidebarUser}>
              <Avatar size="s" src="https://i.pravatar.cc/150?img=47" />
              <div>
                <p className="text-body-small" style={{ fontWeight: 'var(--font-weight-secondary)' }}>Alex Morgan</p>
                <p className="text-caption" style={{ color: 'var(--color-content-accent-primary)' }}>Premium</p>
              </div>
            </div>
          }
        >
          <div className={styles.sidebarNav}>
            <SidebarItem label="Home"     icon={<Home01     size={20} />} selected={nav === 'home'}     onClick={() => setNav('home')} />
            <SidebarItem label="Discover" icon={<Compass    size={20} />} selected={nav === 'discover'} onClick={() => setNav('discover')} />
            <SidebarItem label="Library"  icon={<BookClosed size={20} />} selected={nav === 'library'}  onClick={() => setNav('library')} />
            <SidebarItem label="Podcasts" icon={<Microphone size={20} />} selected={nav === 'podcasts'} onClick={() => setNav('podcasts')} />
            <SidebarItem label="Radio"    icon={<Disc       size={20} />} selected={nav === 'radio'}    onClick={() => setNav('radio')} />
          </div>

          <div className={styles.playlistsSection}>
            <p className={`text-capsline-s ${styles.sectionCap}`}>YOUR PLAYLISTS</p>
            {PLAYLISTS.map(pl => (
              <SidebarItem
                key={pl.id}
                label={pl.name}
                icon={<Avatar size="xs" color={pl.color} background="subtle">{pl.count}</Avatar>}
                selected={nav === pl.id}
                onClick={() => setNav(pl.id)}
              />
            ))}
          </div>
        </Sidebar>
      </div>

      {/* ══ MAIN ══ */}
      <div className={styles.main}>

        {/* Topbar */}
        <div className={styles.topbar}>
          <div className={styles.topbarSearch}>
            <Search placeholder="Search songs, artists, albums…" style={{ width: '100%' }} />
          </div>
          <div className={styles.topbarRight}>
            <Button variant="flat-primary" size="s" icon={<Bell01 size={20} />} />
            <div className={styles.topbarUser}>
              <Avatar size="m" src="https://i.pravatar.cc/150?img=47" />
              <ChevronDown size={14} style={{ color: 'var(--color-content-neutral-secondary)' }} />
            </div>
          </div>
        </div>

        {/* Scrollable body */}
        <div className={styles.body}>

          {/* Genre chips */}
          <div className={styles.genreRow}>
            {GENRES.map(g => (
              <Chip key={g} label={g} selected={genre === g} size="s" onClick={() => setGenre(g)} />
            ))}
          </div>

          {/* ── Featured hero ── */}
          <div className={styles.hero}>
            <img src={pic('concert', 1200)} alt="" className={styles.heroBg} />
            <div className={styles.heroOverlay}>
              <div className={styles.heroLeft}>
                <Badge label="🔥  Featured Artist" color="accent" variant="subtle" size="s" />
                <h1 className="text-display-4" style={{ color: '#fff', marginTop: 'var(--gap-xsmall)', lineHeight: 1.05 }}>
                  Luna Waves
                </h1>
                <div className={styles.heroMeta}>
                  <Users size={13} style={{ color: 'rgba(255,255,255,0.65)' }} />
                  <span className="text-body-small" style={{ color: 'rgba(255,255,255,0.75)' }}>2.4M monthly listeners</span>
                  <span className={styles.heroDot} />
                  <span className="text-body-small" style={{ color: 'rgba(255,255,255,0.75)' }}>Midnight Aurora · New Album</span>
                </div>
              </div>
              <div className={styles.heroRight}>
                <Button variant="white" size="l" icon={<Play size={18} />}>Play Now</Button>
                <Button variant="white-overlay" size="l">Follow</Button>
              </div>
            </div>
          </div>

          {/* ── Trending this week ── */}
          <div className={styles.section}>
            <div className={styles.secHead}>
              <div className={styles.secTitle}>
                <TrendUp01 size={18} style={{ color: 'var(--color-content-accent-primary)' }} />
                <h2 className="text-h4">Trending This Week</h2>
              </div>
              <Button variant="flat-primary" size="s">See all</Button>
            </div>
            <div className={styles.trendList}>
              {TRENDING.map(s => (
                <div key={s.rank} className={styles.trendRow}>
                  <span className={styles.rank}>
                    {String(s.rank).padStart(2, '0')}
                  </span>
                  <div className={styles.miniArt}>
                    <img src={s.img} alt={s.title} className={styles.coverImg} />
                  </div>
                  <div className={styles.trendInfo}>
                    <p className="text-body-small" style={{ fontWeight: 'var(--font-weight-secondary)' }}>{s.title}</p>
                    <p className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)' }}>{s.artist}</p>
                  </div>
                  <Badge
                    label={s.plays}
                    color={s.trend === 'up' ? 'positive' : s.trend === 'down' ? 'negative' : 'neutral'}
                    variant="subtle"
                    size="s"
                  />
                  <span className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)', width: 32, textAlign: 'right' }}>{s.dur}</span>
                  <button className={styles.likeBtn} onClick={() => toggleLike(s.rank)}>
                    <Heart size={16} style={{ color: liked.has(s.rank) ? 'var(--color-content-negative-primary)' : 'var(--color-content-neutral-tertiary)' }} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ── Albums for you ── */}
          <div className={styles.section}>
            <div className={styles.secHead}>
              <div className={styles.secTitle}>
                <Star01 size={18} style={{ color: 'var(--color-content-accent-primary)' }} />
                <h2 className="text-h4">Albums for You</h2>
              </div>
              <Button variant="flat-primary" size="s">See all</Button>
            </div>
            <div className={styles.albumGrid}>
              {ALBUMS.map(a => (
                <div key={a.id} className={styles.albumCard}>
                  <div className={styles.albumArt}>
                    <img src={a.img} alt={a.title} className={styles.coverImg} />
                    <div className={styles.albumHover}>
                      <Button variant="white" size="m" icon={<Play size={18} />} />
                    </div>
                  </div>
                  <div className={styles.albumInfo}>
                    <p className="text-body-small" style={{ fontWeight: 'var(--font-weight-secondary)' }}>{a.title}</p>
                    <p className="text-caption" style={{ color: 'var(--color-content-neutral-secondary)' }}>{a.artist}</p>
                    <div style={{ display: 'flex', gap: 'var(--gap-3xsmall)', marginTop: 4, flexWrap: 'wrap' }}>
                      <Badge label={a.genre} color="neutral" variant="subtle" size="s" />
                      <Badge label={a.year}  color="neutral" variant="ghost"  size="s" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ══ NOW PLAYING ══ */}
      <div className={styles.nowPlaying}>

        <p className={`text-capsline-s ${styles.sectionCap}`} style={{ marginBottom: 'var(--gap-medium)' }}>
          NOW PLAYING
        </p>

        {/* Art */}
        <div className={styles.nowArt}>
          <img src={NOW.img} alt={NOW.title} className={styles.coverImg} />
          <div className={styles.nowArtSheen} />
        </div>

        {/* Title + buttons */}
        <div className={styles.nowMeta}>
          <div style={{ minWidth: 0 }}>
            <p className="text-h4" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{NOW.title}</p>
            <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)', marginTop: 2 }}>
              {NOW.artist} · {NOW.album}
            </p>
          </div>
          <div style={{ display: 'flex', gap: 2, flexShrink: 0 }}>
            <Button variant="flat-primary" size="xs" icon={<Heart          size={15} />} />
            <Button variant="flat-primary" size="xs" icon={<DotsHorizontal size={15} />} />
          </div>
        </div>

        {/* Waveform */}
        <div className={styles.waveform}>
          <svg width="100%" height="40" viewBox={`0 0 ${WAVE.length * 5} 40`} preserveAspectRatio="none">
            {WAVE.map((h, i) => (
              <rect
                key={i}
                x={i * 5} y={(40 - h) / 2} width={3} height={h} rx={1.5}
                fill={i < waveCut
                  ? 'var(--color-content-accent-primary)'
                  : 'var(--color-bg-fill-neutral-subtle-default)'}
              />
            ))}
          </svg>
        </div>

        {/* Progress */}
        <div className={styles.progressRow}>
          <span className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)' }}>{fmt(progress)}</span>
          <div style={{ flex: 1 }}>
            <ProgressBar value={pct} theme="accent" />
          </div>
          <span className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)' }}>{fmt(NOW.total)}</span>
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          <Button variant="flat-primary" size="s" icon={<Shuffle     size={16} />} />
          <Button variant="flat-primary" size="m" icon={<SkipBack    size={20} />} onClick={() => setProgress(p => Math.max(0, p - 10))} />
          <button className={styles.playBtn} onClick={() => setPlaying(p => !p)}>
            {playing
              ? <Pause size={20} style={{ color: '#fff' }} />
              : <Play  size={20} style={{ color: '#fff' }} />}
          </button>
          <Button variant="flat-primary" size="m" icon={<SkipForward size={20} />} onClick={() => setProgress(p => Math.min(NOW.total, p + 10))} />
          <Button variant="flat-primary" size="s" icon={<Repeat01    size={16} />} />
        </div>

        {/* Volume */}
        <div className={styles.volumeRow}>
          <VolumeMin size={15} style={{ color: 'var(--color-content-neutral-tertiary)', flexShrink: 0 }} />
          <Slider value={volume} min={0} max={100} size="small" theme="accent" onChange={setVolume} style={{ flex: 1 }} />
          <VolumeMax size={15} style={{ color: 'var(--color-content-neutral-tertiary)', flexShrink: 0 }} />
        </div>

        <Divider style={{ margin: 'var(--gap-medium) 0 var(--gap-small)' }} />

        {/* Up Next */}
        <p className={`text-capsline-s ${styles.sectionCap}`} style={{ marginBottom: 'var(--gap-xsmall)' }}>UP NEXT</p>
        <div className={styles.queue}>
          {UP_NEXT.map((s, i) => (
            <div key={i} className={styles.queueRow}>
              <div className={styles.queueArt}>
                <img src={s.img} alt={s.title} className={styles.coverImg} />
              </div>
              <div className={styles.queueInfo}>
                <p className="text-body-small" style={{ fontWeight: 'var(--font-weight-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.title}</p>
                <p className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)' }}>{s.artist}</p>
              </div>
              <span className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)', flexShrink: 0 }}>{s.dur}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
