import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

import { CommonServiceService } from "./../../common-service.service";

@Component({
  selector: "app-appointments",
  templateUrl: "./appointments.component.html",
  styleUrls: ["./appointments.component.css"],
})
export class AppointmentsComponent implements OnInit {
  list: any = [];
  modalRef!: BsModalRef;
  patientId:any;
  appointments: any = [];
  patients: any = [];
  appointmentId:any;
  constructor(
    public commonService: CommonServiceService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getPatients();
    this.getAppointments();
    this.list = this.commonService.getJSON();
    this.list = this.list.filter((a:any) => a.status === 0);
  }

  openModal(template: TemplateRef<any>, appointment:any) {
    this.appointmentId = appointment;
    this.modalRef = this.modalService.show(template, {
      class: "modal-sm modal-dialog-centered",
    });
  }

  confirm(value:any) {
    delete this.appointmentId["patients"];
    let data = {
      ...this.appointmentId,
    };
    data["status"] = "accept";
    this.commonService.updateAppointment(data, data.id).subscribe((res) => {
      this.modalRef.hide();
      this.appointments = this.appointments.filter((a:any) => a.id != data.id);
      this.getPatients();
      this.getAppointments();
    });
  }

  decline() {
    delete this.appointmentId["patients"];
    let data = {
      ...this.appointmentId,
    };
    data["status"] = "decline";
    this.commonService.updateAppointment(data, data.id).subscribe((res) => {
      this.modalRef.hide();
      this.appointments = this.appointments.filter((a:any) => a.id != data.id);
      this.getPatients();
      this.getAppointments();
    });
  }

  getAppointments() {
    this.commonService.getAppointments().subscribe((res) => {
      this.appointments = res;
      let scope = this;
      this.appointments.forEach((index:any) => {
        let filter = scope.patients.filter((a:any) => a.key === index.patient_key);
        if (filter.length != 0) {
          index["patients"] = filter[0];
        }
      });
      this.appointments = this.appointments.filter(
        (a:any) => a.status === "active"
      );
    });
  }

  getPatients() {
    this.commonService.getpatients().subscribe((res) => {
      this.patients = res;
    });
  }
}
