/**
 * Time-of-day greeting helper.
 * Morning (5-11h) + Afternoon (12-16h) → Day icon
 * Evening (17-20h) + Night (21-4h) → Night icon
 */
export interface Greeting {
  text: string;
  icon: string;
}

export function useGreeting(): Greeting {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return { text: 'Good morning', icon: '/Day.png' };
  if (hour >= 12 && hour < 17) return { text: 'Good afternoon', icon: '/Day.png' };
  if (hour >= 17 && hour < 21) return { text: 'Good evening', icon: '/Night.png' };
  return { text: 'Good night', icon: '/Night.png' };
}
