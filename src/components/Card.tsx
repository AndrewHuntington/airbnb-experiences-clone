import React from 'react';
import star from '../assets/star.png';

type CardProps = {
  data: {
    id: number;
    title: string;
    description: string;
    price: number;
    coverImg: string;
    stats: {
      rating: number;
      reviewCount: number;
    };
    location: string;
    openSpots: number;
  };
};

export default function Card({ data }: CardProps) {
  let badgeText;
  if (data.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (data.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className="w-44 flex-[0_0_auto] relative">
      {badgeText && (
        <div className="absolute bg-white text-[#222222] text-[10px] rounded-sm w-[61px] h-5 top-1.5 left-1.5 flex justify-center items-center">
          {badgeText}
        </div>
      )}
      <img src={data.coverImg} className="rounded-lg" data-testid="card-img" />
      <div className="flex text-xs font-light items-center mt-2">
        <img src={star} className="w-3.5 py-[5px] mr-[2px]" />
        <span className="text-[#222222] mr-[2px]">
          {data.stats.rating % 1 === 0
            ? `${data.stats.rating}.0`
            : data.stats.rating}
        </span>
        <span className="text-[#918E9B] mr-1">
          ({data.stats.reviewCount}) •{'  '}
        </span>
        <span className="text-[#918E9B]">{data.location}</span>
      </div>
      <p className="text-xs font-light text-[#222222]">{data.title}</p>
      <p className="text-xs text-[#222222]">
        <span className="font-semibold">From ${data.price}</span> / person
      </p>
    </div>
  );
}
