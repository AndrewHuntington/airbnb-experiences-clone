import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

test('renders image in hero', () => {
  render(<Hero />);
  const heroImg = screen.getByAltText(
    /various images of people doing interesting things/i
  );
  expect(heroImg).toBeInTheDocument();
});

test('renders headline', () => {
  render(<Hero />);
  const headlineText = screen.getByText(/Online Experiences/);
  expect(headlineText).toBeInTheDocument();
});

test('renders copy', () => {
  render(<Hero />);
  const copyText = screen.getByText(/^Join unique/);
  expect(copyText).toBeInTheDocument();
});
