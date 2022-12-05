import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormMaskRoutingModule } from './form-mask-routing.module';
import { RouterModule } from '@angular/router';
import { FormMaskComponent } from './form-mask.component';

@NgModule({
  declarations: [FormMaskComponent],
  imports: [
    CommonModule,
    FormMaskRoutingModule,
    RouterModule
  ]
})
export class FormMaskModule { }
