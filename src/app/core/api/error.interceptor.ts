import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next
      .handle(request)
      .pipe(catchError((error) => this.handleError(error)));
  }

  private handleError(error: any): Observable<any> {
    const httpError = error as HttpErrorResponse;
    if (httpError) {
      if (httpError.status === 401 || httpError.status === 403) {
        console.log('👮🏼‍♂️ security error');
        this.router.navigate(['/', 'auth', 'login']);
      } else {
        if (httpError.status === 0 || httpError.status >= 500) {
          console.log('🤖 server error');
        } else {
          console.log('🧑🏼‍🦰 user error');
        }
      }
    } else {
      console.log('💣 application error ');
    }
    return throwError(() => error);
  }
}
