import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoicecallRoutingModule } from './voicecall-routing.module';
import { VoicecallComponent } from './voicecall.component';
import { SharedModule } from 'src/app/shared/shared.index';

@NgModule({
  declarations: [VoicecallComponent],
  imports: [CommonModule, VoicecallRoutingModule, SharedModule],
})
export class VoicecallModule {}
