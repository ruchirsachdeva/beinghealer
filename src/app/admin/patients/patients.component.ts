import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CommonServiceService } from '../../common-service.service';
import * as $ from 'jquery';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective)
  public dtElement!: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  patientsList: any = [];
  errorMessage!: string;

  constructor(public commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.dtOptions = {
      // ... skipped ...
      pageLength: 10,
      dom: 'lrtip',
    };
    this.getPatients();
  }

  getPatients() {
    this.commonService.getpatients().subscribe(
      (res) => {
        this.patientsList = res;
        this.dtTrigger.next(this.dtOptions);
        // $(function () {
        //   $("table").DataTable();
        // });
      },
      (error) => (this.errorMessage = <any>error)
    );
  }
  // destroy data table when leaving
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
