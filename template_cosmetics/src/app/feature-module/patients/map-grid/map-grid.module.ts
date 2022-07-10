import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapGridComponent } from './map-grid.component';
import { MapGridRoutingModule } from './map-grid-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [MapGridComponent],
  imports: [
    CommonModule,
    MapGridRoutingModule,
    GoogleMapsModule
  ],
})
export class MapGridModule {}
