import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientchatRoutingModule } from './patientchat-routing.module';
import { PatientchatComponent } from './patientchat.component';


@NgModule({
  declarations: [PatientchatComponent],
  imports: [
    CommonModule,
    PatientchatRoutingModule
  ]
})
export class PatientchatModule { }
