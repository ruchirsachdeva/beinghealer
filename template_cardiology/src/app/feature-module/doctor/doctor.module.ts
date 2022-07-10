import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { StickySidebarDirective } from './sticky-sidebar.directive';
import { SharedModule } from 'src/app/shared/shared.index';

@NgModule({
  declarations: [DoctorComponent, SidemenuComponent, StickySidebarDirective],
  imports: [CommonModule, DoctorRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DoctorModule {}
