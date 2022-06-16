import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { AuthAPI } from '../api/auth.api';
import { Register } from '../api/register.interface';
@Component({
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
})
export class RegisterPage implements OnInit {
  constructor(private authApi: AuthAPI) {}

  ngOnInit(): void {}

  onRegister(register: Register) {
    this.authApi
      .register$(register)
      .pipe(tap((response) => console.warn(response)))
      .subscribe();
  }
}
