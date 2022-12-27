import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonServiceService } from './../../common-service.service';
import {AuthenticationService} from "../../service/authentication.service";

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  name:any;
  constructor(
    private router: Router,
    public commonService: CommonServiceService,
    public authService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
    this.commonService.nextmessage('logout');
    this.router.navigate(['/']);
  }

  navigate(name:any) {
    this.name = name;
    this.commonService.nextmessage(name);
  }
}
