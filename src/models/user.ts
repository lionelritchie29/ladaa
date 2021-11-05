import { SpoonacularUser } from './spoonacular-user';

export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  spoonacularUser: SpoonacularUser;
}
