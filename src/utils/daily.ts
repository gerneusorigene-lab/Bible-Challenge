import { LEVELS, Level } from '../data/questions';

export function getTodayString(): string {
  return new Date().toISOString().split('T')[0];
}

export function getDailyLevel(): Level {
  const today = getTodayString();
  const [year, month, day] = today.split('-').map(Number);

  // Deterministic seed based on today's date
  const seed = year * 10000 + month * 100 + day;

  const difficulties: Level['difficulty'][] = [
    'Beginner',
    'Intermediate',
    'Advanced',
  ];

  // Rotate between Beginner, Intermediate, and Advanced each day
  const difficulty = difficulties[seed % difficulties.length];

  // Build today's question pool
  const pool = LEVELS.filter(
    (level) => level.difficulty === difficulty
  );

  // Deterministically select one question from that difficulty
  const questionIndex =
    Math.floor(seed / difficulties.length) % pool.length;

  return pool[questionIndex];
}