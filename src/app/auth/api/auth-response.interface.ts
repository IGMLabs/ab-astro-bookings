export interface AuthResponse {
  accessToken: string;
  user: { email: string; name: string; id: number };
}
