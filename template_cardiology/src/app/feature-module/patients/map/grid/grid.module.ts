import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';
import { SharedModule } from 'src/app/shared/shared.index';

@NgModule({
  declarations: [GridComponent],
  imports: [CommonModule, GridRoutingModule, SharedModule],
})
export class GridModule {}
