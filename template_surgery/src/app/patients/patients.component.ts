import { Component, OnInit } from "@angular/core";
import { Event, NavigationStart, Router } from "@angular/router";
import { CommonServiceService } from "./../common-service.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.css"],
})
export class PatientsComponent implements OnInit {
  splitVal:any;
  base = "Patients";
  page = "Dashboard";
  url;
  patientSidebar: boolean = false;
  breadcrum = true
  showSelect = false
  constructor(
    private router: Router,
    location: Location,
    public commonService: CommonServiceService
  ) {
     if (
      router.url === '/patients/dashboard' ||
      router.url === '/patients/favourites' ||
      router.url === '/patients/settings' ||
      router.url === '/patients/dependent' ||
      router.url === '/patients/accounts' ||
      router.url === '/patients/orders' ||
      router.url === '/patients/medical-records' ||
      router.url === '/patients/medical-details' ||
      router.url === '/patients/patients-change-password'
    ) {
      this.patientSidebar = true;
    } else {
      this.patientSidebar = false;
    }
    if(router.url === '/patients/message'){
      this.breadcrum = false
    }else{
      this.breadcrum = true
    }
    
    if( router.url === '/patients/search-doctor'){
      this.showSelect = true
    }else{
      this.showSelect = false
    }
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (
          event.url === '/patients/dashboard' ||
          event.url === '/patients/favourites' ||
          event.url === '/patients/settings' ||
          event.url === '/patients/dependent' ||
          event.url === '/patients/accounts' ||
          event.url === '/patients/orders' ||
          event.url === '/patients/medical-records' ||
          event.url === '/patients/medical-details' ||
          event.url === '/patients/patients-change-password'
        ) {
          this.patientSidebar = true;
        } else {
          this.patientSidebar = false;
        }
      }
      //  if (event instanceof NavigationStart) {
      //   if (
      //     event.url === '/patients/chat-doctor' || router.url === 'patients/message'
          
      //   ) {
      //     this.breadcrum = false
      //   } else {
      //     this.breadcrum = true
      //   }
      // }
      if (event instanceof NavigationStart) {
        if (
          event.url === '/patients/search-doctor'
          
        ) {
          this.showSelect = true
        } else {
          this.showSelect = false
        }
      }
    });
    this.url = location.path();
    if (
      this.url === "/patients/dashboard" ||
      this.url === "/patients/favourites" ||
      this.url === "/patients/settings" 
    ) {
      this.patientSidebar = true;
    } else {
      this.patientSidebar = false;
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.splitVal = event.url.split("/");
        this.base = this.splitVal[1];
        this.page = this.splitVal[2];
      }
    });
  }
}
