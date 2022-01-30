import React from 'react';
import star from '../assets/star.png';

type CardProps = {
  key: number;
  coverImg: string;
  rating: number;
  reviewCount: number;
  location: string;
  title: string;
  price: number;
};

export default function Card(props: CardProps) {
  return (
    <div className="card">
      <img src={props.coverImg} className="" data-testid="card-img" />
      <div className="">
        <img src={star} className="" />
        <span>{props.rating}</span>
        <span className="">({props.reviewCount}) • </span>
        <span className="">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="">From ${props.price}</span> / person
      </p>
    </div>
  );
}
