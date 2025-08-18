import { completeDay, STORAGE_KEY } from '../lib/progress';

describe('progress', () => {
  beforeEach(() => localStorage.clear());
  it('marks day complete', () => {
    completeDay('2025-08-18', 1);
    const raw = localStorage.getItem(STORAGE_KEY)!;
    const data = JSON.parse(raw);
    expect(data.completed['2025-08-18']).toBe(true);
  });
});
