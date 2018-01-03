import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhoneValidator } from './phone.validator';
import { ActivatedRoute, Router} from '@angular/router';
import { BaseInfoService} from './base-info.service';
import { HttpClient } from '@angular/common/http';


/*tslint:disable:max-line-length*/
@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.scss']
})
export class BaseInfoComponent implements OnInit {
  MobileNumber;
  VerificationCode;
  Password;
  CompanyName;
  Contacter;
  CheckBox;
  isDisabled = false;
  time = 60;
  codeMsg = '获取手机验证码';
  ResultCode = 0;
  ResultInfo = '';
  ErrorMsg;
  tip;
  public myfinalPrice=233;
  validationMessages;
  baseInfoForm: any = {}; // <--- regForm is of type FormGroup
  // list = [];
  // registerPhone: string = '';
  // @Input() public myPhone = this.MobileNumber;
  constructor(private http: HttpClient, private baseinfoService: BaseInfoService, private routeInfo: ActivatedRoute) {
  } // <--- inject FormBuilder
  ngOnInit() {
    // this.baseinfo = new baseinfo();
    // this.baseInfoForm = this.fb.group({
    //   MobileNumber: ['', Validators.compose([Validators.required, PhoneValidator.validator])],
    //   CheckCode: ['', Validators.compose([Validators.required])],
    //   Password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    //   CompanyName: ['', Validators.compose([Validators.required])],
    //   ContactName: ['', Validators.compose([Validators.required])],
    //   CheckBox: ['', Validators.compose([Validators.required])]
    // });
  }
  // recPro(event) {
  //   this.phone = event;
  // }

  // getVerificationCode() {
  //   const MobileNumber = this.MobileNumber;
  //   if (!this.MobileNumber) {
  //     this.ErrorMsg = '请输入手机号！';
  //   }
  //   this.isDisabled = true;
  //   const interval = window.setInterval(
  //     () => {
  //       1 === this.time ? (this.time = 60, this.codeMsg = '获取手机验证码', window.clearInterval(interval), this.isDisabled = false) : (this.time--, this.codeMsg = this.time + 's');
  //     }, 1000);
  //     this.baseinfoService.getVerificationCode(MobileNumber).subscribe(
  //       data => {
  //         // this.ResultCode = data.ResultCode;
  //         // this.ResultInfo = data.ResultInfo;
  //         if (this.ResultCode !== 0) {
  //                   this.time = 60;
  //                   this.codeMsg = '获取验证码';
  //                   window.clearInterval(interval);
  //                   this.isDisabled = false;
  //                   this.ErrorMsg = this.ResultInfo;
  //                 }
  //         setTimeout(() => {
  //                   this.ResultCode = 0;
  //                 }, 2000);
  //       }
  //     );
  //   }
  onSubmit() {
    var MobileNumber = this.MobileNumber;
    var VerificationCode = this.VerificationCode;
    var Password = this.Password;
    var CompanyName = this.CompanyName;
    var Contacter = this.Contacter;
    // if ((MobileNumber = '') || (VerificationCode = '') || (Password = '') || (CompanyName = '') || (Contacter = '')) {
    //   this.ErrorMsg = '请完整填写信息。';
    // }
    const obj = JSON.stringify(
      {
        MobileNumber: MobileNumber,
        VerificationCode: VerificationCode,
        Password: Password,
        CompanyName: CompanyName,
        Contacter: Contacter});
    console.log(obj);
    if (this.Password.length < 6) {
      this.ErrorMsg = '密码应至少6位。';
    } else {
      this.baseinfoService.onSubmit(obj).subscribe(
        data => {
          console.log(data);
          if (this.ResultCode !== 0) {
            console.log(this.ResultInfo);
          }
          window.location.href = '/#/register/factoryinfo';
        });
    }
    }
}
