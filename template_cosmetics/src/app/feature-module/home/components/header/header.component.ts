import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Event, NavigationStart, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from 'src/app/core/service/service.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  auth: boolean = false;
  isPatient: boolean = false;
  splitVal: any;
  url: any;
  base: any;
  page: any;
  pagesub: any;
  showLoginContact = false;
  $menuItem!: JQuery<HTMLElement>;
  constructor(
    private cdr: ChangeDetectorRef,
    public router: Router,
    location: Location,
    public commonService: CommonService
  ) {
    this.commonService.message.subscribe((res) => {
      if (res === 'patientLogin') {
        this.auth = true;
        // this.isPatient = true;
      }
      if (res === 'doctorLogin') {
        this.auth = true;
        // this.isPatient = false;
      }
      if (res === 'logout') {
        this.auth = false;
        this.isPatient = false;
      }
    });
  }

  ngOnInit(): void {
    // Sidebar

    if (window.innerWidth <= 991) {
      var Sidemenu = () => {
        this.$menuItem = $('.main-nav a');
      };

      function init() {
        var $this = Sidemenu;
        $('.main-nav a').on('click', function (e) {
          if ($(this).parent().hasClass('has-submenu')) {
            e.preventDefault();
          }
          if (!$(this).hasClass('submenu')) {
            $('ul', $(this).parents('ul:first')).slideUp(350);
            $('a', $(this).parents('ul:first')).removeClass('submenu');
            $(this).next('ul').slideDown(350);
            $(this).addClass('submenu');
          } else if ($(this).hasClass('submenu')) {
            $(this).removeClass('submenu');
            $(this).next('ul').slideUp(350);
          }
        });
      }

      // Sidebar Initiate
      init();
    }
    if (localStorage.getItem('auth') === 'true') {
      this.auth = true;
      this.isPatient =
        localStorage.getItem('patient') === 'true' ? true : false;
    }
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.splitVal = event.url.split('/');
        this.base = this.splitVal[1];
        this.page = this.splitVal[2];
        this.pagesub = this.splitVal[3];
        if (event.url == '/home' || event.url == '/') {
          this.auth = false;
        } else if (event.url == '/doctor/doctor-register') {
          this.auth = false;
        } else if (event.url == '/blank') {
          this.auth = false;
        } else if (event.url == '/blog/details') {
          this.auth = false;
        } else if (event.url == '/patients/doctor-profile') {
          this.auth = false;
        }
        // if (this.base === 'doctor'){
        //   this.isPatient = false;
        // }
        // else if (this.base === 'patients'){
        //   this.isPatient = true;
        // }
        else if (event.url == '/patients/booking') {
          this.auth = false;
        } else if (event.url == '/patients/checkout') {
          this.auth = false;
        } else if (event.url == '/patients/success') {
          this.auth = false;
        } else if (event.url == '/patients/checkout') {
          this.auth = false;
        } else if (event.url == '/patients/component') {
          this.auth = false;
        } else if (event.url == '/patients/search-doctor') {
          this.auth = false;
        } else if (event.url == '/patients/doctor-profile') {
          this.auth = false;
        } else if (event.url == '/patients/map-grid') {
          this.auth = false;
        } else if (event.url == '/patients/map-list') {
          this.auth = false;
        } else if (event.url == '/pages/privacy-policy') {
          this.auth = false;
        } else if (event.url == '/login') {
          this.auth = false;
        } else if (event.url == '/register') {
          this.auth = false;
        } else if (event.url == '/blank') {
          this.auth = false;
        } else if (event.url == '/forgot-password') {
          this.auth = false;
        } else if (event.url == '/blog/details') {
          this.auth = false;
        } else if (event.url == '/blog/list') {
          this.auth = false;
        } else if (event.url == '/blog/') {
          this.auth = false;
        } else if (event.url == '/home') {
          this.auth = false;
        } else if (event.url == '/blog/blog-grid') {
          this.auth = false;
        } else {
          this.auth = true;
        }

        if (this.base === 'change-password') {
          this.isPatient = true;
        } else {
          this.isPatient = false;
        }
        if (
          (this.base === 'doctor' && this.page === 'social-media') ||
          this.page === 'doctor-change-password' ||
          this.page === 'change-password' ||
          this.page === 'privacy-policy' ||
          (this.base === 'patients' && this.page === 'add-billing') ||
          (this.base === 'patients' && this.page === 'add-prescription') ||
          (this.base === 'patients' && this.page === 'edit-billing') ||
          (this.base === 'patients' && this.page === 'edit-prescription')
        ) {
          this.showLoginContact = true;
        } else {
          this.showLoginContact = false;
        }
        if (this.base === 'doctor') {
          this.isPatient = false;
        } else if (this.base === 'patients') {
          this.isPatient = true;
        }
      }
      if (event instanceof NavigationEnd) {
        $('html').removeClass('menu-opened');
        $('.sidebar-overlay').removeClass('opened');
        $('main-wrapper').removeClass('slide-nav');
      }
    });

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        $('html').removeClass('menu-opened');
        $('.sidebar-overlay').removeClass('opened');
        $('.main-wrapper').removeClass('slide-nav');
      }
    });
    // if(this.router.url === '/home'){
    //   this.auth = false;
    // } else {
    //   this.auth = true;
    // }
    // if(this.router.url === '/doctor/doctor-register'){
    //   this.auth = false;
    // } else {
    //   this.auth = true;
    // }
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.loadDynmicallyScript('assets/js/script.js');
  }
  loadDynmicallyScript(js: any) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.head.appendChild(script);
    script.onload = () => this.doSomethingWhenScriptIsLoaded();
  }
  doSomethingWhenScriptIsLoaded() {}
  change(name: any) {
    this.page = name;
    this.commonService.nextmessage('main');
  }
  addStyle(val: any) {}

  logout() {
    localStorage.clear();
    this.auth = false;
    this.isPatient = false;
    this.router.navigate(['/login']);
  }

  home() {
    this.commonService.nextmessage('main');
    this.router.navigateByUrl('/').then(() => {
      this.router.navigate(['/']);
    });
  }

  navigate(name: any) {
    this.page = name;
    if (name === 'Admin') {
      localStorage.setItem('admin', 'admin');
      this.router.navigate(['/admin']);
      this.commonService.nextmessage('admin');
    }
  }
}
