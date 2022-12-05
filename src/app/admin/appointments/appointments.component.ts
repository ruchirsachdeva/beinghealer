import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
})
export class AppointmentsComponent implements OnInit {
  datatable: any;
  @ViewChild(DataTableDirective)
  public dtElement!: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  constructor() {}

  ngOnInit(): void {
    // const table: any = $('table');
    // this.datatable = table.DataTable();
    this.dtOptions = {
      // ... skipped ...
      pageLength: 10,
      dom: 'lrtip',
    };
  }
}
