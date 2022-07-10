import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from 'src/app/core/service/service.index';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DoctorComponent implements OnInit {
  splitVal;
  url;
  base = 'Doctor';
  page = 'Dashboard';
  doctorSidebar: boolean = true;
  constructor(
    private router: Router,
    location: Location,
    public commonService: CommonService 
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/doctor/message'  || event.url === '/doctor/doctor-register') {
          this.doctorSidebar = false;
        } else {
          this.doctorSidebar = true;
        }
      }
    });
    this.url = location.path();
    this.splitVal = this.url.split('/');
        this.base = this.splitVal[1];
        this.page = this.splitVal[2];
    if(this.url === '/doctor/message' ||  this.url === '/doctor/doctor-register') {
      this.doctorSidebar = false;
    } else {
      this.doctorSidebar = true;
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
