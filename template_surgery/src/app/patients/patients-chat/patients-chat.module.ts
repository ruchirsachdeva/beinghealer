import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsChatRoutingModule } from './patients-chat-routing.module';
import { PatientsChatComponent } from './patients-chat.component';


@NgModule({
  declarations: [PatientsChatComponent],
  imports: [
    CommonModule,
    PatientsChatRoutingModule
  ]
})
export class PatientsChatModule { }
