import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchDoctorRoutingModule } from './search-doctor-routing.module';
import { SearchDoctorComponent } from './search-doctor.component';
import { SharedModule } from 'src/app/shared/shared.index';

@NgModule({
  declarations: [SearchDoctorComponent],
  imports: [
    CommonModule,
    SearchDoctorRoutingModule,
    SharedModule,
  ],
})
export class SearchDoctorModule {}
