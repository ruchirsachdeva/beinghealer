import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages.component';
import { SharedModule } from 'src/app/shared/shared.index';

@NgModule({
  declarations: [MessagesComponent],
  imports: [CommonModule, SharedModule, MessagesRoutingModule],
})
export class MessagesModule {}
