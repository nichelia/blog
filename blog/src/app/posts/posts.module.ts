import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { FooterModule } from '@shared/footer/footer.module';
import { NavModule } from '@shared/nav/nav.module';
import { ScrollspyNavLayoutModule } from '@shared/scrollspy-nav-layout/scrollspy-nav-layout.module';
import { SharedModule } from '@shared/shared.module';
import { PaginationModule } from '@shared/pagination/pagination.module';
import { PostsRoutingModule } from './posts-routing.module';

import { PostService } from './post.service';

import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostFrontpageComponent } from './post-frontpage/post-frontpage.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [
    PostDetailComponent,
    PostCardComponent,
    PostFrontpageComponent,
    PostListComponent,
  ],
  imports: [
    FooterModule,
    MarkdownModule.forChild(),
    NavModule,
    ScrollspyNavLayoutModule,
    SharedModule,
    PaginationModule,
    PostsRoutingModule,
  ],
  providers: [PostService],
})
export class PostsModule {}
