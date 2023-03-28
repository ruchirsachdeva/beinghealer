import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from "../environments/environment";
import {Blog, Doctor} from "./model/domains";
import {JsonHttpService} from "./service/json-http.service";

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  public patients: any = [
    {
      patientName: 'Richard Wilson',
      patient_id: 'P0016',
      apptDate: 'Sat May 23 2020 13:35:47 GMT+0530 (India Standard Time)',
      purpose: 'General',
      type: 'New patient',
      email: 'richard@example.com',
      phone: '+1 923 782 4575',
      amount: 150,
      status: 0,
    },
    {
      patientName: 'Richard Wilson',
      patient_id: 'P0001',
      email: 'richard@example.com',
      apptDate: 'Sat May 23 2020 13:35:47 GMT+0530 (India Standard Time)',
      purpose: 'General',
      type: 'Old patient',
      phone: '+1 828 632 9170',
      amount: 200,
      status: 0,
    },
    {
      patientName: 'Richard Wilson',
      patient_id: 'P0002',
      email: 'richard@example.com',
      apptDate: 'Sat May 23 2020 13:35:47 GMT+0530 (India Standard Time)',
      purpose: 'General',
      type: 'New patient',
      phone: '+1 828 632 9170',
      amount: 350,
      status: 0,
    },
    {
      patientName: 'Richard Wilson',
      email: 'richard@example.com',
      patient_id: 'P0003',
      apptDate: 'Sat May 23 2020 13:35:47 GMT+0530 (India Standard Time)',
      purpose: 'General',
      type: 'New patient',
      amount: 400,
      status: 0,
    },
  ];

  messages:any = '';
  SERVER_URL: string = `${environment.localServer}`;
  BOOT_SERVER_URL: string = `${environment.bootServer}`;
  message: BehaviorSubject<String>;
  constructor(public http: HttpClient,
              private jsonHttp: JsonHttpService) {
    this.message = new BehaviorSubject(this.messages);
  }

  nextmessage(data:any) {
    this.message.next(data);
  }

  getJSON(): Observable<any> {
    // return this.http.get("./assets/data.json");
    return this.patients;
  }

  update(id:any, status:any, list:any) {
    let filter = list.filter((a:any) => a.patient_id === id);
    if (filter.length != 0) {
      filter['status'] = status;
    }
  }

  getSpeciality() {
    return this.http.get(this.SERVER_URL + 'specialityList');
  }

  createSpeciality(data:any) {
    return this.http.post(`${this.SERVER_URL + 'specialityList'}`, data);
  }

  updateSpeciality(data:any, id:any) {
    return this.http.put(`${this.SERVER_URL + 'specialityList'}/${id}`, data);
  }

  deleteSpeciality(id:any) {
    return this.http.delete(`${this.SERVER_URL + 'specialityList'}/${id}`);
  }

  getDoctors() {
    return this.http.get<Doctor[]>(this.SERVER_URL + 'doctors');
  }

  getDoctorDetails(id:any) {
    return this.http.get<Doctor>(`${this.SERVER_URL + 'doctors'}/${id}`);
  }

  getAppointments() {
    return this.http.get(this.SERVER_URL + 'appointments');
  }

  updateAppointment(data:any, id:any) {
    return this.http.put(`${this.SERVER_URL + 'appointments'}/${id}`, data);
  }

  getpatients() {
    return this.http.get(this.SERVER_URL + 'patients');
  }
  getPatientsAppointements(){
    return this.http.get(this.SERVER_URL + 'patientsAppointment');
  }

  createBlogs(data:Blog) {
    return this.jsonHttp.post(`${this.BOOT_SERVER_URL + 'blogs'}`, data);
  }

  getBlogs(seacrhPhrase?: string, pg?: number, lmt?: number) {
    const PHRASE = seacrhPhrase || undefined;
    const PAGE = pg || 1;
    const LIMIT = lmt || 6;

    const GET_URL = PHRASE
      ? `${this.BOOT_SERVER_URL}blogs/search?phrase=${PHRASE}&page=${PAGE}&limit=${LIMIT}`
      : `${this.BOOT_SERVER_URL}blogs?page=${PAGE}&limit=${LIMIT}`;

    return this.jsonHttp.get<Blog[]>(GET_URL);
  }

  getBlogsDetails(id:Blog) {
    return this.jsonHttp.get<Blog>(`${this.BOOT_SERVER_URL + 'blogs'}/${id}`);
  }

  updateBlog(data: Blog, id: any) {
    return this.jsonHttp.put(`${this.BOOT_SERVER_URL + 'blogs'}/${id}`, data);
  }

  deleteBlog(id:any) {
    return this.jsonHttp.delete(`${this.BOOT_SERVER_URL + 'blogs'}/${id}`);
  }

  createDoctor(data:Doctor) {
    return this.http.post(`${this.BOOT_SERVER_URL + 'doctors'}`, data);
  }

  createPatient(data:any) {
    return this.http.post(`${this.SERVER_URL + 'patients'}`, data);
  }

  getPatientDetails(id:any) {
    return this.http.get(`${this.SERVER_URL + 'patients'}/${id}`);
  }

  createAppointment(params:any) {
    return this.http.post(`${this.SERVER_URL + 'appointments'}`, params);
  }

  getFav() {
    return this.http.get(this.SERVER_URL + 'favourites');
  }

  createFav(params:any) {
    return this.http.post(this.SERVER_URL + 'favourites', params);
  }

  getComments() {
    return this.http.get(this.SERVER_URL + 'comments');
  }

  createComment(params:any) {
    return this.http.post(this.SERVER_URL + 'comments', params);
  }

  deleteFav(id:any) {
    return this.http.delete(`${this.SERVER_URL + 'favourites'}/${id}`);
  }

  getTransactions() {
    return this.http.get(this.SERVER_URL + 'transactions');
  }

  deleteTransaction(id:any) {
    return this.http.delete(`${this.SERVER_URL + 'transactions'}/${id}`);
  }

  getReviews() {
    return this.http.get(this.SERVER_URL + 'reviews');
  }

  deleteReview(id:any) {
    return this.http.delete(`${this.SERVER_URL + 'reviews'}/${id}`);
  }

  createServices(data:any) {
    return this.http.post(`${this.SERVER_URL + 'services'}`, data);
  }

  getServices() {
    return this.http.get<any[]>(this.SERVER_URL + 'services');
  }

  updateServices(data:any, id:any) {
    return this.http.put(`${this.SERVER_URL + 'services'}/${id}`, data);
  }

  deleteServices(id:any) {
    return this.http.delete(`${this.SERVER_URL + 'services'}/${id}`);
  }
}
