import { Component, OnInit,OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { CommonService } from 'src/app/core/service/service.index';

@Component({
  selector: 'app-videocall',
  templateUrl: './videocall.component.html',
  styleUrls: ['./videocall.component.css']
})
export class VideocallComponent implements OnInit,OnDestroy {

  constructor(private location:Location,public commonSerivce: CommonService) { }

  ngOnInit(): void {
     this.commonSerivce.nextmessage('chat');
  }

  ngOnDestroy() {
    this.commonSerivce.nextmessage('');
  }

  back() {
  	 this.location.back()
  }

}
