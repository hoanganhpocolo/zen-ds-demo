import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@zen/components';
import { Hexagon02 } from '@zen/icons/line';
import { Figma } from '@zen/icons/social';
import './home-page.css';

const ABOUT_TITLE =
  "The world's most advanced Figma UI kit and React UI library. Meticulously crafted with everything you need to design and develop modern UI.";

export function HomePage() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Hero reveal — trigger on mount (hero is always visible on load)
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;
    // Small delay so the browser has time to lay out before we kick off
    const t = setTimeout(() => {
      heroEl.classList.add('is-hero-visible');
    }, 100);
    return () => clearTimeout(t);
  }, []);

  // Scroll-linked sunray animation
  useEffect(() => {
    const aboutEl = aboutRef.current;
    if (!aboutEl) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = aboutEl.getBoundingClientRect();
      const start = window.innerHeight * 0.6;
      const end = -window.innerHeight * 0.1;
      const progress = clamp((start - rect.top) / (start - end), 0, 1);
      aboutEl.style.setProperty('--sun-progress', String(progress));
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Auto-split title into lines + reveal when section enters viewport
  useEffect(() => {
    const titleEl = titleRef.current;
    const aboutEl = aboutRef.current;
    if (!titleEl || !aboutEl) return;

    // Split into word spans, measure offsetTop to group into lines
    const splitIntoLines = () => {
      titleEl.innerHTML = '';
      const words = ABOUT_TITLE.split(' ');
      const wordEls: HTMLSpanElement[] = [];
      for (const w of words) {
        const wrap = document.createElement('span');
        wrap.className = 'home-about-title-word';
        wrap.textContent = w;
        titleEl.appendChild(wrap);
        titleEl.appendChild(document.createTextNode(' '));
        wordEls.push(wrap);
      }

      // Group consecutive words sharing same offsetTop into one line
      const lines: string[][] = [];
      let currentLine: string[] = [];
      let lastTop = -1;
      for (const el of wordEls) {
        const top = el.offsetTop;
        if (top !== lastTop && currentLine.length > 0) {
          lines.push(currentLine);
          currentLine = [];
        }
        currentLine.push(el.textContent ?? '');
        lastTop = top;
      }
      if (currentLine.length > 0) lines.push(currentLine);

      // Rebuild DOM: each line is a <span class="line"><span class="line-inner">
      titleEl.innerHTML = '';
      lines.forEach((wordsInLine, i) => {
        const line = document.createElement('span');
        line.className = 'home-about-title-line';
        const inner = document.createElement('span');
        inner.className = 'home-about-title-line-inner';
        inner.textContent = wordsInLine.join(' ');
        inner.style.setProperty('--line-index', String(i));
        line.appendChild(inner);
        titleEl.appendChild(line);
      });
    };

    splitIntoLines();

    // Trigger reveal once when section enters viewport
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            aboutEl.classList.add('is-text-visible');
            io.disconnect();
          }
        }
      },
      { threshold: 0.2 },
    );
    io.observe(aboutEl);

    // Re-split on resize (once, before reveal)
    const onResize = () => {
      if (!aboutEl.classList.contains('is-text-visible')) splitIntoLines();
    };
    window.addEventListener('resize', onResize);
    return () => {
      io.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="home-page">
      {/* ── Hero ── */}
      <section ref={heroRef} className="home-hero">
        {/* Background layers */}
        <div className="home-hero-bg" aria-hidden="true">
          <div className="home-hero-bg-solid" />
          <div className="home-hero-bg-noise home-hero-bg-noise-1" />
        </div>

        {/* Decorative horse */}
        <img
          className="home-hero-horse"
          src="/home/Horse.svg"
          alt=""
          aria-hidden="true"
        />

        {/* Sunray graphic — fades out as user scrolls toward section 2 */}
        <img
          className="home-hero-sunray"
          src="/home/Sunray.svg"
          alt=""
          aria-hidden="true"
        />

        {/* Noise overlay */}
        <div className="home-hero-noise-overlay" aria-hidden="true" />

        {/* Headline — 3 lines with curtain reveal */}
        <h1 className="home-hero-title text-display-1">
          <span className="home-hero-title-line"><span className="home-hero-title-line-inner" style={{ ['--line-index' as string]: 0 }}>IUAI</span></span>
          <span className="home-hero-title-line"><span className="home-hero-title-line-inner" style={{ ['--line-index' as string]: 1 }}>Design</span></span>
          <span className="home-hero-title-line"><span className="home-hero-title-line-inner" style={{ ['--line-index' as string]: 2 }}>System</span></span>
        </h1>

        {/* Subtitle */}
        <p className="home-hero-subtitle text-h4">
          Empowers you to build beautiful and user-friendly interfaces quickly and efficiently.
        </p>

        {/* Bottom-right meta */}
        <div className="home-hero-meta text-capsline-m">
          <span>VNG GAMES</span>
          <span>GPP</span>
          <span>2026</span>
        </div>
      </section>

      {/* ── Section 2 — About UIAI ── */}
      <section ref={aboutRef} className="home-about">
        {/* Video background — full viewport width */}
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

        {/* Sun rays — 8 stacked PNG layers, scroll-linked reveal */}
        <div className="home-sun" aria-hidden="true">
          <img className="home-sun-layer home-sun-layer-1" src="/home/Sunray01.png" alt="" />
          <img className="home-sun-layer home-sun-layer-2" src="/home/Sunray02.png" alt="" />
          <img className="home-sun-layer home-sun-layer-3" src="/home/Sunray03.png" alt="" />
          <img className="home-sun-layer home-sun-layer-4" src="/home/Sunray04.png" alt="" />
          <img className="home-sun-layer home-sun-layer-5" src="/home/Sunray05.png" alt="" />
          <img className="home-sun-layer home-sun-layer-6" src="/home/Sunray06.png" alt="" />
          <img className="home-sun-layer home-sun-layer-7" src="/home/Sunray07.png" alt="" />
          <img className="home-sun-layer home-sun-layer-8" src="/home/Sunray08.png" alt="" />
        </div>

        {/* Content block: text + buttons, gap 32px per Figma */}
        <div className="home-about-content">
          <div className="home-about-text">
            <p className="text-body-extra home-about-label" style={{ color: '#F05A22', fontWeight: 'var(--font-weight-primary)' }}>
              About UIAI &lt;3
            </p>
            <h2 ref={titleRef} className="text-display-3 home-about-title">
              {ABOUT_TITLE}
            </h2>
          </div>

          <div className="home-about-cta">
            <Button
              variant="primary"
              size="xl"
              icon={<Figma size={28} />}
              onClick={() => window.open('https://www.figma.com', '_blank')}
            >
              Download Figma
            </Button>
            <Button
              variant="tertiary"
              size="xl"
              icon={<Hexagon02 size={28} />}
              onClick={() => navigate('/docs/components')}
            >
              View components
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}
