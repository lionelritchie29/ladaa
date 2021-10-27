import React from 'react';
import dummyRecipe from '../../assets/images/recipes/dummy-recipe.jpg';
import { Recipe } from '../../models/recipe';

type props = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: props) => {
  return (
    <div className='shadow border border-gray-300 rounded overflow-hidden text-gray-600'>
      <div>
        <img
          className='w-100'
          src={dummyRecipe}
          alt={`Image of ${recipe.title}`}
        />
      </div>
      <h4 className='font-semibold text-lg mx-3 border-b py-3 border-gray-300'>
        {recipe.title}
      </h4>
      <div className='flex my-3'>
        <div className='w-1/2 flex flex-col text-center py-2'>
          <b className='text-2xl'>{recipe.servingSize}</b>
          <span>Servings</span>
        </div>

        <div className='border-r border-gray-300'> </div>

        <div className='w-1/2 flex flex-col text-center py-2'>
          <b className='text-2xl'>{recipe.servingInMinutes}</b>
          <span>Minutes</span>
        </div>
      </div>

      <div>
        <button className='hover:bg-green-700 text-center w-full text-gray-100 text-sm bg-green-800 font-semibold py-2'>
          View Detail
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
