import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ForgotPasswordModule } from '../pages/authendication/forgot-password/forgot-password.module';
import { SharedModule } from 'src/app/shared/shared.index';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ForgotPasswordModule,
    SharedModule,
  ],
})
export class DashboardModule {}
