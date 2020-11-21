import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PostService } from '../post.service';
import { PaginationService } from '@shared/pagination/pagination.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-frontpage',
  templateUrl: './post-frontpage.component.html',
  styleUrls: ['./post-frontpage.component.css'],
})
export class PostFrontpageComponent implements OnInit {
  posts: Observable<Post[]>;
  constructor(
    private postService: PostService,
    private paginationService: PaginationService
  ) {}

  ngOnInit() {
    this.paginationService.init('posts', 'datePublished', {
      reverse: true,
      prepend: false,
      limit: 13,
    });
    this.posts = this.paginationService.data;
  }
}
