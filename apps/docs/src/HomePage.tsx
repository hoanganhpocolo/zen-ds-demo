import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Button, Segmented, Badge, Tag, Checkbox, InlineMessage, SelectField } from '@zen/components';
import {
  Settings01, PlusCircle, Hexagon02,
  Download01, Heart, Eye, Copy, Bookmark, BookmarkCheck,
  Folder, Grid01, Mail01, Briefcase, Clipboard, ClipboardCheck,
  CheckCircle, MessageCircle, MessageDotsCircle, HelpCircle, FaceHappy,
  Home01, Lock01, Bell01, Calendar, Globe01, Zap,
  ArrowRight, ArrowLeft, ChevronDown, ChevronUp, Edit01,
  Image, Link01, Map, Camera, Phone, Plus, Archive,
  Award01, Compass, Key, Share01, Shield, Tag as TagIcon, User, AtSign,
} from '@zen/icons/line';
import {
  Heart as HeartSolid, Eye as EyeSolid, Copy as CopySolid,
  Bookmark as BookmarkSolid, Folder as FolderSolid,
  Grid01 as Grid01Solid, Mail01 as Mail01Solid, Briefcase as BriefcaseSolid,
  CheckCircle as CheckCircleSolid, MessageCircle as MessageCircleSolid,
  HelpCircle as HelpCircleSolid, FaceHappy as FaceHappySolid,
  Home01 as Home01Solid, Lock01 as Lock01Solid, Bell01 as Bell01Solid,
  Calendar as CalendarSolid, Globe01 as Globe01Solid,
  Archive as ArchiveSolid, Award01 as Award01Solid, Camera as CameraSolid,
  Edit01 as Edit01Solid, Image as ImageSolid, Key as KeySolid,
  Map as MapSolid, Phone as PhoneSolid, Shield as ShieldSolid,
  Share01 as Share01Solid, Flag01 as Flag01Solid, Compass as CompassSolid,
  Cloud as CloudSolid, Sun as SunSolid, Trash as TrashSolid,
} from '@zen/icons/solid';
import { Figma } from '@zen/icons/social';
import { HUES, type Hue } from './ThemePicker';
import './home-page.css';

/* ── Reusable: split text element into line-by-line curtain spans ── */

function splitTextIntoLines(el: HTMLElement, text: string, lineClass: string, innerClass: string) {
  el.innerHTML = '';
  const words = text.split(' ');
  const wordEls: HTMLSpanElement[] = [];
  for (const w of words) {
    const wrap = document.createElement('span');
    wrap.style.display = 'inline';
    wrap.textContent = w;
    el.appendChild(wrap);
    el.appendChild(document.createTextNode(' '));
    wordEls.push(wrap);
  }
  const lines: string[][] = [];
  let currentLine: string[] = [];
  let lastTop = -1;
  for (const wordEl of wordEls) {
    const top = wordEl.offsetTop;
    if (top !== lastTop && currentLine.length > 0) {
      lines.push(currentLine);
      currentLine = [];
    }
    currentLine.push(wordEl.textContent ?? '');
    lastTop = top;
  }
  if (currentLine.length > 0) lines.push(currentLine);
  el.innerHTML = '';
  lines.forEach((wordsInLine, i) => {
    const line = document.createElement('span');
    line.className = lineClass;
    const inner = document.createElement('span');
    inner.className = innerClass;
    inner.textContent = wordsInLine.join(' ');
    inner.style.setProperty('--line-index', String(i));
    line.appendChild(inner);
    el.appendChild(line);
  });
}

/* Hue → step-9 color (main solid) for circle preview.
   Read dynamically from CSS primitives at runtime instead of hardcoding. */
function getHueColor(hue: Hue): string {
  const computed = getComputedStyle(document.documentElement);
  const prefix = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  return computed.getPropertyValue(`--${prefix}-color-${hue}-9`).trim() || '#F05A22';
}

/* ── Icons grid slot ── */

const LINE_ICONS = [
  Download01, Heart, Eye, Copy, Bookmark, BookmarkCheck, Folder, Grid01,
  Mail01, Briefcase, Clipboard, ClipboardCheck, CheckCircle, MessageCircle,
  MessageDotsCircle, HelpCircle, FaceHappy, Home01, Lock01, Bell01,
  Calendar, Globe01, Zap, Settings01,
  ArrowRight, ArrowLeft, ChevronDown, ChevronUp, Edit01, Image, Link01, Map,
  Camera, Phone, Plus, Archive, Award01, Compass, Key, Share01,
  Shield, TagIcon, User, AtSign,
];

const SOLID_ICONS = [
  HeartSolid, EyeSolid, CopySolid, BookmarkSolid, FolderSolid, Grid01Solid,
  Mail01Solid, BriefcaseSolid, CheckCircleSolid, MessageCircleSolid,
  HelpCircleSolid, FaceHappySolid, Home01Solid, Lock01Solid, Bell01Solid,
  CalendarSolid, Globe01Solid, ArchiveSolid, Award01Solid, CameraSolid,
  Edit01Solid, ImageSolid, KeySolid, MapSolid, PhoneSolid, ShieldSolid,
  Share01Solid, Flag01Solid, CompassSolid, CloudSolid, SunSolid, TrashSolid,
];

function IconsSlot() {
  const [tab, setTab] = useState('all');
  const GRID_COUNT = 48;
  const raw = tab === 'line' ? LINE_ICONS : tab === 'bold' ? SOLID_ICONS : [...LINE_ICONS.slice(0, 24), ...SOLID_ICONS.slice(0, 24)];
  // Pad to GRID_COUNT by cycling if not enough
  const icons = Array.from({ length: GRID_COUNT }, (_, i) => raw[i % raw.length]);

  return (
    <div className="usp-icons-slot">
      <Segmented
        items={[
          { value: 'all', label: 'All' },
          { value: 'line', label: 'Line' },
          { value: 'bold', label: 'Bold' },
        ]}
        value={tab}
        onChange={setTab}
        size="medium"
      />
      <div className="usp-icons-grid">
        {icons.map((Icon, i) => (
          <span key={i} className="usp-icons-cell">
            <Icon size={20} />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Dark theme comparison slider ── */

function DarkThemeSlot() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // percentage
  const dragging = useRef(false);

  const handleMove = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => { if (dragging.current) handleMove(e.clientX); };
    const onMouseUp = () => { dragging.current = false; };
    const onTouchMove = (e: TouchEvent) => { if (dragging.current) handleMove(e.touches[0].clientX); };
    const onTouchEnd = () => { dragging.current = false; };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="usp-dark-slider"
      onMouseDown={(e) => { dragging.current = true; handleMove(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; handleMove(e.touches[0].clientX); }}
    >
      {/* Light image (full, always visible) */}
      <img className="usp-dark-slider-img" src="/home/Usp Dark theme 1.webp" alt="Light theme" draggable={false} />

      {/* Dark image (clipped by slider position) */}
      <div className="usp-dark-slider-overlay" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
        <img className="usp-dark-slider-img" src="/home/Usp Dark theme 2.webp" alt="Dark theme" draggable={false} />
      </div>

      {/* Slider handle */}
      <div className="usp-dark-slider-handle" style={{ left: `${position}%` }}>
        <div className="usp-dark-slider-line" />
        <div className="usp-dark-slider-knob" />
      </div>
    </div>
  );
}

/* ── Customize milk tea slot — mini theme playground ── */

function CustomizeSlot() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [radius, setRadius] = useState('rounded');
  const [hueIndex, setHueIndex] = useState(0);
  const currentHue = HUES[hueIndex];
  const containerRef = useRef<HTMLDivElement>(null);

  // Apply brand hue scoped to this container (solid + alpha steps)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const computed = getComputedStyle(document.documentElement);
    const isDark = theme === 'dark';
    const prefix = isDark ? 'dark' : 'light';
    for (let i = 1; i <= 12; i++) {
      const solid = computed.getPropertyValue(`--${prefix}-color-${currentHue}-${i}`).trim();
      if (solid) el.style.setProperty(`--color-brand-${i}`, solid);
      const alpha = computed.getPropertyValue(`--${prefix}-color-${currentHue}-alpha-${i}`).trim();
      if (alpha) el.style.setProperty(`--color-brand-alpha-${i}`, alpha);
    }
  }, [currentHue, theme]);

  const BRIGHT_HUES = new Set<Hue>(['yellow', 'lime', 'mint', 'sky', 'zen']);
  const isBright = BRIGHT_HUES.has(currentHue);
  const cycleHue = () => setHueIndex((i) => (i + 1) % HUES.length);

  return (
    <div ref={containerRef} className="usp-customize" data-theme={theme} data-radius={radius} data-component-theme="brand" data-brand-bright={isBright ? 'true' : 'false'}>
      <div className="usp-customize-controls">
        <Segmented
          items={[
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' },
          ]}
          value={theme}
          onChange={(v) => setTheme(v as 'light' | 'dark')}
          size="medium"
          level="secondary"
        />
        <Segmented
          items={[
            { value: 'rounded', label: 'Rounded' },
            { value: 'standard', label: 'Standard' },
            { value: 'luxury', label: 'Luxury' },
          ]}
          value={radius}
          onChange={setRadius}
          size="medium"
          level="secondary"
        />
        <button
          className="usp-customize-color"
          onClick={cycleHue}
          aria-label={`Brand color: ${currentHue}`}
          style={{ background: getHueColor(currentHue) }}
        />
      </div>

      <div className="usp-customize-preview">
        {/* Left: Budget chart mockup */}
        <div className="usp-customize-preview-left">
          <div className="usp-customize-chart">
            <div className="usp-customize-chart-header">
              <span className="text-body-extra" style={{ fontWeight: 'var(--font-weight-primary)', color: 'var(--color-content-neutral-primary)' }}>Budget Allocation</span>
              <Button variant="tertiary" size="s" icon={<Settings01 size={16} />} />
            </div>
            <div className="usp-customize-chart-body">
              {/* Y-axis labels */}
              <div className="usp-customize-chart-yaxis text-caption">
                <span>$25K</span><span>$20K</span><span>$15K</span><span>$10K</span><span>$5K</span><span>0</span>
              </div>
              {/* Grid lines + bars */}
              <div className="usp-customize-chart-area">
                <div className="usp-customize-chart-grid">
                  <span /><span /><span /><span /><span /><span />
                </div>
                <div className="usp-customize-chart-bars">
                  {[70, 85, 75, 95].map((h, i) => (
                    <div key={i} className="usp-customize-bar">
                      <div className="usp-customize-bar-stack" style={{ height: `${h}%` }}>
                        <span style={{ background: 'var(--color-bg-fill-support-orange-solid)', flex: 1 }} />
                        <span style={{ background: 'var(--color-bg-fill-support-green-solid)', flex: 1.2 }} />
                        <span style={{ background: 'var(--color-bg-fill-support-blue-solid)', flex: 1.5 }} />
                        <span style={{ background: 'var(--color-bg-fill-neutral-solid-default)', flex: 0.8 }} />
                        <span style={{ background: 'var(--color-bg-fill-support-pink-solid)', flex: 2.5 }} />
                      </div>
                    </div>
                  ))}
                </div>
                {/* X-axis labels aligned under bars */}
                <div className="usp-customize-chart-labels text-body-small">
                  <span>Q1</span><span>Q2</span><span>Q3</span>
                  <span><Badge label="Q4" color="neutral" variant="solid" size="s" dot={false} /></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: buttons (row) + components */}
        <div className="usp-customize-preview-right">
          <div className="usp-customize-preview-buttons">
            <Button variant="secondary" size="m" icon={<Settings01 size={20} />}>Settings</Button>
            <Button variant="primary" size="m" icon={<PlusCircle size={20} />}>New Request</Button>
          </div>
          <span className="text-body-base" style={{ color: 'var(--color-content-neutral-primary)' }}>Theme</span>
          <SelectField options={[{ value: 'zen', label: 'Select Zen theme' }]} placeholder="Select Zen theme" size="m" />
          <div className="usp-customize-preview-tags">
            <Badge label="Badge" color="accent" variant="solid" size="m" dot />
            <Tag label="Color" removable color="accent" />
            <Checkbox label="Customization" defaultChecked />
          </div>
          <InlineMessage theme="negative" title="Inline Message" />
        </div>
      </div>
    </div>
  );
}

/* ── USP Card component ── */

function UspCard({ className, icon, title, subtitle, children }: {
  className?: string;
  icon: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`home-usp-card ${className ?? ''}`}>
      <div className="home-usp-card-header">
        <img className="home-usp-card-icon" src={`/home/${icon}`} alt="" />
        <div className="home-usp-card-text">
          <h3 className="text-h3">{title}</h3>
          <p className="text-body-base home-usp-card-subtitle">{subtitle}</p>
        </div>
      </div>
      <div className="home-usp-card-slot">
        {children}
      </div>
    </div>
  );
}

const ABOUT_TITLE =
  "The world's most advanced Figma UI kit and React UI library. Meticulously crafted with everything you need to design and develop modern UI.";

export function HomePage() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);       // sunray float wrapper
  const heroSectionRef = useRef<HTMLElement>(null);   // hero section for text animations
  const aboutRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const showcaseTitleRef = useRef<HTMLHeadingElement>(null);
  const contributorsRef = useRef<HTMLDivElement>(null);
  const contributorsTitleRef = useRef<HTMLHeadingElement>(null);
  const cardGridRef = useRef<HTMLDivElement>(null);

  // Generic IO: add .is-visible to elements when they enter viewport
  useEffect(() => {
    const targets = [
      { el: showcaseRef.current, cls: 'is-visible' },
      { el: contributorsRef.current, cls: 'is-visible' },
    ].filter((t) => t.el);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -20% 0px', threshold: 0 },
    );
    targets.forEach((t) => io.observe(t.el!));

    // Cards: stagger each card, trigger when 20% from bottom of viewport
    const cards = cardGridRef.current?.children;
    if (cards) {
      const cardIO = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add('is-card-visible');
              cardIO.unobserve(entry.target);
            }
          }
        },
        { rootMargin: '0px 0px -15% 0px', threshold: 0 },
      );
      Array.from(cards).forEach((card) => cardIO.observe(card));
      return () => { io.disconnect(); cardIO.disconnect(); };
    }
    return () => io.disconnect();
  }, []);

  // Lenis smooth scroll — only on home page, cleanup on unmount
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,        // slower smooth (default 1.2)
      wheelMultiplier: 0.8, // reduce wheel speed
    });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Hero: sunray appears once (staggered), then content reveals
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    // Compute initial offset so sunray appears at hero position
    const heroSunrayDesiredTop = 192.8;
    const sunNaturalTop = heroEl.getBoundingClientRect().top + window.scrollY;
    const offset = sunNaturalTop - heroSunrayDesiredTop;
    heroEl.style.setProperty('--hero-start-offset', `${offset}px`);

    // Start sunray staggered appear
    heroEl.classList.add('is-sun-animating');

    const t = setTimeout(() => {
      heroEl.classList.add('is-hero-visible');
      // Also trigger hero section text reveal
      heroSectionRef.current?.classList.add('is-hero-visible');
    }, 1200);

    return () => clearTimeout(t);
  }, []);

  // Scroll-linked: hero sunray drop + section 2 sunray appear
  useEffect(() => {
    const heroEl = heroRef.current;
    const aboutEl = aboutRef.current;
    if (!heroEl || !aboutEl) return;
    let raf = 0;

    // Stagger ranges for hero sunray drop — layer 8 (smallest) drops first
    const dropRanges: Array<[number, number]> = [
      [0.50, 0.90], // layer 1 (ring) — drops last
      [0.42, 0.82], // layer 2
      [0.34, 0.74], // layer 3
      [0.26, 0.66], // layer 4
      [0.18, 0.58], // layer 5
      [0.10, 0.50], // layer 6
      [0.04, 0.44], // layer 7
      [0.00, 0.38], // layer 8 (smallest) — drops first
    ];

    const update = () => {
      raf = 0;
      const aboutRect = aboutEl.getBoundingClientRect();
      const vh = window.innerHeight;

      // Hero sunray drop progress:
      // 0 when about section is fully below viewport
      // 1 when about section top reaches viewport center
      const dropStart = vh * 1.0;
      const dropEnd = vh * 0.5;
      const dropProgress = clamp((dropStart - aboutRect.top) / (dropStart - dropEnd), 0, 1);

      // Compute offset: sunray starts at hero position (negative translateY from about),
      // then drops to 0 (its natural position in about section).
      // heroEl IS the sunray container inside about section.
      const sunRect = heroEl.getBoundingClientRect();
      const heroSunrayTop = 192.8;
      const startOffset = sunRect.top - heroSunrayTop;
      heroEl.style.setProperty('--hero-start-offset', `${startOffset}px`);

      // Set per-layer drop CSS vars on hero
      for (let i = 0; i < dropRanges.length; i++) {
        const [s, e] = dropRanges[i];
        const drop = clamp((dropProgress - s) / (e - s), 0, 1);
        heroEl.style.setProperty(`--hero-drop-${i + 1}`, String(drop));
      }
    };

    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Auto-split about title into lines + reveal
  useEffect(() => {
    const titleEl = titleRef.current;
    const aboutEl = aboutRef.current;
    if (!titleEl || !aboutEl) return;

    const splitIntoLines = () => splitTextIntoLines(titleEl, ABOUT_TITLE, 'home-about-title-line', 'home-about-title-line-inner');

    const doSplit = () => requestAnimationFrame(() => splitIntoLines());
    if (document.fonts?.ready) {
      document.fonts.ready.then(doSplit);
    } else {
      doSplit();
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) { aboutEl.classList.add('is-text-visible'); io.disconnect(); }
        }
      },
      { threshold: 0.2 },
    );
    io.observe(aboutEl);

    const onResize = () => {
      if (!aboutEl.classList.contains('is-text-visible')) splitIntoLines();
    };
    window.addEventListener('resize', onResize);
    return () => { io.disconnect(); window.removeEventListener('resize', onResize); };
  }, []);

  // Footer sunray — simple rise animation when footer enters viewport
  useEffect(() => {
    const footerEl = footerRef.current;
    if (!footerEl) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            footerEl.classList.add('is-footer-visible');
            io.disconnect();
          }
        }
      },
      { threshold: 0.1 },
    );
    io.observe(footerEl);
    return () => io.disconnect();
  }, []);

  // Showcase + Contributors title — line-by-line curtain reveal (like about title)
  useEffect(() => {
    const entries: Array<{ el: HTMLElement | null; parent: HTMLElement | null; text: string }> = [
      { el: showcaseTitleRef.current, parent: showcaseRef.current, text: 'The ultimate Design System' },
      { el: contributorsTitleRef.current, parent: contributorsRef.current, text: 'Human Contributors' },
    ];

    const doSplit = () => requestAnimationFrame(() => {
      for (const { el } of entries) {
        if (!el) continue;
        splitTextIntoLines(el, el.textContent ?? '', 'home-section-title-line', 'home-section-title-line-inner');
      }
    });

    if (document.fonts?.ready) {
      document.fonts.ready.then(doSplit);
    } else {
      doSplit();
    }
  }, []);

  return (
    <div className="home-page is-js">
      <section ref={heroSectionRef} className="home-hero">
        {/* Horse (flipped) — left side */}
        <img
          className="home-hero-horse"
          src="/home/leaves.webp"
          alt=""
          aria-hidden="true"
        />

        {/* Title — right side, large */}
        <h1 className="home-hero-title">
          <span className="home-hero-title-line"><span className="home-hero-title-line-inner" style={{ ['--line-index' as string]: 0 }}>IUAI</span></span>
          <span className="home-hero-title-line"><span className="home-hero-title-line-inner" style={{ ['--line-index' as string]: 1 }}>Design</span></span>
          <span className="home-hero-title-line"><span className="home-hero-title-line-inner" style={{ ['--line-index' as string]: 2 }}>System</span></span>
        </h1>

        {/* Subtitle — left side, below horse */}
        <div className="home-hero-subtitle text-h4">
          <span className="home-hero-title-line"><span className="home-hero-title-line-inner" style={{ ['--line-index' as string]: 0 }}>We bring you the ultimate Figma UI kit and React component library.</span></span>
          <span className="home-hero-title-line"><span className="home-hero-title-line-inner" style={{ ['--line-index' as string]: 1 }}>Empowers you to build beautiful and user friendly interfaces quickly and efficiently.</span></span>
        </div>

        {/* Meta — left side, below subtitle */}
        <div className="home-hero-meta text-capsline-m">
          <span className="home-hero-title-line"><span className="home-hero-title-line-inner" style={{ ['--line-index' as string]: 0 }}>VNG GAMES</span></span>
          <span className="home-hero-title-line"><span className="home-hero-title-line-inner" style={{ ['--line-index' as string]: 1 }}>GPP</span></span>
          <span className="home-hero-title-line"><span className="home-hero-title-line-inner" style={{ ['--line-index' as string]: 2 }}>2026</span></span>
        </div>
      </section>

      {/* ── Section 2 — About UIAI ── */}
      <section ref={aboutRef} className="home-about">
        {/* Sunray — inside about section, z-index between video(1) and content(3) */}
        <div ref={heroRef} className="home-about-sunray" aria-hidden="true">
          <img className="home-hero-sun-layer" style={{ ['--layer-index' as string]: 0 }} src="/home/Sunray01.webp" alt="" />
          <img className="home-hero-sun-layer" style={{ ['--layer-index' as string]: 1 }} src="/home/Sunray02.webp" alt="" />
          <img className="home-hero-sun-layer" style={{ ['--layer-index' as string]: 2 }} src="/home/Sunray03.webp" alt="" />
          <img className="home-hero-sun-layer" style={{ ['--layer-index' as string]: 3 }} src="/home/Sunray04.webp" alt="" />
          <img className="home-hero-sun-layer" style={{ ['--layer-index' as string]: 4 }} src="/home/Sunray05.webp" alt="" />
          <img className="home-hero-sun-layer" style={{ ['--layer-index' as string]: 5 }} src="/home/Sunray06.webp" alt="" />
          <img className="home-hero-sun-layer" style={{ ['--layer-index' as string]: 6 }} src="/home/Sunray07.webp" alt="" />
          <img className="home-hero-sun-layer" style={{ ['--layer-index' as string]: 7 }} src="/home/Sunray08.webp" alt="" />
        </div>

        {/* Video background */}
        <div className="home-about-video-wrap">
          <video
            className="home-about-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/home/grass-poster.jpg"
            aria-hidden="true"
          >
            <source src="/home/grass.mp4" type="video/mp4" />
          </video>
          <div className="home-about-noise" aria-hidden="true" />
        </div>

        {/* Content block */}
        <div className="home-about-content">
          <div className="home-about-text">
            <p className="text-body-extra home-about-label">
              About UIAI &lt;3
            </p>
            <h2 ref={titleRef} className="text-display-3 home-about-title">
              {ABOUT_TITLE}
            </h2>
          </div>
          <div className="home-about-cta">
            <Button variant="primary" size="xl" icon={<Figma size={28} />} onClick={() => window.open('https://www.figma.com', '_blank')}>
              Download Figma
            </Button>
            <Button variant="tertiary" size="xl" icon={<Hexagon02 size={28} />} onClick={() => navigate('/docs/components')}>
              View components
            </Button>
          </div>
        </div>
      </section>

      {/* ── Section 3 — The ultimate Design System ── */}
      <section className="home-showcase">
        {/* Noise pattern overlay */}
        <div className="home-showcase-noise" aria-hidden="true" />

        {/* Mockup image */}
        <div className="home-showcase-mockup">
          <img src="/home/mokup.webp" alt="Component showcase" />
        </div>

        {/* Text block */}
        <div ref={showcaseRef} className="home-showcase-text">
          <p className="text-body-extra home-showcase-label">
            Why You Should Care
          </p>
          <h2 ref={showcaseTitleRef} className="text-display-3">The ultimate Design System</h2>
          <p className="text-subheading home-showcase-subtitle">
            IUAI is the world's largest Figma UI kit and design system. It contains our project, easy customization, and a massive collection of components.
          </p>
        </div>

        {/* USP Cards Grid */}
        <div ref={cardGridRef} className="home-usp-grid">
          {/* Row 1: 2 cards (6+6) */}
          <UspCard className="home-usp-card-6" icon="Type=Dark theme.png" title="Dark theme" subtitle="Your retinas called — they want a break. Just turn off the light. It smooth, easy-on-the-eyes UI that looks stunning at 2 AM.">
            <DarkThemeSlot />
          </UspCard>
          <UspCard className="home-usp-card-6" icon="Type=Token.png" title="4-Tier Token Architecture" subtitle="Change one value, watch it ripple across your entire system like magic. No more &quot;wait, which blue is this?&quot; moments.">
            <img src="/home/USP Token.webp" alt="Token architecture" />
          </UspCard>

          {/* Row 2: 2 cards (5+7) */}
          <UspCard className="home-usp-card-5" icon="Type=Component 2.png" title="2000+ variants" subtitle="Every component comes with states, sizes, and variants so you never start from scratch again.">
            <img src="/home/USP Components.webp" alt="Component variants" />
          </UspCard>
          <UspCard className="home-usp-card-7" icon="Type=Customize.png" title="Customize your milk tea" subtitle="Swap themes like swap your ex. Light, dark, rounded, sharp — pick a vibe and IUAI adapts instantly. Your brand, your rules. We just make it ridiculously easy.">
            <CustomizeSlot />
          </UspCard>

          {/* Row 3: 3 cards (4+4+4) */}
          <UspCard className="home-usp-card-4" icon="Type=Figma.png" title="Figma ↔ Code 1:1" subtitle="Because it coded by the designer">
            <div className="usp-figma-slot">
              <img className="usp-figma-slot-img" src="/home/USP Figma Code.webp" alt="Figma to code" />
              {/* CLI window — overlaps bottom of slot */}
              <div className="usp-figma-cli">
                <div className="usp-figma-cli-header">
                  <span className="usp-figma-cli-dot" style={{ background: '#FF5F57' }} />
                  <span className="usp-figma-cli-dot" style={{ background: '#FEBC2E' }} />
                  <span className="usp-figma-cli-dot" style={{ background: '#28C840' }} />
                </div>
                <pre className="usp-figma-cli-code" dangerouslySetInnerHTML={{
                  __html:
                    `<span class="cl-ln">1</span>  <span class="cl-kw">import</span> { <span class="cl-val">Button</span> } <span class="cl-kw">from</span> <span class="cl-str">'@zen/components'</span>;
<span class="cl-ln">2</span>  <span class="cl-kw">import</span> { <span class="cl-val">Plus</span> } <span class="cl-kw">from</span> <span class="cl-str">'@zen/icons/line'</span>;
<span class="cl-ln">3</span>
<span class="cl-ln">4</span>  &lt;<span class="cl-fn">Button</span>
<span class="cl-ln">5</span>    <span class="cl-prop">variant</span>=<span class="cl-str">"primary"</span>
<span class="cl-ln">6</span>    <span class="cl-prop">size</span>=<span class="cl-str">"m"</span>
<span class="cl-ln">7</span>    <span class="cl-prop">icon</span>={&lt;<span class="cl-fn">Plus</span> <span class="cl-prop">size</span>={<span class="cl-val">20</span>} /&gt;}
<span class="cl-ln">8</span>  &gt;
<span class="cl-ln">9</span>    New Request
<span class="cl-ln">10</span> &lt;/<span class="cl-fn">Button</span>&gt;` }} />
              </div>
            </div>
          </UspCard>
          <UspCard className="home-usp-card-4" icon="Type=Icon.png" title="1,700 Icons — 3 Styles" subtitle="To much Redbull to get this shit done">
            <IconsSlot />
          </UspCard>
          <UspCard className="home-usp-card-4" icon="Type=Plugin.png" title="Plugin included" subtitle="In the future, but we promise">
            <img src="/home/USP Plug in.webp" alt="Plugin preview" />
          </UspCard>
        </div>
      </section>

      {/* ── Section 4 — Human Contributors ── */}
      <section className="home-contributors">
        <div ref={contributorsRef} className="home-contributors-content">
          <p className="text-body-extra home-contributors-label">Behind the AI</p>
          <h2 ref={contributorsTitleRef} className="text-display-2">Human Contributors</h2>
          <p className="text-subheading home-contributors-subtitle">
            That's 100% handcrafted. Real designers debating border radius. Real developers arguing about naming conventions. You know, the fun stuff.
          </p>
        </div>

        <div className="home-contributors-grid">
          {[
            { name: 'Thiên. Trương Vĩ', handle: 'thientv', frame: 'Frame 1.webp', avatar: 'Thien.webp' },
            { name: 'Nhân. Lê Đức', handle: 'nhanld', frame: 'Frame 2.webp', avatar: 'Nhan.webp' },
            { name: 'Vy. Trần Thanh', handle: 'vytt4', frame: 'Frame 3.webp', avatar: 'Vy.webp' },
          ].map((person) => (
            <div key={person.handle} className="home-contributor">
              <div className="home-contributor-frame">
                <img className="home-contributor-frame-img" src={`/home/${person.frame}`} alt="" />
                <div className="home-contributor-avatar">
                  <img src={`/home/${person.avatar}`} alt={person.name} />
                </div>
              </div>
              <h3 className="text-h3">{person.name}</h3>
              <p className="text-body-extra home-contributor-handle">{person.handle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer — 3 layers: bg + sunray + foreground grass ── */}
      <footer ref={footerRef} className="home-footer">
        <img className="home-footer-bg" src="/home/Footer back.webp" alt="" aria-hidden="true" />
        <div className="home-footer-sunray" aria-hidden="true">
          <img src="/home/Sunray01.webp" alt="" />
          <img src="/home/Sunray02.webp" alt="" />
          <img src="/home/Sunray03.webp" alt="" />
          <img src="/home/Sunray04.webp" alt="" />
          <img src="/home/Sunray05.webp" alt="" />
          <img src="/home/Sunray06.webp" alt="" />
          <img src="/home/Sunray07.webp" alt="" />
          <img src="/home/Sunray08.webp" alt="" />
        </div>
        <img className="home-footer-front" src="/home/Footer Front.webp" alt="" aria-hidden="true" />
      </footer>
    </div>
  );
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}