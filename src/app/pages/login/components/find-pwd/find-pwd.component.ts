import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhoneValidator } from '../../../register/components/base-info/phone.validator';
// import { BaseInfoService } from '../../../register/components/base-info/base-info.service';
/*tslint:disable:max-line-length*/

@Component({
  selector: 'app-find-pwd',
  templateUrl: './find-pwd.component.html',
  styleUrls: ['./find-pwd.component.scss']
})
export class FindPwdComponent implements OnInit {
  MobileNumber;
  VerificationCode;
  NewPassword;
  PasswordRepeat;
  ErrorMsg;
  // codeMsg = '获取手机验证码';
  // isDisabled = false;
  // time = 60;
  // resultCode = 0;
  // resultInfo = '';
  // findForm: FormGroup; // <--- heroForm is of type FormGroup

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
  }
  ngOnInit() {
    // this.findForm = this.fb.group({
    //   mobileNumber: ['', Validators.compose([Validators.required, PhoneValidator.validator])],
    //   checkCode: ['', Validators.compose([Validators.required]) ],
    //   passWord: ['', Validators.compose([Validators.required]) ],
    //   passWordRepeat: ['', Validators.compose([Validators.required]) ],
    // });
  }
  // getIdentifyCode() {
  //   const MobileNumber = this.MobileNumber;
  //   this.isDisabled = true;
  //   const interval = window.setInterval(
  //     () => {
  //       1 === this.time ? (this.time = 60, this.codeMsg = '获取手机验证码', window.clearInterval(interval), this.isDisabled = false) : (this.time--, this.codeMsg = this.time + 's');
  //     }, 1000);
  //   // this.baseInfoService.getIdentifyCode(this.mobileNumber).subscribe(
  //   //   data => {
  //   //     // this.resultCode = data.ResultCode;
  //   //     // this.resultInfo = data.ResultInfo;
  //   //     if (this.resultCode !== 0) {
  //   //       this.time = 60;
  //   //       this.codeMsg = '获取验证码';
  //   //       window.clearInterval(interval);
  //   //       this.isDisabled = false;
  //   //     }
  //   //     setTimeout(() => {
  //   //       this.resultCode = 0;
  //   //     }, 2000);
  //   //   }
  //   // );
  // }
  onSubmit() {
    var MobileNumber = this.MobileNumber;
    var VerificationCode = this.VerificationCode;
    var NewPassword = this.NewPassword;
    var PasswordRepeat = this.PasswordRepeat;
    // if ((MobileNumber = '') || (VerificationCode = '') || (Password = '') || (CompanyName = '') || (Contacter = '')) {
    //   this.ErrorMsg = '请完整填写信息。';
    // }
    const obj = JSON.stringify(
      {
        MobileNumber: MobileNumber,
        VerificationCode: VerificationCode,
        NewPassword: NewPassword,
        PasswordRepeat: PasswordRepeat,
        });
    console.log(obj);
    if (this.NewPassword !== this.PasswordRepeat) {
      this.ErrorMsg = '两次输入的密码不相同！';
    } else {
      if (this.NewPassword.length < 6) {
        this.ErrorMsg = '密码应至少6位。';
      } else {
        // this.baseinfoService.onSubmit(obj).subscribe(
        //   data => {
        //     console.log(data);
        //     if (this.ResultCode !== 0) {
        //       console.log(this.ResultInfo);
        //     }
        //     window.location.href = '/#/register/factoryinfo';
        //   });
      }
    }

  }

}
