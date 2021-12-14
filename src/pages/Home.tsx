import React, { FormEvent, useEffect, useState } from 'react';
import CuisineCard from '../components/home/CuisineCard';
import Hero from '../components/home/Hero';
import ContentSection from '../components/shared/ContentSection';
import Divider from '../components/shared/Divider';
import RecipeCard from '../components/shared/RecipeCard';
import { Recipe } from '../models/recipe';
import RecipeService from '../services/in-memory/recipe-service';
import ApiRecipeService from '../services/api/recipe-service';
import { Else, If, Then } from 'react-if';
import { Link } from 'react-router-dom';

type props = {
  recipeService: RecipeService;
  apiRecipeService: ApiRecipeService;
};

const Home = ({ recipeService, apiRecipeService }: props) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchRecipesResult, setSearchRecipesResult] = useState<Recipe[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const fetchRecipes = async () => {
    const res = recipeService.getRecipes();
    setRecipes(res);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const cuisines = [
    {
      name: 'American',
      image:
        'https://images.unsplash.com/photo-1602030638412-bb8dcc0bc8b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Chinese',
      image:
        'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Japanese',
      image:
        'https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Korean',
      image:
        'https://images.unsplash.com/photo-1580651315530-69c8e0026377?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
  ];

  const searchRecipes = async (e: FormEvent) => {
    e.preventDefault();
    const { results } = await apiRecipeService.searchByName(searchValue, 4);

    setSearchRecipesResult(results);
    setSearchValue('');
  };

  return (
    <section>
      <Hero />
      <Divider />

      {!import.meta.env.VITE_IS_OOAD && (
        <ContentSection className='mt-12'>
          <h2 className='text-gray-800 font-bold text-3xl lg:text-4xl xl:text-5xl text-center'>
            Food Cuisine
          </h2>

          <div className='mt-8 grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {cuisines.map((cuisine) => (
              <CuisineCard
                key={cuisine.name}
                name={cuisine.name}
                image={cuisine.image}
              />
            ))}
          </div>
        </ContentSection>
      )}

      <ContentSection className='mt-12 mb-16'>
        <h2 className='text-gray-800 font-bold text-3xl lg:text-4xl xl:text-5xl text-center'>
          Recommended Recipes
        </h2>

        <div className='mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {recipes
            .filter((_, idx) => idx < 8)
            .map((recipe) => (
              <RecipeCard key={recipe.title} recipe={recipe} imageSrc='' />
            ))}
        </div>
      </ContentSection>
      <Divider />

      {!import.meta.env.VITE_IS_OOAD && (
        <ContentSection className='mt-12 mb-10'>
          <h2 className='text-gray-800 font-bold text-3xl lg:text-4xl xl:text-5xl text-center'>
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
              <form onSubmit={searchRecipes}>
                <input
                  type='text'
                  name='search-recipe'
                  id='search-recipe'
                  className='border border-gray-300 focus:ring-indigo-500 py-2 focus:border-indigo-500 block w-full pl-10 sm:text-sm rounded-md'
                  placeholder='Burger ...'
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </form>
            </div>
          </div>

          <div className='mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <If condition={searchRecipesResult.length == 0}>
              <Then>
                {recipes
                  .filter((_, idx) => idx < 4)
                  .map((recipe) => (
                    <RecipeCard
                      key={recipe.title}
                      recipe={recipe}
                      imageSrc=''
                    />
                  ))}
              </Then>
              <Else>
                {searchRecipesResult.map((recipe) => (
                  <RecipeCard key={recipe.title} recipe={recipe} imageSrc='' />
                ))}
              </Else>
            </If>
          </div>

          <div className='text-right mt-4'>
            <Link
              className='text-blue-500 hover:underline btn'
              to='/search-recipes'>
              View More...
            </Link>
          </div>
        </ContentSection>
      )}
    </section>
  );
};

export default Home;
