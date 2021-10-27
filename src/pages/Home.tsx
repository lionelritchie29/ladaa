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
    </section>
  );
};

export default Home;
