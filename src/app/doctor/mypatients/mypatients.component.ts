import { Component, OnInit } from '@angular/core';
import {CommonServiceService  } from './../../common-service.service';

@Component({
  selector: 'app-mypatients',
  templateUrl: './mypatients.component.html',
  styleUrls: ['./mypatients.component.css']
})
export class MypatientsComponent implements OnInit {
  
  appointments : any = [];
  patients :  any = [];
  
  constructor(public commonService:CommonServiceService) { }

  ngOnInit(): void {
    this.getPatients();
    this.getAppointments();

  }

  getAppointments() {
    this.commonService.getAppointments()
      .subscribe(res=>{
        this.appointments = res;
        let scope = this;
        this.appointments.forEach((index:any)=>{
          let filter = scope.patients.filter((a:any)=>a.key === index.patient_key);
          if(filter.length != 0) {
            index['patients'] = filter[0];
          }
        })
        this.appointments = this.appointments.filter((a:any)=>a.status === 'accept');
      })
  }

  getPatients() {
    this.commonService.getpatients()
    .subscribe(res=>{
      this.patients = res;
    })
  }

}
