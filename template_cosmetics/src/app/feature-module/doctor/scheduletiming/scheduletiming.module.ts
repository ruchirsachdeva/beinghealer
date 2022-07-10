import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduletimingRoutingModule } from './scheduletiming-routing.module';
import { ScheduletimingComponent } from './scheduletiming.component';
@NgModule({
  declarations: [ScheduletimingComponent],
  imports: [CommonModule, ScheduletimingRoutingModule],
})
export class ScheduletimingModule {}
