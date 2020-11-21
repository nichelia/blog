import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs';

import { PostService } from '../post.service'
import { Post } from '../post'

@Component({
  selector: 'app-post-frontpage',
  templateUrl: './post-frontpage.component.html',
  styleUrls: ['./post-frontpage.component.css']
})
export class PostFrontpageComponent implements OnInit {
  posts: Observable<Post[]>
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts()
  }

  delete(id: string) {
    this.postService.delete(id)
  }

}
