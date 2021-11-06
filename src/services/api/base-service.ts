export class BaseService {
  protected BASE_API_URL: string;
  protected APP_SECRET: string;

  constructor() {
    this.BASE_API_URL = '';
    this.APP_SECRET = import.meta.env.VITE_APP_SECRET as string;
  }

  generateSpoonacularUrl(path: string, query: string = "") {
    return `${import.meta.env.VITE_SPOONACULAR_API_URL}${path}?apiKey=${
      import.meta.env.VITE_SPOONACULAR_API_KEY
    }${query}`;
  }
}
