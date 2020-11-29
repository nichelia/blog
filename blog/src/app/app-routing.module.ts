import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', loadChildren: './posts/posts.module#PostsModule' },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',           // scrolls to the anchor element when the URL has a fragment
    scrollOffset: [0, 64],                // scroll offset when scrolling to an element (optional)
    scrollPositionRestoration: 'enabled', // restores the previous scroll position on backward navigation
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
