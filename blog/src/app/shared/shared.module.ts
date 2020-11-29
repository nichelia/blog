import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AfsModule } from "./afs.module";
import { MatModule } from "./mat.module";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AfsModule,
    MatModule,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    AfsModule,
    MatModule,
  ],
})
export class SharedModule { }
