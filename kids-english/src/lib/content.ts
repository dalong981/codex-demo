export interface StoryEntry {
  image: string;
  en: string;
  cn: string;
}

export interface Lesson {
  date: string;
  topic: string;
  story: StoryEntry[];
  sentences_of_the_day: string[];
  keywords: { en: string; cn: string }[];
  quiz: any[];
}

export async function loadLesson(date: string): Promise<Lesson> {
  const res = await fetch(`/kids-english/content/${date}/lesson.json`);
  if (!res.ok) throw new Error('lesson not found');
  return res.json();
}

export interface LessonIndexEntry { date: string; topic: string }

export async function loadIndex(): Promise<LessonIndexEntry[]> {
  const res = await fetch('/kids-english/content/index.json');
  if (!res.ok) throw new Error('index not found');
  return res.json();
}
