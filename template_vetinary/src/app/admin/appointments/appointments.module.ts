import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from './appointments.component';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppointmentsComponent],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    DataTablesModule,
     RouterModule
  ]
})
export class AppointmentsModule { }
