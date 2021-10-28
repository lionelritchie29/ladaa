import { Recipe } from '../../models/recipe';
import recipeJSON from '../../data/recipes.json';

export default class RecipeService {
  getRecipes(): Recipe[] {
    return recipeJSON.recipes as any;
  }

  getRecipe(id: number): Recipe {
    return recipeJSON.recipes.find((r) => r.id === id) as any;
  }
}
