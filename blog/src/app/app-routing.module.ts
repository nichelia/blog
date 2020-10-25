import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: 'post', component: PostComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
