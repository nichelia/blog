import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'get-started',
    loadChildren: () => import('../get-started/get-started.module').then(m => m.GetStartedModule),
    data: { label: 'Get Started' },
  },
  {
    path: 'cheat-sheet',
    loadChildren: () => import('../cheat-sheet/cheat-sheet.module').then(m => m.CheatSheetModule),
    data: { label: 'Cheat Sheet' },
  },
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
export class PostRoutingModule { }
