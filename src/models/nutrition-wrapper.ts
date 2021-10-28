import { Nutrition } from './nutrition';

export interface NutritionWrapper {
  recipeId: number;
  calories: string;
  carbs: string;
  fat: string;
  protein: string;
  bad: Nutrition[];
  good: Nutrition[];
}
