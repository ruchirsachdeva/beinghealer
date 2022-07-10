import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { SharedModule } from 'src/app/shared/shared.index';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, MapRoutingModule, SharedModule],
})
export class MapModule {}
