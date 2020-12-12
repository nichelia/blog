import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { ThemeComponent } from './theme.component';
import { ColourSchemeService } from './colour-scheme.service';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  declarations: [ThemeComponent],
  exports: [ThemeComponent],
  providers: [ColourSchemeService],
})
export class ThemeModule { }
