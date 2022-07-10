import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizondalFormRoutingModule } from './horizondal-form-routing.module';
import { HorizondalFormComponent } from './horizondal-form.component';
import { SharedModule } from 'src/app/shared/shared.index';

@NgModule({
  declarations: [HorizondalFormComponent],
  imports: [CommonModule, HorizondalFormRoutingModule, SharedModule],
})
export class HorizondalFormModule {}
