import { Component, OnInit } from '@angular/core';
import {UserService} from "../core/services/user.service";
import {User} from "../core/domains";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  users: User[];
  totalPages: number;
  page: number;

  constructor(private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.page = +(params['page'] || 1);
      this.list(this.page);
    });
  }


  private list(page: number) {
    this.userService.list({page: page, size: 5})
      .subscribe(usersPage => {
        this.users = usersPage.content;
        this.totalPages = usersPage.totalPages;
      }, e => {})
    ;
  }

}
