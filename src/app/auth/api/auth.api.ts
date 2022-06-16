import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from './login.interface';
import { Register } from './register.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthAPI {
  private url = environment.apiUrl;

  constructor(protected http: HttpClient) {}

  public register$(register: Register) {
    return this.http.post<Register>(this.url + 'register', register);
  }

  public login$(login: Login) {
    return this.http.post<Login>(this.url + 'login', login);
  }
}
