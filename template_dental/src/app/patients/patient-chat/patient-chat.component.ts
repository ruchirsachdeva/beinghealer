import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/common-service.service';
@Component({
  selector: 'app-patient-chat',
  templateUrl: './patient-chat.component.html',
  styleUrls: ['./patient-chat.component.css']
})
export class PatientChatComponent implements OnInit {
name:any;
  constructor(
    public router: Router,
    public commonSerivce: CommonServiceService
    ) { }

    ngOnInit(): void {
      this.commonSerivce.nextmessage('chat');
    }
  logout() {
    localStorage.clear();
 
    this.router.navigate(['/']);
  }

  navigate(name:any) {
    this.name = name;
    
  }

}
