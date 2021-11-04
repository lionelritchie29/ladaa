import axios from 'axios';
import { AES, enc } from 'crypto-js';
import { nanoid } from 'nanoid';
import { AxiosResult } from '../../models/axios-result';
import { User } from '../../models/user';
import { BaseService } from './base-service';

export class UsersService extends BaseService {
  constructor() {
    super();
    this.apiUrl = `${import.meta.env.VITE_DB_API_URL}/${
      import.meta.env.VITE_DB_USERS_API_ID
    }`;
    this.apiUrlWithApiKey = `${this.apiUrl}/?apiKey=${
      import.meta.env.VITE_DB_API_KEY
    }`;
  }

  async checkExist(username: string, email: string) {
    const result: AxiosResult<User[]> = await axios.get(this.apiUrl);
    if (result.data.find((u) => u.username == username || u.email == email)) {
      return true;
    }
    return false;
  }

  async add(username: string, email: string, password: string) {
    const result: AxiosResult<User[]> = await axios.get(this.apiUrl);
    const hashedPass = AES.encrypt(password, this.APP_SECRET).toString();
    const newUser: User = {
      id: `user-${nanoid()}`,
      username,
      email,
      password: hashedPass,
    };

    result.data.push(newUser);
    const res = await axios.put(this.apiUrlWithApiKey, result.data);
    console.log(res);
  }

  async validate(email: string, password: string): Promise<boolean> {
    const result: AxiosResult<User[]> = await axios.get(this.apiUrl);
    const user = result.data.find((u) => u.email === email);
    if (user) {
      const decryptedPass = AES.decrypt(
        user.password,
        this.APP_SECRET,
      ).toString(enc.Utf8);
      if (password === decryptedPass) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
}
