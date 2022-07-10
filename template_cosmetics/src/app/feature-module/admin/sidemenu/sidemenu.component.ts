import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/service/service.index';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  page = 'Dashboard';
  showDropdown = true;
  public bellCollapsed = true;
  public userCollapsed = true;

  constructor(
    public router: Router,
    private commonService: CommonService
  ) {}
  ngOnInit(): void {}

  ngAfterViewInit() {
    this.loadDynmicallyScript('assets/admin/js/script.js');
  }
  loadDynmicallyScript(js:any) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.head.appendChild(script);
    script.onload = () => this.doSomethingWhenScriptIsLoaded();
  }

  doSomethingWhenScriptIsLoaded() {}
  change(name:any) {
    this.page = name;
    this.commonService.nextmessage('admin');
  }

  main() {
    this.commonService.nextmessage('main');
    // this.router.navigateByUrl('/',{ skipLocationChange: true }).then(()=>{
    //   window.location.reload('/')
    //      this.router.navigate(['/']);
    //   //;
    // })
  }
  clickLogout() {
    window.location.href = '/login-form';
  }
  
}
