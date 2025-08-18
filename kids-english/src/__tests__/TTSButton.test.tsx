import { render, fireEvent } from '@testing-library/react';
import TTSButton from '../components/TTSButton';

it('calls speechSynthesis', () => {
  const spy = vi.spyOn(window.speechSynthesis, 'speak');
  const { getByRole } = render(<TTSButton text="hello" />);
  fireEvent.click(getByRole('button'));
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
