import axios from 'axios';
import { format, getUnixTime, startOfWeek } from 'date-fns';
import { MealSlot } from '../../models/enum/meal-slot';
import { User } from '../../models/user';
import { BaseService } from './base-service';
import { Recipe } from '../../models/recipe';
import { AxiosResult } from '../../models/axios-result';
import { MealPlanWeek } from '../../models/MealPlanWeek';
import { MealPlan } from '../../models/meal-plan';

export default class MealPlanService extends BaseService {
  constructor() {
    super();
  }

  public async addToMealPlan(
    user: User,
    date: Date,
    slot: MealSlot,
    recipe: Recipe,
  ) {
    const { username, hash } = user.spoonacularUser;
    const { id, title, image, servings } = recipe;
    const payload = {
      date: getUnixTime(date),
      slot: slot as number,
      position: 0,
      type: 'RECIPE',
      value: {
        id,
        title,
        image,
        servings,
      },
    };

    const res: AxiosResult<any> = await axios.post(
      this.generateSpoonacularUrl(
        `/mealplanner/${username}/items`,
        `&username=${username}&hash=${hash}`,
      ),
      payload,
    );

    if (
      res.status.toString().startsWith('4') ||
      res.status.toString().startsWith('5')
    ) {
      throw new Error('Failed when adding meal plan');
    }
  }

  public async getMealPlanWeek(user: User, date: Date): Promise<MealPlanWeek> {
    const { username, hash } = user.spoonacularUser;
    const startDate = format(
      startOfWeek(date, { weekStartsOn: 1 }),
      'yyyy-MM-dd',
    );

    const result: AxiosResult<MealPlanWeek> = await axios.get(
      this.generateSpoonacularUrl(
        `/mealplanner/${username}/week/${startDate}`,
        `&hash=${hash}`,
      ),
    );

    if (
      result.status.toString().startsWith('4') ||
      result.status.toString().startsWith('5')
    ) {
      throw new Error('Failed when getting your meal plan');
    }

    return result.data;
  }

  public async generateMealPlan(
    targetCal: number,
    excludeds: string,
  ): Promise<MealPlan> {
    const result: AxiosResult<MealPlan> = await axios.get(
      this.generateSpoonacularUrl(
        '/mealplanner/generate',
        `&timeFrame=day&targetCalories=${targetCal}${
          excludeds.length > 0 ? `&exclude=${excludeds}` : ''
        }`,
      ),
    );

    if (
      result.status.toString().startsWith('4') ||
      result.status.toString().startsWith('5')
    ) {
      throw new Error('Failed when generating meal plan');
    }

    return result.data;
  }
}
