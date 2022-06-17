export class LocalStorage {
  private readonly tokenKey = 'accessToken';

  public getToken(): string {
    const accessToken = localStorage.getItem(this.tokenKey);
    if (accessToken) {
      return accessToken;
    }
    return '';
  }

  public setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }
}
