import { Component, OnInit } from '@angular/core';
import {CommonServiceService  } from './../../common-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  appointments:any ;
  patients:any ;

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
       
      })
  }

  getPatients() {
    this.commonService.getpatients()
    .subscribe(res=>{
      this.patients = res;
    })
  }


 
}
