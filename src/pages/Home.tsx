import React from 'react';
import CuisineCard from '../components/home/CuisineCard';
import Hero from '../components/home/Hero';
import ContentSection from '../components/shared/ContentSection';
import Divider from '../components/shared/Divider';
import RecipeCard from '../components/shared/RecipeCard';
import { Recipe } from '../models/recipe';

const Home = () => {
  const cuisines = [
    { name: 'Indonesia', image: '' },
    { name: 'Western', image: '' },
    { name: 'Chinese', image: '' },
  ];

  const recipes: Recipe[] = [
    {
      title: 'Banana Pecan',
      image: '',
      servingSize: 1,
      servingInMinutes: 15,
    },
    {
      title: 'Pasta with Garlic',
      image: '',
      servingSize: 5,
      servingInMinutes: 15,
    },
    {
      title: 'Trinidian Chicken',
      image: '',
      servingSize: 6,
      servingInMinutes: 20,
    },
    {
      title: 'Nasi Cumi',
      image: '',
      servingSize: 4,
      servingInMinutes: 20,
    },
    {
      title: 'Ayam Wangi',
      image: '',
      servingSize: 2,
      servingInMinutes: 20,
    },
    {
      title: 'Burger Deluxe',
      image: '',
      servingSize: 3,
      servingInMinutes: 30,
    },
  ];

  return (
    <section>
      <Hero />
      <Divider />

      <ContentSection className='mt-6'>
        <h2 className='text-gray-800 font-bold text-3xl text-center'>
          Food Cuisine
        </h2>

        <div className='mt-4 grid gap-4 lg:gap-x-12 lg:gap-y-4 grid-cols-2 lg:grid-cols-3'>
          {cuisines.map((cuisine) => (
            <CuisineCard name={cuisine.name} />
          ))}
        </div>
      </ContentSection>

      <ContentSection className='mt-12 mb-8'>
        <h2 className='text-gray-800 font-bold text-3xl text-center'>
          Recommended Recipes
        </h2>

        <div className='mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.title} recipe={recipe} />
          ))}
        </div>
      </ContentSection>
      <Divider />

      <ContentSection className='mt-6 mb-8'>
        <h2 className='text-gray-800 font-bold text-3xl text-center'>
          Find Recipe
        </h2>

        <div>
          <div className='mt-6 relative rounded-md shadow-sm'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <svg
                className='h-5 w-5 text-gray-400'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'>
                <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
              </svg>
            </div>
            <input
              type='text'
              name='email'
              id='email'
              className='border border-gray-300 focus:ring-indigo-500 py-2 focus:border-indigo-500 block w-full pl-10 sm:text-sm rounded-md'
              placeholder='Burger ...'
            />
          </div>
        </div>

        <div className='mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {recipes
            .filter((_, idx) => idx < 4)
            .map((recipe) => (
              <RecipeCard key={recipe.title} recipe={recipe} />
            ))}
        </div>
      </ContentSection>
    </section>
  );
};

export default Home;
