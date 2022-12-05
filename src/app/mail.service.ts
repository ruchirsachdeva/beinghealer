import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';


const templateParams = {
  from_name: 'Ruchir',
  to_name: 'Enquiry team',
  message: 'Check this out!',
  reply_to: 'ruchirsachdeva@yahoo.com'
};

export interface Message {
  name: string;
  email: string;
  message: string;
}


@Injectable({
  providedIn: 'root'
})
export class MailService {

  params = templateParams

  constructor() {
    emailjs.init('user_j1poPFQiQL7NeK76EVAuH');
  }

  send(message: Message): Promise<string> {
    if(!this.validEmail(message.email)) {
      return new Promise<string>(()=>{
        throw "Invalid email address"
      })
    }
    this.params = {
      from_name: message.name,
      to_name: 'Being healer team',
      message: message.message,
      reply_to: message.email
    }
    return emailjs.send('ruchir-gmail', 'template_y5dkc0b', this.params)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        return ('SUCCESS!')
      }, (err) => {
        console.log('FAILED...', err);
        throw 'FAILED...'
      });
  }

  public validEmail(email: string) {
    if(email!=''){
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      console.log(re.test(String(email).toLowerCase()))
      if (re.test(String(email).toLowerCase())) {
        return true
      }
    }
    return false;
  }
}
