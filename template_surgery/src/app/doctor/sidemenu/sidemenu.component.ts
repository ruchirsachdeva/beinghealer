import { Component, OnInit } from "@angular/core";
import {
  Event,
  NavigationStart,
  Router,
  ActivatedRoute,
} from "@angular/router";

import { CommonServiceService } from "./../../common-service.service";
declare const $: any;
@Component({
  selector: "app-sidemenu",
  templateUrl: "./sidemenu.component.html",
  styleUrls: ["./sidemenu.component.css"],
})
export class SidemenuComponent implements OnInit {
  name:any;
  splitVal:any;
  base:any;
  page:any;
  constructor(
    private router: Router,
    public commonService: CommonServiceService
  ) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (event instanceof NavigationStart) {
          this.splitVal = event.url.split("/");
          this.base = this.splitVal[1];
          this.page = this.splitVal[2];
        }
      }
    });
  }

  ngOnInit(): void {
    
  }

  logout() {
    localStorage.clear();
    this.commonService.nextmessage("logout");
    this.router.navigate(["/"]);
  }

  navigate(name:any) {
    this.name = name;
    this.commonService.nextmessage(name);
  }
}
