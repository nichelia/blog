import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  post: Post;
  headings: Element[];

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.getPostData(id).subscribe((post) => (this.post = post));
  }

  onLoad(): void {
    this.stripContent();
    this.setHeadings();
  }

  private stripContent(): void {
    this.elementRef.nativeElement
      .querySelector('markdown')!
      .querySelectorAll(
        'markdown > p:nth-child(-n + 2), #ngx-markdown, #table-of-contents + ul, #table-of-contents'
      )
      .forEach((x) => x.remove());
  }

  private setHeadings(): void {
    const headings: Element[] = [];
    // Populate headings as sidenav links
    this.elementRef.nativeElement
      .querySelector('markdown')!
      .querySelectorAll('h2')
      .forEach((x) => {
        headings.push(x);
        x.style['padding-right'] = 'calc(var(--grid_gutter)*0.5)';
        x.style['margin-bottom'] = '20px';
        x.style['margin-top'] = '4.16667vw';
        x.style['font-size'] = 'var(--h6)';
        x.style['line-height'] = 'var(--h6-line_height)';
        x.style['letter-spacing'] = 'var(--h6-letter_spacing)';
      });

    // Remove title of markdown
    const title = this.elementRef.nativeElement.querySelector('markdown h1');
    if (title) {
      title.remove();
    }

    this.headings = headings;
  }
}
