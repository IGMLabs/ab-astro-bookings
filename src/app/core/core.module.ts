import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [HeaderComponent, TitleComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
