import axios from 'axios';
import { AxiosResult } from '../../models/axios-result';
import { NutritionWrapper } from '../../models/nutrition-wrapper';
import { Recipe } from '../../models/recipe';
import { SearchRecipeResult } from '../../models/search-recipe-result';
import { BaseService } from './base-service';

export default class RecipeService extends BaseService {
  constructor() {
    super();
  }

  async get(id: number): Promise<Recipe> {
    const result: AxiosResult<Recipe> = await axios.get(
      this.generateSpoonacularUrl(`/recipes/${id}/information`),
    );
    return result.data;
  }

  async getNutrition(recipeId: number): Promise<NutritionWrapper> {
    const result: AxiosResult<NutritionWrapper> = await axios.get(
      this.generateSpoonacularUrl(`/recipes/${recipeId}/nutritionWidget.json`),
    );
    return result.data;
  }

  async searchByName(name: string, limit: number): Promise<SearchRecipeResult> {
    const result: AxiosResult<SearchRecipeResult> = await axios.get(
      this.generateSpoonacularUrl(
        '/recipes/complexSearch',
        `&query=${name}&number=${limit}&addRecipeInformation=true`,
      ),
    );
    return result.data;
  }

  async searchByCuisine(
    cuisine: string,
    limit: number,
  ): Promise<SearchRecipeResult> {
    const result: AxiosResult<SearchRecipeResult> = await axios.get(
      this.generateSpoonacularUrl(
        '/recipes/complexSearch',
        `&cuisine=${cuisine}&number=${limit}&addRecipeInformation=true`,
      ),
    );
    return result.data;
  }
}
