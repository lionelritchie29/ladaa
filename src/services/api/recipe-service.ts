import axios from 'axios';
import { AxiosResult } from '../../models/axios-result';
import { SearchRecipeResult } from '../../models/search-recipe-result';
import { BaseService } from './base-service';

export default class RecipeService extends BaseService {
  constructor() {
    super();
  }

  async searchByName(name: string, limit: number): Promise<SearchRecipeResult> {
    const result: AxiosResult<SearchRecipeResult> = await axios.get(
      this.generateSpoonacularUrl(
        '/recipes/complexSearch', `&query=${name}&number=${limit}&addRecipeInformation=true`,
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
        '/recipes/complexSearch', `&cuisine=${cuisine}&number=${limit}&addRecipeInformation=true`,
      ),
    );
    return result.data;
  }
}
