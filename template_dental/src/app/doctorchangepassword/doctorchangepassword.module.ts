import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorchangepasswordRoutingModule } from './doctorchangepassword-routing.module';
import { DoctorchangepasswordComponent } from './doctorchangepassword.component';


@NgModule({
  declarations: [DoctorchangepasswordComponent],
  imports: [
    CommonModule,
    DoctorchangepasswordRoutingModule
  ]
})
export class DoctorchangepasswordModule { }
