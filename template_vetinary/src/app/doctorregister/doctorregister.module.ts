import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorregisterRoutingModule } from './doctorregister-routing.module';
import { DoctorregisterComponent } from './doctorregister.component';


@NgModule({
  declarations: [DoctorregisterComponent],
  imports: [
    CommonModule,
    DoctorregisterRoutingModule
  ]
})
export class DoctorregisterModule { }
