import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';

import { PatientsComponent } from './patients.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [PatientsComponent, SidemenuComponent],
  imports: [CommonModule, PatientsRoutingModule, NgbModule,HomeModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PatientsModule {}
