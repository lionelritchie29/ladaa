export class BaseService {
  protected apiUrl: string;
  protected apiUrlWithApiKey: string;
  protected APP_SECRET: string;

  constructor() {
    this.apiUrl = '';
    this.apiUrlWithApiKey = '';
    this.APP_SECRET = import.meta.env.VITE_APP_SECRET as string;
  }
}
