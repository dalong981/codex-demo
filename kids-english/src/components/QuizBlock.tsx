import { useState } from 'react';
import RepeatAfterMe from './RepeatAfterMe';

interface MCQuestion { type: 'mc'; q: string; options: string[]; answer: string }
interface RepeatQuestion { type: 'repeat'; text: string }

type QuizItem = MCQuestion | RepeatQuestion;

export default function QuizBlock({ item, onScore }: { item: QuizItem; onScore: (s: number) => void }) {
  const [done, setDone] = useState(false);
  if (item.type === 'mc') {
    return (
      <div className="my-4">
        <p>{item.q}</p>
        {item.options.map((o) => (
          <button
            key={o}
            className="block w-full my-1 border p-2 rounded"
            disabled={done}
            onClick={() => {
              setDone(true);
              onScore(o === item.answer ? 3 : 0);
            }}
          >
            {o}
          </button>
        ))}
      </div>
    );
  }
  return (
    <RepeatAfterMe text={item.text} onDone={(s) => { setDone(true); onScore(s); }} />
  );
}
