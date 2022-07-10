import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationRoutingModule } from './form-validation-routing.module';
import { RouterModule } from '@angular/router';
import { FormValidationComponent } from './form-validation.component';

@NgModule({
  declarations: [FormValidationComponent],
  imports: [
    CommonModule,
    FormValidationRoutingModule,
    RouterModule
  ]
})
export class FormValidationModule { }
