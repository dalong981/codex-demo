import { useEffect, useState } from 'react';
import { loadIndex, LessonIndexEntry } from '../lib/content';
import { Link } from 'react-router-dom';

export default function Library() {
  const [list, setList] = useState<LessonIndexEntry[]>([]);
  useEffect(() => {
    loadIndex().then(setList);
  }, []);
  return (
    <div>
      <h1 className="text-2xl mb-4">Library</h1>
      <ul>
        {list.map((l) => (
          <li key={l.date} className="my-2">
            <Link className="text-blue-600" to={`/lesson/${l.date}`}>{l.date} - {l.topic}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
