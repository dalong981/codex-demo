import { canRecognize, recognize } from '../lib/speech';
import { useState } from 'react';

export default function RepeatAfterMe({ text, onDone }: { text: string; onDone: (stars: number) => void }) {
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  async function handle() {
    if (!canRecognize()) {
      onDone(1);
      setResult('done');
      return;
    }
    setRunning(true);
    const heard = await recognize(text);
    setRunning(false);
    const ok = heard.includes(text.toLowerCase());
    onDone(ok ? 3 : 1);
    setResult(heard);
  }

  return (
    <div className="mt-2">
      <button
        onClick={handle}
        disabled={running}
        className="bg-green-500 text-white px-4 py-2 rounded"
        aria-label="repeat after me"
      >
        {running ? '...' : '🔁'}
      </button>
      {result && <span className="ml-2 text-sm">{result}</span>}
    </div>
  );
}
