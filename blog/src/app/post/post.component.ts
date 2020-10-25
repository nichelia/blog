import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Route, Router, RouterOutlet } from '@angular/router';
import { AnchorService } from '@shared/anchor/anchor.service';
import { ROUTE_ANIMATION } from './post.animation';

@Component({
  animations: [ROUTE_ANIMATION],
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit
{
  title = 'post';
  routes: Route[];

  private readonly stickyClassName = 'mat-tab-nav-bar--sticky';

  @ViewChild('tabHeader', { read: ElementRef, static: true }) tabHeader: ElementRef;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void
  {
    this.anchorService.interceptClick(event);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void
  {
    const tabHeader = this.tabHeader.nativeElement as HTMLElement;
    const tabHeaderOffset = Math.ceil(tabHeader.offsetTop);
    const windowOffset = Math.ceil(window.pageYOffset);
    const hasStickyClass = tabHeader.classList.contains(this.stickyClassName);
    if (!hasStickyClass && windowOffset >= tabHeaderOffset)
    {
      tabHeader.classList.add(this.stickyClassName);
    }
    if (hasStickyClass && windowOffset < tabHeaderOffset)
    {
      tabHeader.classList.remove(this.stickyClassName);
    }
  }

  constructor(
    private anchorService: AnchorService,
    private router: Router)
  { }

  ngOnInit(): void
  {
    this.routes = this.router.config.filter(route => route.data && route.data.label);
  }

  handleFragment(): void
  {
    this.anchorService.scrollToAnchor();
  }

  getRouteAnimation(outlet: RouterOutlet): string
  {
    return outlet
      && outlet.activatedRouteData
      && outlet.activatedRouteData.label;
  }
}
