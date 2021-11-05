import axios from 'axios';
import { AES, enc } from 'crypto-js';
import { nanoid } from 'nanoid';
import { AxiosResult } from '../../models/axios-result';
import { SpoonacularUser } from '../../models/spoonacular-user';
import { User } from '../../models/user';
import { BaseService } from './base-service';

export class UsersService extends BaseService {
  constructor() {
    super();
    this.BASE_API_URL = `${import.meta.env.VITE_DB_API_URL}/${
      import.meta.env.VITE_DB_USERS_API_ID
    }?apiKey=${import.meta.env.VITE_DB_API_KEY}`;
  }

  async checkExist(email: string) {
    const result: AxiosResult<User[]> = await axios.get(this.BASE_API_URL);
    if (result.data.find((u) => u.email == email)) {
      return true;
    }
    return false;
  }

  async add(username: string, email: string, password: string) {
    const result: AxiosResult<User[]> = await axios.get(this.BASE_API_URL);
    const hashedPass = AES.encrypt(password, this.APP_SECRET).toString();
    const spoonacularUser = await this.connectSpoonacularUser(username, email);
    const newUser: User = {
      id: `user-${nanoid()}`,
      username,
      email,
      password: hashedPass,
      spoonacularUser,
    };

    result.data.push(newUser);
    const res = await axios.put(this.BASE_API_URL, result.data);
    console.log(res);
  }

  private async connectSpoonacularUser(
    username: string,
    email: string,
  ): Promise<SpoonacularUser> {
    const result: AxiosResult<SpoonacularUser> = await axios.post(
      this.generateSpoonacularUrl('/users/connect'),
      { username, email },
    );
    return result.data;
  }

  async validate(email: string, password: string): Promise<User | boolean> {
    const result: AxiosResult<User[]> = await axios.get(this.BASE_API_URL);
    const user = result.data.find((u) => u.email === email);
    if (user) {
      const decryptedPass = AES.decrypt(
        user.password,
        this.APP_SECRET,
      ).toString(enc.Utf8);
      if (password === decryptedPass) {
        return user;
      } else {
        return false;
      }
    }
    return false;
  }

  async get(id: string) {
    const result: AxiosResult<User[]> = await axios.get(this.BASE_API_URL);
    const user = result.data.find((u) => u.id === id);
    return user || null;
  }
}
