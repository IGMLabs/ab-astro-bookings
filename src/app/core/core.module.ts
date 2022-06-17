import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthInterceptor } from '../auth/api/auth.interceptor';
import { ErrorInterceptor } from './api/error.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { LocalStorage } from './utils/local-storage.service';
import { SessionStorage } from './utils/session-storage.service';
import { StorageBase } from './utils/storage.base';
import { Storage } from './utils/storage.interface';

@NgModule({
  declarations: [HeaderComponent, TitleComponent, FooterComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [HeaderComponent, FooterComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: StorageBase,
      useFactory: (): Storage => {
        if (environment.production) return new SessionStorage();
        else return new LocalStorage();
      },
    },
  ],
})
export class CoreModule {}
