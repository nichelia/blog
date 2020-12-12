import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InfoModule } from '@shared/info/info.module';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    InfoModule,
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule { }
