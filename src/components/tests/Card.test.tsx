import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card';
import { cardData } from '../../data/cardData';

test('renders card img', () => {
  const { id, title, price, coverImg, stats, location } = cardData[0];
  render(
    <Card
      key={id}
      coverImg={coverImg}
      title={title}
      price={price}
      rating={stats.rating}
      reviewCount={stats.reviewCount}
      location={location}
    />
  );
  const cardImg = screen.getByTestId('card-img');
  expect(cardImg).toBeInTheDocument();
});
