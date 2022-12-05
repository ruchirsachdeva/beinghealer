import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonServiceService } from './../../common-service.service'


@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit {
  doctors: any = [];
  specialityList: any[] = [];
  types: any[] = []
  selDate:any;
  constructor(public commonService: CommonServiceService, public router: Router) { }
  images = [
    {
      path: 'assets/img/features/feature-01.jpg',
    },
    {
      path: 'assets/img/features/feature-02.jpg',
    },
    {
      path: 'assets/img/features/feature-03.jpg',
    },
    {
      path: 'assets/img/features/feature-04.jpg',
    },
  ];
  ngOnInit(): void {
    this.getDoctors();
    // this.getspeciality();
  }

  getDoctors() {
    this.commonService.getDoctors().subscribe(res => {
      this.doctors = res;

      this.specialityList = this.toCheckedLabels(res, r => r.specializations)
      this.types = this.toCheckedLabels(res, r => r.type)
    })
  }

  private toCheckedLabels(res: any[], callback: (r: any) => any) {
    return [...new Set(res.flatMap(callback))].map(s => {
      return {label: s, isChecked: true}
    });
  }

  intersects(arr1: number[], arr2: number[]): boolean {

    return arr1.find((val1) => {
      for (let val2 of arr2) {
        if (val1 === val2) {
          return true;
        }
      }
      return false;
    }) !== undefined

  }

  search() {
    this.doctors = this.doctors.filter((a:any) => this.types.filter(t=>t.isChecked).map(t=>t.label).includes(a.type) &&
      this.intersects(this.specialityList.filter(s=>s.isChecked).map(t=>t.label), a.specializations))
  }

  bookAppointment(id:any) {
    // if((localStorage.getItem('auth') === 'true') && (localStorage.getItem('patient') === 'true')) {
    this.router.navigateByUrl('/patients/booking?id=' + id);
    // } else {
    //   this.router.navigate(['/']);
    // }
  }

}
