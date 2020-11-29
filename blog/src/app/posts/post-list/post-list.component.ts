import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs';

import { PaginationService } from '@shared/pagination/pagination.service';
import { PostService } from '../post.service'
import { Post } from '../post'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>
  noMorePosts: Observable<boolean>;
  loadingPosts: Observable<boolean>;

  constructor(private postService: PostService, private paginationService: PaginationService) {}

  ngOnInit() {
    this.paginationService.reset();
    this.paginationService.init('posts', 'datePublished');
    this.posts = this.paginationService.data;
    this.noMorePosts = this.paginationService.done;
    this.loadingPosts = this.paginationService.loading;
  }

  loadMorePosts() {
    this.paginationService.more();
  }

}
