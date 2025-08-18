import { speak } from '../lib/speech';

export default function TTSButton({ text }: { text: string }) {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
      aria-label="play pronunciation"
      onClick={() => speak(text)}
    >
      🔊
    </button>
  );
}
