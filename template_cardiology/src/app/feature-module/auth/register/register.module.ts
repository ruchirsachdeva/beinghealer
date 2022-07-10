import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { SharedModule } from 'src/app/shared/shared.index';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, SharedModule, RegisterRoutingModule],
})
export class RegisterModule {}
