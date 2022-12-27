import {Injectable} from '@angular/core';
import {Role} from "../model/domains";

@Injectable()
export class StorageService {

  constructor() {
  }

  setItem(key: any, value: any) {
    localStorage.setItem(key, value);
  }

  getItem(key: any) {
    return localStorage.getItem(key);
  }

  removeItem(key: any) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }

  getToken() {
    const tokenInfo = localStorage.getItem('user');
    return tokenInfo ? JSON.parse(tokenInfo)?.token : '';
  }

  isAuthenticated() {
    return localStorage.getItem('user');
  }

  isPatient () {
    const tokenInfo = localStorage.getItem('user');
    return (tokenInfo ? JSON.parse(tokenInfo)?.role : '')  == Role.Patient;
  }

  isHealer() {
    const tokenInfo = localStorage.getItem('user');
    return (tokenInfo ? JSON.parse(tokenInfo)?.role : '') == Role.Healer;
  }

  isAdmin() {
    const tokenInfo = localStorage.getItem('user');
    return (tokenInfo ? JSON.parse(tokenInfo)?.role : '') == Role.Admin;
  }
}
