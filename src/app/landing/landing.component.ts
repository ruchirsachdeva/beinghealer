import { Component, OnInit } from '@angular/core';
import {UserService} from "../core/services/user.service";
import {User} from "../core/domains";
import {ActivatedRoute} from "@angular/router";
import isEmpty from "lodash/isEmpty";
import omitBy from "lodash/omitBy";
import values from "lodash/values";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {EMAIL_PATTERN} from "../core/forms/index";
import {MailService} from "../core/services/mail.service";
// send the message and get a callback with an error or details of the message that was sent


@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  users: User[];
  totalPages: number;
  page: number;
  myForm: FormGroup;
  from: FormControl;
  name: FormControl;
  message: FormControl;


  constructor(private userService: UserService,
              private mailService: MailService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
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

  send(params) {
    values(this.myForm.controls).forEach(c => c.markAsTouched());
    if (!this.myForm.valid) return;
    console.log(omitBy(params, isEmpty));
    this.mailService.sendMail(omitBy(params, isEmpty))
      .subscribe(response => {
        console.log('landing.component.ts#send()->response'+response);
      }, e => {
        console.log('landing.component.ts#send()->exception'+e);
      })
    ;
  }

  private initForm() {
    this.name = new FormControl(this.name!== null?this.name:'', Validators.compose([
      Validators.required,
      Validators.minLength(4),
    ]));
    this.from = new FormControl(this.from!== null?this.from:'', Validators.compose([
      Validators.required,
      Validators.pattern(EMAIL_PATTERN),
    ]));
    this.message = new FormControl('', Validators.compose([
      Validators.minLength(8),
    ]));
    this.myForm = new FormGroup({
      name: this.name,
      from: this.from,
      message: this.message,
    });//, AppValidators.match(this.password, this.passwordConfirmation
  }

}
