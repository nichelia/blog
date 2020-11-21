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
  noMorePosts: Observable<boolean>;

  constructor(private paginationService: PaginationService) {}

  ngOnInit() {
    if (!this.paginationService.data)
    {
      this.paginationService.init('posts', 'datePublished');
    }
    this.posts = this.paginationService.data;
    this.noMorePosts = this.paginationService.done;
  }

  loadMorePosts() {
    this.paginationService.more();
  }

}
