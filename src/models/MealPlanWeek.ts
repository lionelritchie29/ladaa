import { Recipe } from './recipe';

export interface MealPlanWeek {
  days: MealPlanDay[];
}

export interface MealPlanDay {
  date: number;
  day:
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday';
  items: Recipe[];
  nutritionSummary: {
    nutrients: MealPlanNutrient[];
  };
}

export interface MealPlanNutrient {
  amount: number;
  name: string;
  unit: string;
  percentOfDailyNeeds: number;
}
