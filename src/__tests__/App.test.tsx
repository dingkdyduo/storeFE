import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('main nav', () => {
  render(<App />);
  const home = screen.getByText(/home/i);
  expect(home).toBeInTheDocument();
});



