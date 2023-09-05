import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';
import { vi, expect } from 'vitest';

test('Button component renders correctly', () => {
  const onClick = vi.fn();
  render(<Button onClick={onClick} />);
  const buttonElement = screen.getByText('Click me');
  expect(buttonElement).toBeInTheDocument();
});

test('Button component calls onClick handler', async () => {
  const onClickMock = vi.fn();
  render(<Button onClick={onClickMock} />);
  const buttonElement = screen.getByText('Click me');
  await userEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalled();
});
