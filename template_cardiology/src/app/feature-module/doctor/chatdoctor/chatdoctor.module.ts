import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatdoctorRoutingModule } from './chatdoctor-routing.module';
import { ChatdoctorComponent } from './chatdoctor.component';


@NgModule({
  declarations: [ChatdoctorComponent],
  imports: [
    CommonModule,
    ChatdoctorRoutingModule
  ]
})
export class ChatdoctorModule { }
