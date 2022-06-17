import { Storage } from './storage.interface';
export class SessionStorage implements Storage {
  private readonly tokenKey = 'accessToken';

  public getToken(): string {
    const accessToken = sessionStorage.getItem(this.tokenKey);
    if (accessToken) {
      return accessToken;
    }
    return '';
  }

  public setToken(token: string) {
    sessionStorage.setItem(this.tokenKey, token);
  }
}
