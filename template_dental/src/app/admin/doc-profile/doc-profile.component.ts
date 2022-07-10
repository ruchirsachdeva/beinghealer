import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doc-profile',
  templateUrl: './doc-profile.component.html',
  styleUrls: ['./doc-profile.component.css'],
})
export class DocProfileComponent implements OnInit {
  constructor(private Router: Router) {}
  changePass = false;
  personalDetails = true;
  ngOnInit(): void {}

  about() {
    this.changePass = false;
    this.personalDetails = true;
  }
  pass() {
    this.changePass = true;
    this.personalDetails = false;
  }

  submit() {
    this.Router.navigateByUrl('/admin/doc-profile');
  }
}
