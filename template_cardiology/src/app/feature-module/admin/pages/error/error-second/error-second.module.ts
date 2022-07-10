import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorSecondRoutingModule } from './error-second-routing.module';
import { ErrorSecondComponent } from './error-second.component';
import { SharedModule } from 'src/app/shared/shared.index';

@NgModule({
  declarations: [ErrorSecondComponent],
  imports: [CommonModule, ErrorSecondRoutingModule, SharedModule],
})
export class ErrorSecondModule {}
