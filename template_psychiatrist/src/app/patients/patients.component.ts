import { Component, OnInit } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { CommonServiceService } from './../common-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {
  splitVal:any;
  base = 'Patients';
  page = 'Dashboard';
  url;
  patientSidebar: boolean = false;
  showBreadcrums = true
  constructor(
    private router: Router,
    location: Location,
    public commonService: CommonServiceService
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (
          event.url === '/patients/dashboard' ||
          event.url === '/patients/favourites' ||
          event.url === '/patients/settings'  

        ) {
          this.patientSidebar = true;
          
        } else {
          this.patientSidebar = false;
         
        }
        if (
          event.url === '/patients/search-doctor' ||
          event.url === '/patients/message'   

        ) {
          this.showBreadcrums = false;
          
        } else {
          this.showBreadcrums = true;
         
        }
      }
    });
    this.url = location.path();
    if (
      this.url === '/patients/dashboard' ||
      this.url === '/patients/favourites' ||
      this.url === '/patients/settings' 
    ) {
      this.patientSidebar = true;
    } else {
      this.patientSidebar = false;
    }
    if (
      this.url === '/patients/search-doctor' ||
      this.url === '/patients/message'   

    ) {
      this.showBreadcrums = false;
      
    } else {
      this.showBreadcrums = true;
     
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.splitVal = event.url.split('/');
        this.base = this.splitVal[1];
        this.page = this.splitVal[2];
      }
    });
  }
}
