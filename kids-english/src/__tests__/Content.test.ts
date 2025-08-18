import { loadLesson } from '../lib/content';
import fs from 'fs';
import path from 'path';

global.fetch = async (url: RequestInfo) => {
  const p = path.resolve(__dirname, '../../public', url.toString().replace('/kids-english/', ''));
  const text = fs.readFileSync(p, 'utf-8');
  return new Response(text, { status: 200 });
};

it('loads lesson json', async () => {
  const lesson = await loadLesson('2025-08-18');
  expect(lesson.topic).toBe('At the Park');
});
