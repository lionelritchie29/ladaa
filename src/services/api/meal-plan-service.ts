import axios from 'axios';
import { getUnixTime } from 'date-fns';
import { MealSlot } from '../../models/enum/meal-slot';
import { User } from '../../models/user';
import { BaseService } from './base-service';
import { Recipe } from '../../models/recipe';
import { AxiosResult } from '../../models/axios-result';

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
}
