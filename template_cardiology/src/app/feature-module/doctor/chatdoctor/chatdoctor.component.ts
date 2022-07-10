import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/service/service.index';
@Component({
  selector: 'app-chatdoctor',
  templateUrl: './chatdoctor.component.html',
  styleUrls: ['./chatdoctor.component.css'],
})
export class ChatdoctorComponent implements OnInit {
  constructor(public commonSerivce: CommonService) {}

  ngOnInit(): void {
    this.commonSerivce.nextmessage('chat-doctor');
  }
  ngOnDestroy() {
    this.commonSerivce.nextmessage('');
  }
}
