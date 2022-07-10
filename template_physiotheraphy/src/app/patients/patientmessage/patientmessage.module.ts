import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientmessageRoutingModule } from './patientmessage-routing.module';
import { PatientmessageComponent } from './patientmessage.component';


@NgModule({
  declarations: [PatientmessageComponent],
  imports: [
    CommonModule,
    PatientmessageRoutingModule
  ]
})
export class PatientmessageModule { }
