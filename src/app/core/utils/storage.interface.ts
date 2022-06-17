export interface Storage {
  getToken(): string;
  setToken(token: string): void;
}
