import { LEVELS, Level } from '../data/questions';

export function getTodayString(): string {
  return new Date().toISOString().split('T')[0]; // "2026-07-10"
}

export function getDailyLevel(): Level {
  const today = getTodayString();
  const [year, month, day] = today.split('-').map(Number);
  // Simple deterministic hash from date
  const seed = year * 10000 + month * 100 + day;
  return LEVELS[seed % LEVELS.length];
}
