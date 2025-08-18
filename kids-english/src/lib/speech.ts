export function speak(text: string) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = 0.9;
  synth.cancel();
  synth.speak(utter);
}

export function canRecognize() {
  return 'webkitSpeechRecognition' in window;
}

export function recognize(expected: string): Promise<string> {
  return new Promise((resolve) => {
    const Rec: any = (window as any).webkitSpeechRecognition;
    const rec = new Rec();
    rec.lang = 'en-US';
    rec.onresult = (e: any) => {
      const text = e.results[0][0].transcript.toLowerCase();
      resolve(text);
    };
    rec.onerror = () => resolve('');
    rec.onend = () => resolve('');
    rec.start();
    setTimeout(() => rec.stop(), 5000);
  });
}
