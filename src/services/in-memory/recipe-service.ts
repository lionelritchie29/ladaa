import recipeJSON from '../../data/recipes.json';
import nutritionJSON from '../../data/nutritions.json';

import { Recipe } from '../../models/recipe';
import { NutritionWrapper } from '../../models/nutrition-wrapper';

export default class RecipeService {
  getRecipes(): Recipe[] {
    return recipeJSON.recipes as any;
  }

  getRecipe(id: number): Recipe | null {
    const res = recipeJSON.recipes.find((r) => r.id === id) as any;
    return (res as Recipe) || null;
  }

  getRecipeNutrition(id: number): NutritionWrapper {
    return nutritionJSON.nutritions.find((n) => n.recipeId === id) as any;
  }
}
