export const STORAGE_KEY = 'ke_progress_v1';

export interface Progress {
  streak: number;
  completed: Record<string, boolean>;
  stars: Record<string, number>;
}

export function loadProgress(): Progress {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) return JSON.parse(raw) as Progress;
  return { streak: 0, completed: {}, stars: {} };
}

export function saveProgress(p: Progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

export function completeDay(date: string, stars: number) {
  const p = loadProgress();
  const yesterday = new Date(date);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().slice(0, 10);
  const cont = p.completed[yesterdayStr];
  p.completed[date] = true;
  p.stars[date] = stars;
  p.streak = cont ? p.streak + 1 : 1;
  saveProgress(p);
  return p;
}
