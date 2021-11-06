import React from 'react';

const RecipeMealCard = () => {
  return (
    <div className='bg-green-600 text-white p-2 rounded-md shadow'>
      <div className='w-full'>
        <img
          className='w-full object-cover rounded'
          src='https://spoonacular.com/recipeImages/653977-556x370.jpg'
          alt=''
        />
      </div>
      <div className='border-t-2 border-gray-200 mt-2 mb-1'></div>
      <p className='whitespace-pre-wrap text-xs'>Delicious Recipe One</p>
    </div>
  );
};

export default RecipeMealCard;
