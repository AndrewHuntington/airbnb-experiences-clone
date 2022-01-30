import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card';
import { cardData } from '../../data/cardData';

test('renders card img', () => {
  render(<Card key={cardData[0].id} data={cardData[0]} />);
  const cardImg = screen.getByTestId('card-img');
  expect(cardImg).toBeInTheDocument();
});
