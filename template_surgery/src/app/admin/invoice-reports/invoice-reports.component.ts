import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { CommonServiceService } from '../../common-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as $ from 'jquery';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-invoice-reports',
  templateUrl: './invoice-reports.component.html',
  styleUrls: ['./invoice-reports.component.css'],
})
export class InvoiceReportsComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective)
  public dtElement!: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  transactions: any = [];
  errorMessage!: string;
  modalRef!: BsModalRef;
  id:any;

  constructor(
    public commonService: CommonServiceService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getTransactions();
    this.dtOptions = {
      // ... skipped ...
      pageLength: 10,
      dom: 'lrtip',
    };
  }

  getTransactions() {
    this.commonService.getTransactions().subscribe(
      (res) => {
        this.transactions = res;
        // $(function () {
        //   $("table").DataTable();
        // });
        this.dtTrigger.next(this.dtOptions);
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  deleteModal(template: TemplateRef<any>, trans:any) {
    this.id = trans.id;
    this.modalRef = this.modalService.show(template, {
      class: 'modal-sm modal-dialog-centered',
    });
  }

  deleteReport() {
    this.transactions = this.transactions.filter((a:any) => a.id !== this.id);
    this.modalRef.hide();
    // this.commonService.deleteSpeciality(this.id).subscribe((data : any[])=>{
    //   this.modalRef.hide();
    //   this.getTransactions();
    // })
  }
  
  decline() {
    this.modalRef.hide();
  }

  
  // destroy data table when leaving
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
