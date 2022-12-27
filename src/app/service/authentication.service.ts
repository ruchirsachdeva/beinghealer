import {Injectable} from '@angular/core';
import {StorageService} from './storage.service';
import {JsonHttpService} from './json-http.service';
import {Router} from '@angular/router';

import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {Doctor, SignupForm, TokenInfo, User} from "../model/domains";
import {map} from "rxjs/operators";
import {CommonServiceService} from "../common-service.service";

// Reference takenn from https://jasonwatmore.com/post/2020/09/09/angular-10-role-based-authorization-tutorial-with-example
// https://jasonwatmore.com/post/2020/07/06/angular-10-communicating-between-components-with-observable-subject

// RxJS Subjects and Observables are used to store the current user object and notify other components when the user logs in and out of the app.
// Angular components can subscribe() to the public user: Observable property to be notified of changes, and notifications are sent when the this.userSubject.next() method is called in the login() and logout() methods, passing the argument to each subscriber.
// The RxJS BehaviorSubject is a special type of Subject that keeps hold of the current value and emits it to any new subscribers as soon as they subscribe, while regular Subjects don't store the current value and only emit values that are published after a subscription is created.
// For more info on component communication with RxJS see Angular 10 - Communicating Between Components with Observable & Subject.
//
// The login() method sends the user credentials to the API via an HTTP POST request for authentication.
// If successful the user object including a JWT auth token are stored in localStorage to keep the user logged in between page refreshes.
// The user object is then published to all subscribers with the call to this.userSubject.next(user);.
//
// The constructor() of the service initializes the userSubject with the user object from localStorage which enables the user to stay logged in between page refreshes or after the browser is closed.
// The public user property is then set to this.userSubject.asObservable(); which allows other components to subscribe to the user Observable but doesn't allow them to publish to the userSubject, this is so logging in and out of the app can only be done via the authentication service.
//
// The userValue getter provides a quick and easy way to get the value of the currently logged in user without having to subscribe to the user Observable.
// The logout() method removes the current user object from local storage and publishes null to the userSubject to notify all subscribers that the user has logged out.
// NOTE: If you don't like the idea of storing the current user details in local storage, all you need to do is change the 3 references to localStorage in this file. Other options are session storage, cookies, or you could simply not store the user details in the browser, although be aware that with this last option the user will be automatically logged out if they refresh the page.
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userSubject: BehaviorSubject<TokenInfo|null>;
  public user: Observable<TokenInfo|null>;

  constructor(private http: JsonHttpService, private storage: StorageService, private router: Router,
              private commonService: CommonServiceService) {
    this.userSubject = new BehaviorSubject<TokenInfo|null>(JSON.parse(localStorage.getItem('user')|| '{}'));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): TokenInfo|null {
    return this.userSubject.value;
  }

  public get isAdmin(): boolean|null {
    return this.hasRole('admin');
  }

  public get isHealer(): boolean|null {
    return this.hasRole('healer');
  }

  public get isPatient(): boolean|null {
    return this.hasRole('patient');
  }

  private hasRole(role: string) {
    return this.userSubject.value?.role?.indexOf(role) !== -1;
  }

  login(credentials: any) {
    return this.http.post<any>(`${environment.bootServer}login`, JSON.stringify({
      username: credentials.username,
      password: credentials.password
    }))
      .pipe(map(tokenInfo => {
        alert(tokenInfo);
        // store user details with jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(tokenInfo));
        this.userSubject.next(tokenInfo);
        return tokenInfo;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    // TODO check why null is complaining and should it be null or is new User() good ?
    this.userSubject.next(null);
    this.commonService.nextmessage('logout');
  }

  create(form: SignupForm) {
   return this.http.post<any>(`${environment.bootServer}signup`, form)
     .pipe(
       // map((clients: Client[]) => clients.map(client => client.address))
       map(tokenInfo => {
         localStorage.setItem('user', JSON.stringify(tokenInfo));
         this.userSubject.next(tokenInfo);
         return tokenInfo;
       })
     );

  }

  getBlogs(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.bootServer}blogs`);
      // .map((data: any) => {
      //   return data._embedded.organizations;
      // });
  }

  isAuthenticated(): boolean {
    // return this.storage.getItem('jwt') && true;
    return this.userValue !== null;
  }

  checkAuthentication() {
    if (this.isAuthenticated()) {
      alert('auth')
      localStorage.setItem('id', (this.userValue?.userId ?? '').toString());
      alert('auth-done')
      // this.toastr.success('', 'Login success!');
      if (this.isPatient) {
        alert('patient')
        this.commonService.nextmessage('patientLogin');
        this.router.navigate(['/patients/dashboard']);
      } else if (this.isHealer) {
        alert('healer')
        this.commonService.nextmessage('healerLogin');
        this.router.navigate(['/doctor/dashboard']);
      } else if (this.isAdmin) {
        alert('admin')
        this.commonService.nextmessage('adminLogin');
        this.router.navigate(['/admin/dashboard']);
      } else {
        alert('home')
        this.router.navigate(['/home']);
      }
    } else {
      alert('login')
      this.router.navigate(['/login']);
    }
  }

  getRoles(): string[] {
    let user = localStorage.getItem('user');
    if(user) {
    let parse: TokenInfo = JSON.parse(user);
      return parse.role
    }
    return [];
  }

}
