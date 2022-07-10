import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: 'list',
        loadChildren: () =>
          import('./blog-list/blog-list.module').then((m) => m.BlogListModule),
      },
      {
        path: 'details',
        loadChildren: () =>
          import('./blog-details/blog-details.module').then(
            (m) => m.BlogDetailsModule
          ),
      },
      {
        path: 'grid',
        loadChildren: () =>
          import('./blog-grid/blog-grid.module').then((m) => m.BlogGridModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
