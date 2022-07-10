import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AdminGuard,
  AuthenticateGuard,
  BlogGuard,
  DoctorGuard,
  PageGuard,
  PatientGuard,
} from '../core/guard/guard.index';
import { ErrorNotFoundComponent } from './common/error-not-found/error-not-found.component';
import { FeatureModuleComponent } from './feature-module.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FeatureModuleComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'doctor',
        canActivate: [DoctorGuard],
        loadChildren: () =>
          import('./doctor/doctor.module').then((m) => m.DoctorModule),
      },
      {
        path: 'patients',
        canActivate: [PatientGuard],
        loadChildren: () =>
          import('./patients/patients.module').then((m) => m.PatientsModule),
      },
      {
        path: 'admin',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'login',
        canActivate: [AuthenticateGuard],
        loadChildren: () =>
          import('./auth/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'register',
        canActivate: [AuthenticateGuard],
        loadChildren: () =>
          import('./auth/register/register.module').then(
            (m) => m.RegisterModule
          ),
      },
      {
        path: 'forgot-password',
        canActivate: [AuthenticateGuard],
        loadChildren: () =>
          import('./auth/forgot-password/forgot-password.module').then(
            (m) => m.ForgotPasswordModule
          ),
      },
      {
        path: 'pages',
        canActivate: [PageGuard],
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'blogs',
        canActivate: [BlogGuard],
        loadChildren: () =>
          import('./blogs/blogs.module').then((m) => m.BlogsModule),
      },
      {
        path: 'doctor-register',
        canActivate: [AuthenticateGuard],
        loadChildren: () =>
          import('./auth/doctorregister/doctorregister.module').then(
            (m) => m.DoctorregisterModule
          ),
      },
    ],
  },
  {
    path: '404',
    component: ErrorNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureModuleRoutingModule {}
