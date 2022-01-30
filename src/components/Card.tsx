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
    <div className="w-44">
      <img src={props.coverImg} className="rounded-lg" data-testid="card-img" />
      <div className="flex text-xs font-light items-center mt-2">
        <img src={star} className="w-3.5 py-[5px] mr-[2px]" />
        <span className="text-[#222222] mr-[2px]">
          {props.rating % 1 === 0 ? `${props.rating}.0` : props.rating}
        </span>
        <span className="text-[#918E9B] mr-1">
          ({props.reviewCount}) •{'  '}
        </span>
        <span className="text-[#918E9B]">{props.location}</span>
      </div>
      <p className="text-xs font-light text-[#222222]">{props.title}</p>
      <p className="text-xs text-[#222222]">
        <span className="font-semibold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
