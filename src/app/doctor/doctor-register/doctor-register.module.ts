import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRegisterRoutingModule } from './doctor-register-routing.module';
import { DoctorRegisterComponent } from './doctor-register.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [DoctorRegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    DoctorRegisterRoutingModule
  ]
})
export class DoctorRegisterModule { }
