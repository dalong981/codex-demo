import { loadProgress } from '../lib/progress';

export default function Progress() {
  const p = loadProgress();
  const days = Object.keys(p.completed).sort();
  const totalStars = Object.values(p.stars).reduce((a, b) => a + b, 0);
  return (
    <div>
      <h1 className="text-2xl mb-4">Progress</h1>
      <p className="mb-2">Streak: {p.streak}</p>
      <p className="mb-4">Stars: {totalStars}</p>
      <ul>
        {days.map((d) => (
          <li key={d}>{d} {p.completed[d] ? '✅' : ''} ⭐{p.stars[d] || 0}</li>
        ))}
      </ul>
    </div>
  );
}
