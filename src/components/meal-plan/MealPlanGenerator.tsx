import React, { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { If, Then } from 'react-if';
import { ToastContext, ToastContextType } from '../../contexts/ToastContext';
import { MealPlan } from '../../models/meal-plan';
import { Recipe } from '../../models/recipe';
import MealPlanService from '../../services/api/meal-plan-service';
import RecipeService from '../../services/in-memory/recipe-service';
import RecipeCard from '../shared/RecipeCard';

type props = {
  recipeService: RecipeService;
  mealPlanService: MealPlanService;
};

type FormData = {
  targetCal: number;
  excludeItem: string;
};

const MealPlanGenerator = ({ recipeService, mealPlanService }: props) => {
  const [showPlan, setShowPlan] = useState(false);
  const [plan, setPlan] = useState<MealPlan>({ meals: [] });
  const types = ['Breakfast', 'Lunch', 'Dinner'];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [makeToast, makeToastPromise, dismissToast] = useContext(
    ToastContext,
  ) as ToastContextType;

  const generatePlan: SubmitHandler<FormData> = async ({
    targetCal,
    excludeItem,
  }) => {
    dismissToast();
    const excludeds = excludeItem.split('\n').join(',');
    const mp = (await makeToastPromise(
      mealPlanService.generateMealPlan(targetCal, excludeds),
      {
        success: 'Here you go!',
        pending: 'Generating meal plan, please wait...',
        error: 'Ups, something is wrong when generating your meal plan',
      },
    )) as MealPlan;

    setPlan(mp);
    setShowPlan(true);
  };

  return (
    <form onSubmit={handleSubmit(generatePlan)}>
      <div className='mt-6 relative rounded-md shadow-sm'>
        <div className='absolute top-12 left-0 pl-3 pt-1 flex items-center pointer-events-none'>
          <img
            src='https://img.icons8.com/ios/100/000000/caloric-energy--v1.png'
            className='w-6 h-6 object-cover'
          />
        </div>
        <div>
          <label className='font-semibold text-lg'>Target Calories</label>
          <input
            {...register('targetCal', {
              required: 'Target calories is required',
            })}
            type='number'
            className='border border-gray-300 focus:ring-indigo-500 py-2 focus:border-indigo-500 block w-full pl-10 sm:text-sm rounded-md mt-4'
            placeholder='Input Calories ...'
          />
        </div>
        {errors.targetCal && (
          <small className='text-red-500'>{errors.targetCal.message}</small>
        )}
      </div>

      <div className='mt-6 relative rounded-md shadow-sm'>
        <div>
          <label className='font-semibold text-lg'>What to Exclude?</label>
          <textarea
            {...register('excludeItem')}
            rows={5}
            className='border border-gray-300 focus:ring-indigo-500 py-2 focus:border-indigo-500 block w-full px-3 sm:text-sm rounded-md mt-4'
            placeholder='milk&#10;fish'></textarea>
        </div>
        <small>Seperate each excluded item with enter</small>
      </div>

      <div className='mt-6 relative rounded-md shadow-sm'>
        <button
          type='submit'
          className='btn hover:bg-green-700 text-center w-full text-gray-100 text-sm bg-green-800 font-semibold py-2 rounded-lg'>
          Generate Meal Plan
        </button>
      </div>

      <If condition={showPlan}>
        <Then>
          <div className='mt-8 text-center text-lg'>Here are the results!</div>
          <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {plan.meals.map((recipe, idx) => (
              <div key={recipe.id}>
                <div className='text-center font-semibold'>
                  {types[idx] || ''}
                </div>
                <RecipeCard
                  recipe={recipe}
                  imageSrc={`https://spoonacular.com/recipeImages/${recipe.id}-556x370.${recipe.imageType}`}
                />
              </div>
            ))}
          </div>
        </Then>
      </If>
    </form>
  );
};

export default MealPlanGenerator;
