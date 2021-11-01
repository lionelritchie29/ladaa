import React, { useContext, useEffect, useState } from "react";
import CuisineCard from "../components/home/CuisineCard";
import CustomListBox from "../components/home/CustomListBox";
import CustomRadioGroup from "../components/home/CustomRadioGroup";
import Hero from "../components/home/Hero";
import ContentSection from "../components/shared/ContentSection";
import Divider from "../components/shared/Divider";
import RecipeCard from "../components/shared/RecipeCard";
import ModalProvider, { ModalContext } from "../contexts/ModalContext";
import { Recipe } from "../models/recipe";
import RecipeService from "../services/in-memory/recipe-service";

const Home = () => {
  const recipeService = new RecipeService();
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = async () => {
    const res = recipeService.getRecipes();
    setRecipes(res);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const cuisines = [
    { name: "Indonesia", image: "" },
    { name: "Western", image: "" },
    { name: "Chinese", image: "" },
    { name: "Italian", image: "" },
  ];

  return (
    <section>
      <Hero />
      <Divider />

      <ContentSection className="mt-12">
        <h2 className="text-gray-800 font-bold text-3xl lg:text-4xl xl:text-5xl text-center">
          Food Cuisine
        </h2>

        <div className="mt-8 grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cuisines.map((cuisine) => (
            <CuisineCard name={cuisine.name} />
          ))}
        </div>
      </ContentSection>

      <ContentSection className="mt-12 mb-16">
        <h2 className="text-gray-800 font-bold text-3xl lg:text-4xl xl:text-5xl text-center">
          Recommended Recipes
        </h2>

        <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recipes
            .sort(() => Math.random() - 0.5)
            .filter((_, idx) => idx < 8)
            .map((recipe) => (
              <RecipeCard key={recipe.title} recipe={recipe} />
            ))}
        </div>
      </ContentSection>
      <Divider />

      <ContentSection className="mt-12 mb-10">
        <h2 className="text-gray-800 font-bold text-3xl lg:text-4xl xl:text-5xl text-center">
          Find Recipe
        </h2>

        <div>
          <div className="mt-6 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input
              type="text"
              name="email"
              id="email"
              className="border border-gray-300 focus:ring-indigo-500 py-2 focus:border-indigo-500 block w-full pl-10 sm:text-sm rounded-md"
              placeholder="Burger ..."
            />
          </div>
        </div>

        <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recipes
            .sort(() => Math.random() - 0.5)
            .filter((_, idx) => idx < 4)
            .map((recipe) => (
              <RecipeCard key={recipe.title} recipe={recipe} />
            ))}
        </div>
      </ContentSection>

      <Divider />
      <ContentSection className="mt-12 mb-10">
        <h2 className="text-gray-800 font-bold text-3xl lg:text-4xl xl:text-5xl text-center">
          Meal Plan
        </h2>

        <div>
          <div className="mt-6 relative rounded-md shadow-sm">
            <label htmlFor="target-calories" className="font-semibold text-lg">
              Choose timeframe
            </label>
            <CustomListBox />
          </div>

          <div className="mt-6 relative rounded-md shadow-sm">
            <div className="absolute top-12 left-0 pl-3 pt-1 flex items-center pointer-events-none">
              <img
                src="https://img.icons8.com/ios/100/000000/caloric-energy--v1.png"
                className="w-6 h-6 object-cover"
              />
            </div>
            <div>
              <label
                htmlFor="target-calories"
                className="font-semibold text-lg"
              >
                Target Calories
              </label>
              <input
                type="number"
                name="target-calories"
                id="target-calories"
                className="border border-gray-300 focus:ring-indigo-500 py-2 focus:border-indigo-500 block w-full pl-10 sm:text-sm rounded-md mt-4"
                placeholder="Input Calories ..."
              />
            </div>
          </div>

          <div className="mt-6 relative rounded-md shadow-sm">
            <label htmlFor="target-calories" className="font-semibold text-lg">
              Choose diet type
            </label>
            <CustomRadioGroup />
          </div>

          <div className="mt-6 relative rounded-md shadow-sm">
            <button className="btn hover:bg-green-700 text-center w-full text-gray-100 text-sm bg-green-800 font-semibold py-2 rounded-lg">
              Generate Meal Plan
            </button>
          </div>

          <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {recipes
              .sort(() => Math.random() - 0.5)
              .filter((_, idx) => idx < 4)
              .map((recipe) => (
                <RecipeCard key={recipe.title} recipe={recipe} />
              ))}
          </div>
        </div>

        
      </ContentSection>
    </section>
  );
};

export default Home;
