import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, expect } from 'vitest';

import Button from './Button';

test('button component renders correctly', () => {
  const onClick = vi.fn();
  render(<Button onClick={onClick} />);
  const buttonElement = screen.getByText('Click me');
  expect(buttonElement).toBeInTheDocument();
});

test('button component calls onClick handler', async () => {
  const onClickMock = vi.fn();
  render(<Button onClick={onClickMock} />);
  const buttonElement = screen.getByText('Click me');
  await userEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalledOnce();
});
