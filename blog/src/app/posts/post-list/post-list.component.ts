import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs';

import { PaginationService } from '@shared/pagination/pagination.service';
import { Post } from '../post'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>

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
        limit: 5,
      });
      this.posts = this.paginationService.data;
    }
  }

  loadMorePosts() {
    this.paginationService.more();
  }

}
