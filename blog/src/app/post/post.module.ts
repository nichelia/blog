import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { ScrollspyNavLayoutModule } from '@shared/scrollspy-nav-layout/scrollspy-nav-layout.module';
import { SharedModule } from '@shared/shared.module';
import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';

@NgModule({
  imports: [
    PostRoutingModule,
    MarkdownModule.forChild(),
    ScrollspyNavLayoutModule,
    SharedModule,
  ],
  declarations: [PostComponent],
})
export class PostModule { }
