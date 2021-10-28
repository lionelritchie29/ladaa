import React from 'react';
import { RecipeRating } from '../../models/recipe-rating';

type props = {
  rating: RecipeRating;
};

const RatingCard = ({ rating }: props) => {
  const getRatingStar = (rate: number): string => {
    let star = '';
    for (let i = 0; i < rate; i++) {
      star += '⭐';
    }

    return star;
  };

  return (
    <div className='bg-gray-100 p-3 rounded-md'>
      <div>
        <span className='font-semibold mr-2'>{rating.username}</span>
        <span>{getRatingStar(rating.rating)}</span>
      </div>
      <p className='text-sm mt-2'>{rating.content}</p>
    </div>
  );
};

export default RatingCard;
