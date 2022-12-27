import { Component, OnInit } from '@angular/core';
import {RegisterComponent} from "../../register/register.component";
import {ToastrService} from "ngx-toastr";
import {CommonServiceService} from "../../common-service.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication.service";

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent extends RegisterComponent {

  constructor(
    private toastrs: ToastrService,
    private commonServices: CommonServiceService,
    private authenticationService: AuthenticationService,
    private routers: Router) {
    super(toastrs, commonServices, authenticationService, routers);
  }


  override ngOnInit(): void {
  super.ngOnInit();
    this.isPatient = false;
  }

}
