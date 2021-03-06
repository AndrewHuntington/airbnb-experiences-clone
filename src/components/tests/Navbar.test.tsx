import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

test('renders logo in navbar', () => {
  render(<Navbar />);
  const logo = screen.getByAltText(/logo/i);
  expect(logo).toBeInTheDocument();
});
