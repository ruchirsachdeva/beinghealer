import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTablesRoutingModule } from './basic-tables-routing.module';
import { RouterModule } from '@angular/router';
import { BasicTablesComponent } from './basic-tables.component';
import { SharedModule } from 'src/app/shared/shared.index';

@NgModule({
  declarations: [BasicTablesComponent],
  imports: [CommonModule, BasicTablesRoutingModule, SharedModule],
})
export class BasicTablesModule {}
