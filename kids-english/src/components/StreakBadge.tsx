import { loadProgress } from '../lib/progress';

export default function StreakBadge() {
  const p = loadProgress();
  const stars = Object.values(p.stars).reduce((a, b) => a + b, 0);
  return (
    <div className="mb-4">
      <span className="mr-4">🔥 {p.streak}</span>
      <span>⭐ {stars}</span>
    </div>
  );
}
