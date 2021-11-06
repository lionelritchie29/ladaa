import { Recipe } from './recipe';

export interface SearchRecipeResult {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
}
