import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapListRoutingModule } from './map-list-routing.module';
import { MapListComponent } from './map-list.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [MapListComponent],
  imports: [
    CommonModule,
    MapListRoutingModule,
    GoogleMapsModule
  ],
})
export class MapListModule {}
