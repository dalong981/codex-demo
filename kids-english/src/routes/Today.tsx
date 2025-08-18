import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadLesson, Lesson } from '../lib/content';
import StoryCard from '../components/StoryCard';
import QuizBlock from '../components/QuizBlock';
import { completeDay } from '../lib/progress';
import StreakBadge from '../components/StreakBadge';

export default function Today() {
  const params = useParams();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [idx, setIdx] = useState(0);
  const [done, setDone] = useState(false);

  const today = params.date || new Date().toISOString().slice(0, 10);

  useEffect(() => {
    loadLesson(today).then(setLesson).catch(() => setLesson(null));
  }, [today]);

  if (!lesson) return <p>Loading...</p>;

  const story = lesson.story[idx];

  return (
    <div>
      <StreakBadge />
      <h1 className="text-2xl mb-2">{lesson.topic}</h1>
      <StoryCard entry={{ ...story, image: `/kids-english/content/${lesson.date}/${story.image}` }} />
      <div className="flex justify-between mt-2">
        <button className="px-4 py-2" onClick={() => setIdx((idx - 1 + lesson.story.length) % lesson.story.length)}>Prev</button>
        <button className="px-4 py-2" onClick={() => setIdx((idx + 1) % lesson.story.length)}>Next</button>
      </div>
      <div className="mt-4">
        {lesson.quiz.map((q, i) => (
          <QuizBlock key={i} item={q} onScore={() => {}} />
        ))}
      </div>
      {!done && (
        <button
          className="mt-4 bg-purple-500 text-white px-4 py-2 rounded"
          onClick={() => { completeDay(lesson.date, 1); setDone(true); }}
        >
          I am done!
        </button>
      )}
      {done && <p className="mt-2">Good job!</p>}
    </div>
  );
}
