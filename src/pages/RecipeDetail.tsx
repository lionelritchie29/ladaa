import React from 'react';
import { useParams } from 'react-router-dom';
import dummyRecipe from '../assets/images/recipes/dummy-recipe.jpg';
import ContentSection from '../components/shared/ContentSection';
import SecondaryButton from '../components/shared/SecondaryButton';
import RecipeRating from '../components/recipe-detail/RatingCard';
import { RecipeRating as RecipeRatingModel } from '../models/recipe-rating';
import RecipeService from '../services/in-memory/recipe-service';

type RouteParams = {
  id: string;
};

const RecipeDetail = () => {
  const { id } = useParams<RouteParams>();
  const recipeService = new RecipeService();
  const recipe = recipeService.getRecipe(parseInt(id));
  const nutritions = recipeService.getRecipeNutrition(parseInt(id));

  const ratings: RecipeRatingModel[] = [
    {
      id: 1,
      username: 'Adrian',
      rating: 4,
      content: 'I made a delicious serundeng with this recipe!',
    },
    {
      id: 2,
      username: 'Lionel',
      rating: 5,
      content: 'I made a delicious serundeng with this recipe!',
    },
    {
      id: 3,
      username: 'Alice',
      rating: 3,
      content: 'I made a delicious serundeng with this recipe!',
    },
  ];
  return (
    <section>
      <ContentSection className='mt-6 lg:mt-9 md:flex'>
        <div className='rounded-md overflow-hidden md:w-1/2 lg:w-2/5'>
          <img
            className='w-full shadow-md'
            src={recipe.image}
            alt='Dummy Recipe'
          />
        </div>
        <div className='mt-3 md:w-1/2 md:ml-6 lg:w-3/5'>
          <h2 className='font-bold text-2xl'>{recipe.title}</h2>
          <p
            className='text-sm mt-2 text-justify'
            dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>

          <div className='flex md:flex-col lg:flex-row justify-center mt-4'>
            <SecondaryButton
              className='lg:w-1/2 lg:mr-4 mr-1'
              text='View Video Tutor'
            />
            <SecondaryButton
              className='lg:w-1/2 md:mt-3 lg:mt-0'
              text='Add Video Tutor'
            />
          </div>
        </div>
      </ContentSection>

      <ContentSection className='mt-6'>
        <h2 className='font-semibold text-lg mb-2'>Add Rating</h2>
        <form>
          <textarea
            className='border shadow-sm border-gray-100 bg-gray-100 w-full rounded p-2'
            rows={5}></textarea>

          <div className='text-right mt-1'>
            {/* <button className='text-white btn shadow bg-green-600 px-5 font-semibold py-2 rounded-full'>
              Add Rating
            </button> */}
            <SecondaryButton text='Add Rating' className='px-10' />
          </div>
        </form>

        <h2 className='font-semibold text-lg mt-3'>Ratings from other users</h2>
        <div className='grid grid-cols-1 gap-3'>
          {ratings.map((rating) => (
            <RecipeRating rating={rating} />
          ))}
        </div>

        <div className='text-right mt-1'>
          <button className='text-blue-500 hover:underline btn'>
            View More...
          </button>
        </div>
      </ContentSection>

      <ContentSection className='mt-9'>
        <h2 className='text-2xl font-bold'>Nutritions</h2>
        <div className='bg-gray-100 p-6 rounded-md mt-3'>
          <div>
            <h3 className='font-semibold text-green-800 text'>Good:</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
              {nutritions.good.map((nutrition) => (
                <div className='bg-green-700 text-white text-sm p-3 inline-block rounded-md'>
                  {nutrition.title} ({nutrition.amount})
                </div>
              ))}
            </div>
          </div>

          <div className='mt-8'>
            <h3 className='font-semibold text-red-800 text'>Bad:</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
              {nutritions.bad.map((nutrition) => (
                <div className='bg-red-700 text-white text-sm p-3 inline-block rounded-md'>
                  {nutrition.title} ({nutrition.amount})
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection className='mt-9'>
        <h2 className='text-2xl font-bold'>Ingredients</h2>
        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
          {recipe.extendedIngredients.map((ingredient) => (
            <div className='p-3 bg-yellow-100 rounded-md'>
              {ingredient.name} ({ingredient.amount + ' ' + ingredient.unit})
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection className='mt-9 mb-8'>
        <h2 className='text-2xl font-bold'>Premium Features</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-3'>
          <button className='btn text-white shadow-md hover:bg-green-500 bg-green-600 px-5 font-semibold py-2 rounded-full'>
            See Ingredients
          </button>
          <button className='btn text-white shadow-md hover:bg-green-500 bg-green-600 px-5 font-semibold py-2 rounded-full'>
            See Instructions
          </button>
          <button className='btn text-white shadow-md hover:bg-green-500 bg-green-600 px-5 font-semibold py-2 rounded-full'>
            See Equipments
          </button>
          <button className='btn text-white shadow-md hover:bg-green-500 bg-green-600 px-5 font-semibold py-2 rounded-full'>
            Add to Saved
          </button>
        </div>
      </ContentSection>
    </section>
  );
};

export default RecipeDetail;
