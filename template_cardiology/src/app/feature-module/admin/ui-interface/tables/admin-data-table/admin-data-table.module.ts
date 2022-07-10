import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDataTableComponent } from './admin-data-table.component';
import { AdminDataTableRoutingModule } from './admin-data-table-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from 'src/app/shared/shared.index';

@NgModule({
  declarations: [AdminDataTableComponent],
  imports: [CommonModule, AdminDataTableRoutingModule, SharedModule],
})
export class AdminDataTableModule {}
