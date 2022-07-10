import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { CommonService } from '../core/service/service.index';
import { Location } from '@angular/common';

@Component({
  selector: 'app-feature-module',
  templateUrl: './feature-module.component.html',
  styleUrls: ['./feature-module.component.css'],
})
export class FeatureModuleComponent implements OnInit {
  title = 'doccur';
  url: any;
  loadFooter = false;
  show: boolean = true;
  hideFooter: boolean = false;
  constructor(
    private changeDetector: ChangeDetectorRef,
    public Router: Router,
    location: Location,
    public commonServic: CommonService
  ) {
    Router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        if (event.url == '/404') {
          this.show = false;
          this.hideFooter = true;
        }
        if (
          event.url == '/login-page' ||
          event.url == '/forgot-password' ||
          event.url == '/Register'
        ) {
          document.body.classList.add('account-page');
          document.body.classList.remove('mat-typography');
        } else {
          document.body.classList.remove('account-page');
          document.body.classList.add('mat-typography');
        }
        if (event.url == '/map-grid') {
          this.hideFooter = true;
        }
        if (event.url == '/map-list') {
          this.hideFooter = true;
        }
        if (event.url == '/map-list') {
          this.hideFooter = true;
        }
        if (
          event.url == '/doctor/chat-doctor' ||
          event.url == '/patients/message'
        ) {
          document.body.classList.add('chat-page');
          document.body.classList.remove('mat-typography');
        } else {
          document.body.classList.remove('chat-page');
          document.body.classList.add('mat-typography');
        }
        if (event.url == '/video-call' || event.url == '/voice-call') {
          document.body.classList.add('call-page');
          document.body.classList.remove('mat-typography');
        } else {
          document.body.classList.remove('call-page');
          document.body.classList.add('mat-typography');
        }

        let split = event.url.split('/');
        let base: any = split[1];
        if (base != 'patients' || base != 'doctor' || base != 'admin') {
          this.commonServic.message.next('main');
        }
        if (base == 'admin') {
          this.commonServic.message.next('admin');
        }
      }
    });
    this.url = location.path();
    this.show = this.url.includes('admin') ? false : true;
    this.commonServic.message.subscribe((res) => {
      if (res === 'admin') {
        this.show = false;
        this.hideFooter = true;
      } else if (res === 'main') {
        this.show = true;
        this.hideFooter = false;
      } else if (res === 'chat') {
        this.show = true;
        this.hideFooter = true;
      } else if (res === 'chat-doctor') {
        this.show = true;
        this.hideFooter = true;
      } else {
        this.show = true;
        this.hideFooter = false;
      }
    });
  }

  ngOnInit() {
    setTimeout(() => (this.loadFooter = true), 2000);
  }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }
}
