import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { CommonService } from 'src/app/core/service/service.index';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective)
  public dtElement!: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  speciality: any = [];
  modalRef!: BsModalRef;
  errorMessage!: string;
  name: any;
  id: any;
  key: any;
  constructor(
    private commonService: CommonService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      // ... skipped ...
      pageLength: 10,
      dom: 'lrtip',
    };
    this.getSpecialityList();
  }

  getSpecialityList() {
    this.commonService.getSpeciality().subscribe(
      (data: any) => {
        this.speciality = data;
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-lg modal-dialog-centered',
    });
    // this.name = "";
    // this.id = "";
    // this.key = "";
  }

  editModal(template: TemplateRef<any>, special: any) {
    this.id = special.id;
    // this.name = data[0].speciality;
    // this.id = data[0].id;
    // this.key = data[0].key;
    this.modalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered',
    });
  }

  deleteModal(template: TemplateRef<any>, special: any) {
    this.id = special.id;
    this.modalRef = this.modalService.show(template, {
      class: 'modal-sm modal-dialog-centered',
    });
  }

  save() {
    // let count = this.speciality.reverse()[0]['key'] + 1;
    // let id = this.speciality.reverse()[0]['id'] + 1
    // let params = {
    //   id : id,
    //   key : count,
    //   speciality : this.name
    // }
    // this.commonService.createSpeciality(params).subscribe((data : any[])=>{
    //   this.modalRef.hide();
    //   this.getSpecialityList();
    // })
    this.modalRef.hide();
  }

  update() {
    let params = {
      id: this.id,
      key: this.key,
      speciality: this.name,
    };
    // this.commonService.updateSpeciality(params,this.id).subscribe((data : any[])=>{
    //   this.modalRef.hide();
    //   this.getSpecialityList();
    // });
    this.modalRef.hide();
  }

  deleteSpeciality() {
    this.speciality = this.speciality.filter((a: any) => a.id !== this.id);
    this.commonService.deleteSpeciality(this.id).subscribe((data: any) => {
      this.modalRef.hide();
      this.getSpecialityList();
    });
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
