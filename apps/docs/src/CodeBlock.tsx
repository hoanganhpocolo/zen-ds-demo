import { useState, useCallback } from 'react';
import styles from './CodeBlock.module.css';

// ── Tokenizer ──────────────────────────────────────────────────────────────

type TType = 'kw' | 'str' | 'cmt' | 'tag' | 'num' | 'punc' | 'plain';

interface Token { type: TType; value: string; }

const KEYWORDS = new Set([
  'import','export','from','function','const','let','var','return',
  'type','interface','extends','implements','class','new','this',
  'if','else','for','while','do','switch','case','break','continue',
  'default','async','await','try','catch','finally','throw',
  'typeof','instanceof','in','of','void','null','undefined','true','false',
  'useState','useEffect','useCallback','useRef','useMemo',
]);

function tokenize(src: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;

  function eat(type: TType, len: number) {
    tokens.push({ type, value: src.slice(i, i + len) });
    i += len;
  }

  while (i < src.length) {
    const c = src[i];

    // Line comment
    if (c === '/' && src[i + 1] === '/') {
      const end = src.indexOf('\n', i);
      const len = end === -1 ? src.length - i : end - i;
      eat('cmt', len); continue;
    }

    // Block comment
    if (c === '/' && src[i + 1] === '*') {
      const end = src.indexOf('*/', i + 2);
      eat('cmt', end === -1 ? src.length - i : end - i + 2); continue;
    }

    // Template literal
    if (c === '`') {
      let j = i + 1;
      while (j < src.length && src[j] !== '`') {
        if (src[j] === '\\') j++;
        j++;
      }
      eat('str', j - i + 1); continue;
    }

    // String
    if (c === '"' || c === "'") {
      let j = i + 1;
      while (j < src.length && src[j] !== c) {
        if (src[j] === '\\') j++;
        j++;
      }
      eat('str', j - i + 1); continue;
    }

    // JSX opening/closing tag name
    if (c === '<' && /[a-zA-Z/]/.test(src[i + 1] ?? '')) {
      let j = i + 1;
      if (src[j] === '/') j++;
      while (j < src.length && /[a-zA-Z0-9_.$]/.test(src[j])) j++;
      eat('tag', j - i); continue;
    }

    // Number
    if (/[0-9]/.test(c)) {
      let j = i;
      while (j < src.length && /[0-9.]/.test(src[j])) j++;
      eat('num', j - i); continue;
    }

    // Identifier / keyword
    if (/[a-zA-Z_$]/.test(c)) {
      let j = i;
      while (j < src.length && /[a-zA-Z0-9_$]/.test(src[j])) j++;
      const word = src.slice(i, j);
      tokens.push({ type: KEYWORDS.has(word) ? 'kw' : 'plain', value: word });
      i = j; continue;
    }

    // Whitespace (preserve as plain)
    if (/\s/.test(c)) {
      let j = i;
      while (j < src.length && /[ \t]/.test(src[j])) j++;
      if (src[j] === '\n' || j === i) {
        tokens.push({ type: 'plain', value: src[i] });
        i++; continue;
      }
      tokens.push({ type: 'plain', value: src.slice(i, j) });
      i = j; continue;
    }

    // Punctuation
    eat('punc', 1);
  }

  return tokens;
}

// ── Component ──────────────────────────────────────────────────────────────

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code.trim()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }, [code]);

  const tokens = tokenize(code.trim());

  return (
    <div className={styles.root}>
      <div className={styles.toolbar}>
        <span className={styles.lang}>{language}</span>
        <button className={styles.copy} onClick={handleCopy}>
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className={styles.pre}>
        <code>
          {tokens.map((tok, idx) => {
            if (tok.type === 'plain') return tok.value;
            return <span key={idx} className={styles[tok.type]}>{tok.value}</span>;
          })}
        </code>
      </pre>
    </div>
  );
}
