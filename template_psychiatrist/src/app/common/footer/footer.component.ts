import { Component, OnInit } from '@angular/core';
import {MailService} from "../../mail.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  email!: string;

  constructor(
    public mailService: MailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  sendMessage() {
    if (this.email === '') {
      this.toastr.error('', 'Please enter your email');
    } else {
      let params = {
        name: "New subscriber",
        message: "This is a new subscription request",
        email: this.email
      }
      this.mailService.send(params).then((response) => {
        this.toastr.success(response, 'Subscription request sent successfully!');
        this.email = '';
      }, (err) => {
        this.toastr.error('There was a problem in sending subscription request!' + "  " + err);
      });

    }
  }

}
