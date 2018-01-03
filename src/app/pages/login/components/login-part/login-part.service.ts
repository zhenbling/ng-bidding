import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginPartService {

  constructor(private http: HttpClient) { }
  login(phone, password) {
    const obj = JSON.stringify({ MobileNumber: phone, Password: password});
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post( 'http://192.168.0.59:4000/user/login', obj).map(res => res);
  }
}
