import React, { useState } from 'react';
import CustomListBox from '../components/home/CustomListBox';
import CustomRadioGroup from '../components/home/CustomRadioGroup';
import ContentSection from '../components/shared/ContentSection';
import RecipeCard from '../components/shared/RecipeCard';
import RecipeService from '../services/in-memory/recipe-service';
import { If, Then } from 'react-if';
import MealPlanTable from '../components/meal-plan/MealPlanTable';
import { Tab } from '@headlessui/react';
import MealPlanGenerator from '../components/meal-plan/MealPlanGenerator';
import MealPlanService from '../services/api/meal-plan-service';

type props = {
  recipeService: RecipeService;
  mealPlanService: MealPlanService;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const MealPlan = ({ recipeService, mealPlanService }: props) => {
  const tabs = ['Generate', 'My Meal Plan'];

  return (
    <ContentSection className='mt-12 mb-10'>
      <h2 className='text-gray-800 font-bold text-3xl lg:text-4xl xl:text-5xl text-center'>
        Meal Plan
      </h2>

      <div className='w-full px-2 py-16 sm:px-0'>
        <Tab.Group>
          <Tab.List className='flex p-1 space-x-1 bg-green-700 rounded-lg'>
            {tabs.map((tab) => (
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg',
                    'focus:outline-none bg-green-600 ',
                    selected
                      ? 'bg-white shadow'
                      : 'text-gray-700 hover:bg-white/[0.12] hover:text-white',
                  )
                }>
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className='mt-2'>
            <Tab.Panel
              className={classNames(
                'bg-white rounded-xl p-3',
                'border border-gray-300',
              )}>
              <MealPlanGenerator recipeService={recipeService} />
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                'bg-white rounded-xl p-3',
                'border border-gray-300',
              )}>
              <MealPlanTable mealPlanService={mealPlanService} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </ContentSection>
  );
};

export default MealPlan;
