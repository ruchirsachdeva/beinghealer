import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { SharedModule } from 'src/app/shared/shared.index';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [CommonModule, SharedModule, CheckoutRoutingModule],
})
export class CheckoutModule {}
