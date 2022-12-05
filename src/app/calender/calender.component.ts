import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// declare var FullCalendar: any;
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
})
export class CalenderComponent implements OnInit {
  ngOnInit() {
    
  }
  ngAfterViewInit() {
    this.loadStyleScript("assets/plugins/fullcalendar/fullcalendar.min.css")
    this.loadBasicStyleScript("assets/css/style.css")
    this.loadJquery("assets/js/jquery.min.js")
    this.loadDynmicallyScript("assets/plugins/jquery-ui/jquery-ui.min.js");
    this.loadFirstScript("assets/plugins/fullcalendar/fullcalendar.min.js")
    this.loadSecondScript("assets/plugins/fullcalendar/jquery.fullcalendar.js")
  }
  loadDynmicallyScript(js:any) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  loadFirstScript(js:any) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  loadSecondScript(js:any) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  loadStyleScript(js:any) {
    var script = document.createElement('link');
    script.href = js;
    script.rel = "stylesheet"
    // script.async = false;
    document.head.appendChild(script);
  }
  loadBasicStyleScript(js:any) {
    var script = document.createElement('link');
    script.href = js;
    script.rel = "stylesheet"
    // script.async = false;
    document.head.appendChild(script);
  }
  loadJquery(js:any) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  loadBootstrap(js:any) {
    var script = document.createElement('link');
    script.href = js;
    script.rel = "stylesheet"
    // script.async = false;
    document.head.appendChild(script);
  }
  loadBootstarpjs(js:any) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  loadPopperjs(js:any) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
}
