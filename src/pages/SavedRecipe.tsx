import React from 'react';
import ContentSection from '../components/shared/ContentSection';
import RecipeCard from '../components/shared/RecipeCard';
import { RECIPE_STORAGE_KEY } from '../constant';
import { Recipe } from '../models/recipe';
import { LocalStorageService } from '../services/storage/LocalStorageService';

const SavedRecipe = () => {
  const storageService = new LocalStorageService();
  const recipes: Recipe[] = storageService.getArray(RECIPE_STORAGE_KEY);

  return (
    <ContentSection className='mt-12 mb-16'>
      <h2 className='text-gray-800 font-bold text-3xl lg:text-4xl xl:text-5xl text-center'>
        Your Saved Recipes
      </h2>

      {recipes.length == 0 && (
        <div className='pt-24 flex items-center justify-center'>
          <div className='w-11/12 lg:w-4/5 bg-green-600 p-12 text-white rounded-lg'>
            You do not have any recipes in your saved recipes yet!
          </div>
        </div>
      )}

      <div className='mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {recipes
          .sort(() => Math.random() - 0.5)
          .filter((_, idx) => idx < 8)
          .map((recipe) => (
            <RecipeCard key={recipe.title} recipe={recipe} />
          ))}
      </div>
    </ContentSection>
  );
};

export default SavedRecipe;
