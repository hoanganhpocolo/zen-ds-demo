import { useState, useEffect } from 'react';
import { SidebarItem } from '@zen/components';
import styles from './OnThisPage.module.css';

interface TocItem {
  id: string;
  label: string;
}

interface OnThisPageProps {
  /** Pass the current page key to trigger a re-scan on navigation */
  page: string;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function OnThisPage({ page }: OnThisPageProps) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState('');

  // Scan headings after each page navigation
  useEffect(() => {
    const timer = setTimeout(() => {
      const headings = document.querySelectorAll<HTMLElement>('.docs-section-title');
      const tocItems: TocItem[] = [];

      headings.forEach((el) => {
        const text = el.textContent?.trim() || '';
        if (!text) return;
        const id = slugify(text);
        el.id = id;
        tocItems.push({ id, label: text });
      });

      setItems(tocItems);
      setActiveId(tocItems[0]?.id || '');
    }, 60);

    return () => clearTimeout(timer);
  }, [page]);

  // Track active heading via IntersectionObserver
  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the topmost intersecting heading
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-10% 0px -75% 0px', threshold: 0 },
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return <aside className={styles.aside} />;

  return (
    <aside className={styles.aside}>
      <div className={styles.inner}>
        <p className={`${styles.title} text-capsline-s`}>On this page</p>
        <nav className={styles.nav}>
          {items.map((item) => (
            <SidebarItem
              key={item.id}
              label={item.label}
              selected={activeId === item.id}
              level="child"
              onClick={() => {
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setActiveId(item.id);
              }}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
}
