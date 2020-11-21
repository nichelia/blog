import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PaginationService } from '@shared/pagination/pagination.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-frontpage',
  templateUrl: './post-frontpage.component.html',
  styleUrls: ['./post-frontpage.component.css'],
})
export class PostFrontpageComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private paginationService: PaginationService) {}

  ngOnInit() {
    if (this.paginationService.data)
    {
      this.posts = this.paginationService.data;
    }
    else
    {
      this.paginationService.init('posts', 'datePublished', {
        reverse: true,
        prepend: false,
        limit: 13,
      });
      this.posts = this.paginationService.data;
    }
  }
}
