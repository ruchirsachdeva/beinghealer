import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideocallRoutingModule } from './videocall-routing.module';
import { VideocallComponent } from './videocall.component';
import { SharedModule } from 'src/app/shared/shared.index';

@NgModule({
  declarations: [VideocallComponent],
  imports: [CommonModule, VideocallRoutingModule, SharedModule],
})
export class VideocallModule {}
