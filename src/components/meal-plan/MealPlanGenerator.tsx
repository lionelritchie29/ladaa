import React, { useState } from 'react';
import { If, Then } from 'react-if';
import RecipeService from '../../services/in-memory/recipe-service';
import CustomListBox from '../home/CustomListBox';
import CustomRadioGroup from '../home/CustomRadioGroup';
import RecipeCard from '../shared/RecipeCard';

type props = {
  recipeService: RecipeService;
};

const MealPlanGenerator = ({ recipeService }: props) => {
  const [showPlan, setShowPlan] = useState(false);
  const recipes = recipeService.getRecipes();
  const timeframes = [{ name: 'Day' }, { name: 'Week' }];
  const [selectedTimeframe, setSelectedTimeframe] = useState(
    timeframes[0].name,
  );

  const generatePlan = () => {
    setShowPlan(true);
  };

  return (
    <div>
      <div className='relative rounded-md shadow-sm'>
        <label htmlFor='target-calories' className='font-semibold text-lg'>
          Choose timeframe
        </label>
        <CustomListBox items={timeframes} setSelected={setSelectedTimeframe} />
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
  );
};

export default MealPlanGenerator;
