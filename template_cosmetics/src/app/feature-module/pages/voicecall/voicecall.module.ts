import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoicecallRoutingModule } from './voicecall-routing.module';
import { VoicecallComponent } from './voicecall.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [VoicecallComponent],
  imports: [CommonModule, VoicecallRoutingModule,SharedModule],
})
export class VoicecallModule {}
