export class LocalStorageService {
  public save(key: string, newData: any, objKey: string): boolean {
    if (localStorage.getItem(key)) {
      const data = this.get(key);
      if (data.some((d) => d[objKey] == newData[objKey])) return false;

      data.push(newData);
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } else {
      localStorage.setItem(key, JSON.stringify([newData]));
      return true;
    }
  }

  public get(key: string) {
    const data = JSON.parse(localStorage.getItem(key)!);
    if (!data) return [];

    if (Array.isArray(data)) {
      return data;
    } else {
      return [data];
    }
  }
}
