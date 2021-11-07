import React, { FormEvent, useEffect, useState } from 'react';
import { Else, If, Then } from 'react-if';
import { useLocation } from 'react-router';
import ContentSection from '../components/shared/ContentSection';
import RecipeCard from '../components/shared/RecipeCard';
import { Recipe } from '../models/recipe';
import ApiRecipeService from '../services/api/recipe-service';

type props = {
  apiRecipeService: ApiRecipeService;
};

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const SearchRecipe = ({ apiRecipeService }: props) => {
  const [searchRecipesResult, setSearchRecipesResult] = useState<Recipe[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  let query = useQuery();

  const searchByName = async (name: string) => {
    const { results } = await apiRecipeService.searchByName(name, 8);
    setSearchRecipesResult(results);
  };

  const searchByCuisine = async (cuisine: string) => {
    const { results } = await apiRecipeService.searchByCuisine(cuisine, 8);
    setSearchRecipesResult(results);
  };

  const searchRecipes = async (e: FormEvent) => {
    e.preventDefault();
    searchByName(searchValue);
    setSearchValue('');
  };

  useEffect(() => {
    let queryName = query.get('name') || '';
    let queryCuisine = query.get('cuisine') || '';
  
    if (queryName !== '') {
      searchByName(queryName || '');
    } else if (queryCuisine !== '') {
      searchByCuisine(queryCuisine || '');
    }
  }, [])

  return (
    <ContentSection className='mt-12 mb-16'>
      <h2 className='text-gray-800 font-bold text-3xl lg:text-4xl xl:text-5xl text-center'>
        Search Your Favorite Recipes
      </h2>

      <div>
        <div className='mt-6 relative rounded-md shadow-sm'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <svg
              className='h-5 w-5 text-gray-400'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
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

      <If condition={searchRecipesResult.length === 0}>
        <Then>
          <div className='pt-24 flex items-center justify-center'>
            <div className='w-11/12 lg:w-4/5 bg-green-600 p-12 text-white rounded-lg'>
              The recipe you are looking for will appear here
            </div>
          </div>
        </Then>
        <Else>
          <div className='mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {searchRecipesResult.map((recipe, idx) => (
              <RecipeCard key={`${recipe.title}-${idx}`} recipe={recipe} />
            ))}
          </div>
        </Else>
      </If>
    </ContentSection>
  );
};

export default SearchRecipe;
