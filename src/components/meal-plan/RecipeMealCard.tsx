import React from 'react';
import { Recipe } from '../../models/recipe';

type props = {
  recipe: Recipe;
};

const RecipeMealCard = ({ recipe }: props) => {
  return (
    <div className='bg-green-600 text-white p-1 rounded-md shadow mb-1 flex'>
      <div className='w-16 rounded-md overflow-hidden'>
        <img
          className='w-full object-cover rounded'
          src={recipe.image}
          alt=''
        />
      </div>
      {/* <div className='border-t-2 border-gray-200 mt-2 mb-1'></div> */}
      <p className='whitespace-pre-wrap text-xs ml-1 flex items-center'>
        {recipe.title}
      </p>
    </div>
  );
};

export default RecipeMealCard;
