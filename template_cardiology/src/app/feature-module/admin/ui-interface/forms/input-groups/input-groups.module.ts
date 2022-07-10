import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputGroupsRoutingModule } from './input-groups-routing.module';
import { RouterModule } from '@angular/router';
import { InputGroupsComponent } from './input-groups.component';
import { SharedModule } from 'src/app/shared/shared.index';

@NgModule({
  declarations: [InputGroupsComponent],
  imports: [CommonModule, InputGroupsRoutingModule, SharedModule],
})
export class InputGroupsModule {}
