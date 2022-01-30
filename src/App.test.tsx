import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('navbar component is rendered', () => {
  render(<App />);
  const navbar = screen.getByAltText(/logo/);
  expect(navbar).toBeInTheDocument();
});

test('hero component is rendered', () => {
  render(<App />);
  const hero = screen.getByAltText(
    /various images of people doing interesting things/
  );
  expect(hero).toBeInTheDocument();
});

test('three cards are being rendered', () => {
  render(<App />);
  const cards = screen.getAllByTestId('card-img');
  expect(cards.length).toEqual(3);
});
