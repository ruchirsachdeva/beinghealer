import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorComponent,
    children: [
      {
        path: '404',
        loadChildren: () =>
          import('./error-first/error-first.module').then(
            (m) => m.ErrorFirstModule
          ),
      },
      {
        path: '500',
        loadChildren: () =>
          import('./error-second/error-second.module').then(
            (m) => m.ErrorSecondModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
