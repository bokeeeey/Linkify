import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

test('버튼의 레이블이 올바르게 렌더링 됩니다.', () => {
  render(<Button label="Click me" onClick={() => {}} />);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});

test('버튼 클릭 시 onClick 핸들러가 호출됩니다.', () => {
  const handleClick = jest.fn();
  render(<Button label="Click me" onClick={handleClick} />);

  const buttonElement = screen.getByText(/click me/i);
  fireEvent.click(buttonElement);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
