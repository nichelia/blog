import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InfoModule } from '@shared/info/info.module';
import { ThemeModule } from '@shared/theme/theme.module';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    InfoModule,
    ThemeModule,
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule { }
