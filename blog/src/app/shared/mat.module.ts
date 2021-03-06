import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { PlatformModule } from '@angular/cdk/platform';

const matModules = [
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatListModule,
  MatExpansionModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatDividerModule,
  MatPasswordStrengthModule,
  PlatformModule,
];

@NgModule({
  imports: [matModules],
  exports: [matModules]
})
export class MatModule { }
