import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  splitVal:any;
  url:any;
  base:any;
  page:any;
  showSite:any;
  constructor(public router: Router, private cdr: ChangeDetectorRef) {
    console.log(this.router.url)
    this.splitVal = this.router.url.split('/');
    this.base = this.splitVal[1];
    this.page = this.splitVal[2];
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.splitVal = event.url.split('/');
        this.base = this.splitVal[1];
        this.page = this.splitVal[2];
        if (this.base === 'doctor' && this.page === 'social-media') {
          this.showSite = true;
        } else {
          this.showSite = false;
        }
        if (this.base === 'doctor' && this.page === 'doctor-change-password') {
          this.showSite = true;
        } else {
          this.showSite = false;
        }
      }
     
    });
  }

  ngOnInit(): void {
    if (this.base === 'doctor' && this.page === 'social-media') {
      this.showSite = true;
    } else {
      this.showSite = false;
    }
    if (this.base === 'doctor' && this.page === 'doctor-change-password') {
      this.showSite = true;
    } else {
      this.showSite = false;
    }
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.splitVal = event.url.split('/');
        this.base = this.splitVal[1];
        this.page = this.splitVal[2];
        if (this.base === 'doctor' && this.page === 'social-media') {
          this.showSite = true;
        } else {
          this.showSite = false;
        }
        if (this.base === 'doctor' && this.page === 'doctor-change-password') {
          this.showSite = true;
        } else {
          this.showSite = false;
        }
      }
     
    });
   
    // if (this.base === 'doctor' && this.page === 'patients') {
    //   this.showSite = false;
    // } else {
    //   this.showSite = true;
    // }
  }
  // ngAfterViewInit() {
  //   this.cdr.detectChanges();
  // }
}
