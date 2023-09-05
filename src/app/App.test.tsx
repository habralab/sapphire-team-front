import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import App from './App';

test('demo', () => {
  expect(true).toBeTruthy();
});

test('renders the main page', () => {
  render(<App />);
  expect(true).toBeTruthy();
});
