import fs from 'fs';
import path from 'path';

const [date, topic] = process.argv.slice(2);
if (!date || !topic) {
  console.log('Usage: pnpm new:lesson YYYY-MM-DD "Topic"');
  process.exit(1);
}
const dir = path.join('public', 'content', date);
fs.mkdirSync(dir, { recursive: true });
for (let i = 1; i <= 3; i++) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150">\n  <rect width="200" height="150" fill="#e5e7eb"/>\n  <text x="100" y="75" font-size="20" text-anchor="middle" fill="#000">Image ${i}</text>\n</svg>`;
  fs.writeFileSync(path.join(dir, `${i}.svg`), svg);
}
const lesson = {
  date,
  topic,
  story: [1,2,3].map(i => ({ image: `${i}.svg`, en: `Sentence ${i}.`, cn: `中文句子${i}` })),
  sentences_of_the_day: ["Sentence 1.", "Sentence 2.", "Sentence 3."],
  keywords: [],
  quiz: []
};
fs.writeFileSync(path.join(dir, 'lesson.json'), JSON.stringify(lesson, null, 2));
const indexPath = path.join('public','content','index.json');
const index = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
index.push({ date, topic });
fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
console.log('Created lesson', date);
