import React, { useState } from 'react';
import CustomListBox from '../components/home/CustomListBox';
import CustomRadioGroup from '../components/home/CustomRadioGroup';
import ContentSection from '../components/shared/ContentSection';
import RecipeCard from '../components/shared/RecipeCard';
import RecipeService from '../services/in-memory/recipe-service';
import { If, Then } from 'react-if';

const MealPlan = () => {
  const [showPlan, setShowPlan] = useState(false);
  const recipeService = new RecipeService();
  const recipes = recipeService.getRecipes();

  const generatePlan = () => {
    setShowPlan(true);
  };

  return (
    <ContentSection className='mt-12 mb-10'>
      <h2 className='text-gray-800 font-bold text-3xl lg:text-4xl xl:text-5xl text-center'>
        Meal Plan
      </h2>

      <div>
        <div className='mt-6 relative rounded-md shadow-sm'>
          <label htmlFor='target-calories' className='font-semibold text-lg'>
            Choose timeframe
          </label>
          <CustomListBox />
        </div>

        <div className='mt-6 relative rounded-md shadow-sm'>
          <div className='absolute top-12 left-0 pl-3 pt-1 flex items-center pointer-events-none'>
            <img
              src='https://img.icons8.com/ios/100/000000/caloric-energy--v1.png'
              className='w-6 h-6 object-cover'
            />
          </div>
          <div>
            <label htmlFor='target-calories' className='font-semibold text-lg'>
              Target Calories
            </label>
            <input
              type='number'
              name='target-calories'
              id='target-calories'
              className='border border-gray-300 focus:ring-indigo-500 py-2 focus:border-indigo-500 block w-full pl-10 sm:text-sm rounded-md mt-4'
              placeholder='Input Calories ...'
            />
          </div>
        </div>

        <div className='mt-6 relative rounded-md shadow-sm'>
          <label htmlFor='target-calories' className='font-semibold text-lg'>
            Choose diet type
          </label>
          <CustomRadioGroup />
        </div>

        <div className='mt-6 relative rounded-md shadow-sm'>
          <button
            onClick={generatePlan}
            className='btn hover:bg-green-700 text-center w-full text-gray-100 text-sm bg-green-800 font-semibold py-2 rounded-lg'>
            Generate Meal Plan
          </button>
        </div>

        <If condition={showPlan}>
          <Then>
            <div className='mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {recipes
                .sort(() => Math.random() - 0.5)
                .filter((_, idx) => idx < 3)
                .map((recipe) => (
                  <RecipeCard key={recipe.title} recipe={recipe} />
                ))}
            </div>
          </Then>
        </If>
      </div>
    </ContentSection>
  );
};

export default MealPlan;
