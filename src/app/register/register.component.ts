import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonServiceService } from '../common-service.service';

import { ToastrService } from 'ngx-toastr';
import {Doctor, Patient, Role, SignupForm} from "../model/domains";
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name = '';
  mobile = '';
  password = '';
  isPatient!: boolean;
  doctors: any = [];
  patients: any = [];
  reg_type = 'Patient Register';
  doc_patient = 'Are you a Doctor?';
  constructor(
    private toastr: ToastrService,
    private commonService: CommonServiceService,
    private  authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isPatient = true;
    this.getpatients();
    this.getDoctors();
  }

  changeRegType() {
    if (this.reg_type === 'Doctor Register') {
      this.reg_type = 'Patient Register';
      this.doc_patient = 'Are you a Doctor?';
      this.isPatient = true;
    } else {
      this.reg_type = 'Doctor Register';
      this.doc_patient = 'Not a Doctor?';
      this.isPatient = false;
    }
  }

  signup() {
    if (this.name === '' || this.mobile === '' || this.password === '') {
      this.toastr.error('', 'Please enter mandatory field!');
    } else {
      let params: SignupForm = {
        role: Role.Patient,
        email: this.name,
        username: this.name,
        password: this.password
      }
      if (!this.isPatient) {
       params.role = Role.Healer;
      }
      this.authService.create(params)
        .subscribe((res) => {
          alert(res);
            // this.toast.showSuccess('User successfully authenticated', 'Login successful');
            this.toastr.success('User successfully registered', 'Register successfully!');
            this.authService.checkAuthentication();
            // return true;
          },
          (err) => {
            let message = ''
            if(JSON.stringify(err).indexOf('DuplicateKeyException') !== -1) {
              message = 'Email already exists. Please choose a different email.'
            }
            this.toastr.error(message, 'Register unsuccessful!');
            // this.toast.showError('Please try again..', 'Login unsuccessful');
            // return false;
          })
    }
  }

  getDoctors() {
    this.commonService.getDoctors().subscribe((res) => {
      this.doctors = res;
    });
  }

  getpatients() {
    this.commonService.getpatients().subscribe((res) => {
      this.patients = res;
    });
  }
}
