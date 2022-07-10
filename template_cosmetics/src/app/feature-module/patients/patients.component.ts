import { Component, OnInit } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from 'src/app/core/service/service.index';

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
  constructor(
    private router: Router,
    location: Location,
    public commonService:CommonService 
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (
          event.url === '/patients/dashboard' ||
          event.url === '/patients/favourites' ||
          event.url === '/patients/settings' ||
          event.url === '/patients/change-password' 
        ) {
          this.patientSidebar = true;
        } else {
          this.patientSidebar = false;
        }
      }
    });
    this.url = location.path();
    if (
      this.url === '/patients/dashboard' ||
      this.url === '/patients/favourites' ||
      this.url === '/patients/settings' ||
      this.url === '/patients/change-password' 
    ) {
      this.patientSidebar = true;
    } else {
      this.patientSidebar = false;
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
