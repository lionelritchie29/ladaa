import React from 'react';
import { Recipe } from '../../models/recipe';
import { Link } from 'react-router-dom';

type props = {
  recipe: Recipe;
  imageSrc: string;
};

const RecipeCard = ({ recipe, imageSrc = '' }: props) => {
  return (
    <div className='shadow border border-gray-300 rounded overflow-hidden text-gray-600'>
      <div className='w-full object-cover'>
        <img
          className='w-full object-cover'
          height='100'
          src={imageSrc || recipe.image}
          alt={`Image of ${recipe.title}`}
        />
      </div>
      <h4 className='truncate font-semibold text-lg mx-3 border-b py-3 border-gray-300'>
        {recipe.title}
      </h4>

      <div className='flex my-3'>
        <div className='w-1/2 flex flex-col text-center py-2'>
          <b className='text-2xl'>{recipe.servings}</b>
          <span>Servings</span>
        </div>

        <div className='border-r border-gray-300'> </div>

        <div className='w-1/2 flex flex-col text-center py-2'>
          <b className='text-2xl'>{recipe.readyInMinutes}</b>
          <span>Minutes</span>
        </div>
      </div>

      <Link to={`/recipes/${recipe.id}`}>
        <button className='btn hover:bg-green-700 text-center w-full text-gray-100 text-sm bg-green-800 font-semibold py-2'>
          View Detail
        </button>
      </Link>
    </div>
  );
};

export default RecipeCard;
