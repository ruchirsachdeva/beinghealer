import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {JsonHttp} from "./json-http";
import {MailParams} from "../dto";

const url = '//localhost:8080/api/email';

@Injectable()
export class MailService {

  constructor(private http: JsonHttp) {
  }


  sendMail(params: MailParams): Observable<Response> {
    console.log(params);
    return this.http.post(url, params)
      .map((res) => res.json());
  }


}
