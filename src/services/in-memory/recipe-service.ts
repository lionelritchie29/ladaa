import { Recipe } from '../../models/recipe';

export default class RecipeService {
  private API_KEY =
    '$2b$10$utWF0KHykHrgP6O4I135KOIeftgkbmXMlBXsgfBd8WCDoxTqs4EsC';
  private BASE_URL = 'https://api.jsonbin.io/v3/b/61791d63aa02be1d445f7f90';

  async getRecipes(): Promise<Recipe[]> {
    return await fetch(`${this.BASE_URL}/latest`, {
      headers: {
        'X-Master-Key': this.API_KEY,
        'X-Bin-Meta': 'false',
      },
    })
      .then((res) => res.json())
      .then((res) => res);
  }
}
