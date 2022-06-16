import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthAPI } from './auth.api';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authApi: AuthAPI) {}

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accessToken = this.authApi.accessToken;
    if (accessToken !== '') {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }
    return next.handle(request);
  }
}
