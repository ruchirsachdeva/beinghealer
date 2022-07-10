import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationRoutingModule } from './form-validation-routing.module';
import { FormValidationComponent } from './form-validation.component';
import { SharedModule } from 'src/app/shared/shared.index';

@NgModule({
  declarations: [FormValidationComponent],
  imports: [CommonModule, FormValidationRoutingModule, SharedModule],
})
export class FormValidationModule {}
