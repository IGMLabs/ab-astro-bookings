import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from '../auth/api/auth.interceptor';
import { ErrorInterceptor } from './api/error.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [HeaderComponent, TitleComponent, FooterComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [HeaderComponent, FooterComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class CoreModule {}
