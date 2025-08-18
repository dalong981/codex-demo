import TTSButton from './TTSButton';
import RepeatAfterMe from './RepeatAfterMe';
import { useState } from 'react';

export default function StoryCard({ entry }: { entry: { image: string; en: string; cn: string } }) {
  const [stars, setStars] = useState(0);
  return (
    <div className="text-center">
      <img src={entry.image} alt={entry.en} className="mx-auto w-64 h-40 object-contain" />
      <p className="text-xl my-2">{entry.en}</p>
      <p className="text-gray-600 mb-2">{entry.cn}</p>
      <div className="flex justify-center space-x-2">
        <TTSButton text={entry.en} />
        <RepeatAfterMe text={entry.en} onDone={setStars} />
      </div>
      {stars > 0 && <p className="mt-2">{'⭐'.repeat(stars)}</p>}
    </div>
  );
}
