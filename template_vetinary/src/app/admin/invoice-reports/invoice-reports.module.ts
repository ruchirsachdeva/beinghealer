import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { InvoiceReportsRoutingModule } from './invoice-reports-routing.module';
import { InvoiceReportsComponent } from './invoice-reports.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InvoiceReportsComponent],
  imports: [
    CommonModule,
    InvoiceReportsRoutingModule,
    DataTablesModule,
    RouterModule,
  ]
})
export class InvoiceReportsModule { }
