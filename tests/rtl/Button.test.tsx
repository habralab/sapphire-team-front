import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Button from './Button';
import { vi, expect } from 'vitest';

test('Button component renders correctly', () => {
  const onClick = vi.fn();
  const { getByText } = render(<Button onClick={onClick} />);
  const buttonElement = getByText('Click me');
  expect(buttonElement).toBeInTheDocument();
});

test('Button component calls onClick handler', () => {
  const onClickMock = vi.fn();
  const { getByText } = render(<Button onClick={onClickMock} />);
  const buttonElement = getByText('Click me');

  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalled();
});
