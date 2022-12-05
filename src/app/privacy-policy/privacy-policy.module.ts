import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyRoutingModule } from './privacy-policy-routing.module';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [
    CommonModule,
    PrivacyPolicyRoutingModule,
    RouterModule
  ]
})
export class PrivacyPolicyModule { }
