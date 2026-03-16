import { type HTMLAttributes } from 'react';
import styles from './Rating.module.css';

export type OpinionValue = 'very-disappointed' | 'disappointed' | 'neutral' | 'happy' | 'very-happy';

const OPINIONS_5: { value: OpinionValue; emoji: string; label: string }[] = [
  { value: 'very-disappointed', emoji: '😡', label: 'Very Disappointed' },
  { value: 'disappointed',      emoji: '🙁', label: 'Disappointed' },
  { value: 'neutral',           emoji: '😐', label: 'Neutral' },
  { value: 'happy',             emoji: '😊', label: 'Happy' },
  { value: 'very-happy',        emoji: '😍', label: 'Very Happy' },
];

const OPINIONS_3 = OPINIONS_5.slice(1, 4); // disappointed, neutral, happy
const OPINIONS_2 = [OPINIONS_5[1], OPINIONS_5[3]]; // disappointed, happy

export interface RatingOpinionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Currently selected value */
  value?: OpinionValue;
  /** Called when an option is selected */
  onChange?: (value: OpinionValue) => void;
  /** Number of opinion options */
  scale?: 2 | 3 | 5;
}

export function RatingOpinion({
  value,
  onChange,
  scale = 5,
  className,
  ...rest
}: RatingOpinionProps) {
  const options = scale === 5 ? OPINIONS_5 : scale === 3 ? OPINIONS_3 : OPINIONS_2;

  return (
    <div className={[styles['opinion-root'], className ?? ''].filter(Boolean).join(' ')} {...rest}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className={[
            styles['opinion-item'],
            value === opt.value ? styles['opinion-item-selected'] : '',
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={() => onChange?.(opt.value)}
        >
          <span className={styles['opinion-emoji']}>{opt.emoji}</span>
          <span className={styles['opinion-label']}>{opt.label}</span>
        </button>
      ))}
    </div>
  );
}

RatingOpinion.displayName = 'RatingOpinion';
