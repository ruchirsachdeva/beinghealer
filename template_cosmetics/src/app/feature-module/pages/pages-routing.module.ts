import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'blank',
        loadChildren: () =>
          import('./blank/blank.module').then((m) => m.BlankModule),
      },
      {
        path: 'video-call',
        loadChildren: () =>
          import('./videocall/videocall.module').then((m) => m.VideocallModule),
      },
      {
        path: 'voice-call',
        loadChildren: () =>
          import('./voicecall/voicecall.module').then((m) => m.VoicecallModule),
      },
      {
        path: 'calender',
        loadChildren: () =>
          import('./calender/calender.module').then((m) => m.CalenderModule),
      },
      {
        path: 'privacy-policy',
        loadChildren: () =>
          import('./privacy-policy/privacy-policy.module').then(
            (m) => m.PrivacyPolicyModule
          ),
      },
      {
        path: 'terms-conditions',
        loadChildren: () =>
          import('./terms-conditions/terms-conditions.module').then(
            (m) => m.TermsConditionsModule
          ),
      },
      {
        path: 'invoice', 
        loadChildren: () => 
        import('./invoice/invoice.module').then(
          (m) => m.InvoiceModule)
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
