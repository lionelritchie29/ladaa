export class LocalStorageService {
  public saveArray(key: string, newData: any, objKey: string): boolean {
    if (localStorage.getItem(key)) {
      const data = this.getArray(key);
      if (data.some((d) => d[objKey] == newData[objKey])) return false;

      data.push(newData);
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } else {
      localStorage.setItem(key, JSON.stringify([newData]));
      return true;
    }
  }

  public getArray(key: string) {
    const data = JSON.parse(localStorage.getItem(key)!);
    if (!data) return [];

    if (Array.isArray(data)) {
      return data;
    } else {
      return [data];
    }
  }

  public get(key: string) {
    const data = localStorage.getItem(key);
    return data;
  }

  public save (key: string, newData: any) {
    localStorage.setItem(key, newData);
  }

  public delete(key: string) {
    localStorage.removeItem(key);
  }
}
