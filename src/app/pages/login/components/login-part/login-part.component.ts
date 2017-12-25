import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-login-part',
  templateUrl: './login-part.component.html',
  styleUrls: ['./login-part.component.scss']
})
export class LoginPartComponent implements OnInit {
  mobileNumber;
  passWord;
  loginForm: FormGroup; // <--- heroForm is of type FormGroup

  constructor(private fb: FormBuilder, private http: HttpClient) { // <--- inject FormBuilder
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      mobileNumber: ['', Validators.required ],
      passWord: ['', Validators.required ],
    });
    // this.mobileNumber = this.loginForm.controls['mobileNumber'].value;
    // this.passWord = this.loginForm.controls['passWord'].value;
  }
  loginIn() {
    this.mobileNumber = this.loginForm.controls['mobileNumber'].value;
    this.passWord = this.loginForm.controls['passWord'].value;
    console.log(this.loginForm.value);
    let body = JSON.stringify({
      'MobileNumber': this.mobileNumber,
      'Password': this.passWord
    });
    console.log('body', body);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.post ('http://api.emake.cn/console/user/login', body).map(res => res.json());
  }
}
