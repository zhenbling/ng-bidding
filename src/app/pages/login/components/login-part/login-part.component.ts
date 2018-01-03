import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {PhoneValidator} from '../../../register/components/base-info/phone.validator';
import {LoginPartService} from './login-part.service';
@Component({
  selector: 'app-login-part',
  templateUrl: './login-part.component.html',
  styleUrls: ['./login-part.component.scss']
})
export class LoginPartComponent implements OnInit {
  MobileNumber;
  Password;
  ResultCode;
  ResultInfo;
  ErrorMsg;
  // loginForm: FormGroup; // <--- heroForm is of type FormGroup

  constructor(private loginpartService: LoginPartService, private http: HttpClient) { // <--- inject FormBuilder
  }
  ngOnInit() {
    // this.loginForm = this.fb.group({
    //   mobileNumber: ['', Validators.compose([Validators.required, PhoneValidator.validator]) ],
    //   passWord: ['', Validators.compose([Validators.required, Validators.minLength(6)]) ],
    // });
    // this.mobileNumber = this.loginForm.controls['mobileNumber'].value;
    // this.passWord = this.loginForm.controls['passWord'].value;
  }
  // onSubmit({value, valid}) {
  //   // this.mobileNumber = this.loginForm.controls['mobileNumber'].value;
  //   // this.passWord = this.loginForm.controls['passWord'].value;
  //   if (!valid) {
  //     console.log('invalid');
  //     return; }
  //   console.log(JSON.stringify(value));
  //   //
  //   // let body = JSON.stringify({
  //   //   'MobileNumber': this.mobileNumber,
  //   //   'Password': this.passWord
  //   // });
  //   // console.log('body', body);
  //   // let headers = new Headers();
  //   // headers.append('Content-Type', 'application/json');
  //   // // return this.http.post ('http://api.emake.cn/console/user/login', body).map(res => res.json());
  // }
  login() {
    const MobileNumber = this.MobileNumber;
    const Password = this.Password;
    this.loginpartService.login(this.MobileNumber, this.Password).subscribe(
      data => {
        // this.ResultCode = data.ResultCode;
        // this.ResultInfo = data.ResultInfo;
        if (this.ResultCode !== 0) {
          console.log(data);
          this.ErrorMsg = this.ResultInfo;
          console.log(this.ErrorMsg);
        }
      }
    );
  }
}
