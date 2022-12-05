import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputGroupsRoutingModule } from './input-groups-routing.module';
import { RouterModule } from '@angular/router';
import { InputGroupsComponent } from './input-groups.component';

@NgModule({
  declarations: [InputGroupsComponent],
  imports: [
    CommonModule,
    InputGroupsRoutingModule,
    RouterModule
  ]
})
export class InputGroupsModule { }
