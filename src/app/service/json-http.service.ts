import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {StorageService} from "./storage.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthenticationService} from "./authentication.service";
import {TokenInfo} from "../model/domains";

var mergeAuthToken = (jwt: any, options: any = {}, contentType: string|string[] = 'application/json') => {
  var headers_object = new HttpHeaders(options.headers);
  headers_object = headers_object.set('Content-Type', contentType);

  if (jwt) {
    headers_object =  headers_object.set('authorization', 'Bearer ' + jwt);
  }

  const httpOptions = {
    headers: headers_object
  };
  return httpOptions;
};

@Injectable({
  providedIn: 'root'
})
export class JsonHttpService {

  constructor(private http: HttpClient, private storage: StorageService) {
  }

  get<T>(url: string, options: any = {}, contentType: string|string[] = 'application/json'): Observable<T> {
    return this.http.get<T>(url, mergeAuthToken(this.storage.getToken(), options));
  }

  post<T>(url: string, body: any, options: any = {}, contentType: string|string[] = 'application/json'): Observable<T> {
    return this.http.post<T>(url, body, mergeAuthToken(this.storage.getToken(), options));
  }

  put<T>(url: string, body: any, options: any = {}, contentType: string|string[] = 'application/json'): Observable<T> {
    return this.http.put<T>(url, body, mergeAuthToken(this.storage.getToken(), options));
  }

  delete<T>(url: string, options: any = {}): Observable<T> {
    return this.http.delete<T>(url, mergeAuthToken(this.storage.getToken(), options));
  }

  patch<T>(url: string, body: any, options: any = {}): Observable<T> {
    return this.http.patch<T>(url, body, mergeAuthToken(this.storage.getToken(), options));
  }

  head<T>(url: string, options: any = {}): Observable<T> {
    return this.http.head<T>(url, mergeAuthToken(this.storage.getToken(), options));
  }
}
