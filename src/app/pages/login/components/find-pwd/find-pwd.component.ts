import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhoneValidator } from '../../../register/components/base-info/phone.validator';
import { BaseInfoService } from '../../../register/components/base-info/base-info.service';
/*tslint:disable:max-line-length*/

@Component({
  selector: 'app-find-pwd',
  templateUrl: './find-pwd.component.html',
  styleUrls: ['./find-pwd.component.scss']
})
export class FindPwdComponent implements OnInit {
  mobileNumber;
  checkCode;
  passWord;
  passWordRepeat;
  codeMsg = '获取手机验证码';
  isDisabled = false;
  time = 60;
  resultCode = 0;
  resultInfo = '';
  findForm: FormGroup; // <--- heroForm is of type FormGroup

  constructor(private fb: FormBuilder, private baseInfoService: BaseInfoService) { // <--- inject FormBuilder
  }
  ngOnInit() {
    this.findForm = this.fb.group({
      mobileNumber: ['', Validators.compose([Validators.required, PhoneValidator.validator])],
      checkCode: ['', Validators.compose([Validators.required]) ],
      passWord: ['', Validators.compose([Validators.required]) ],
      passWordRepeat: ['', Validators.compose([Validators.required]) ],
    });
  }
  getIdentifyCode() {
    this.mobileNumber = this.findForm.controls['mobileNumber'];
    this.isDisabled = true;
    const interval = window.setInterval(
      () => {
        1 === this.time ? (this.time = 60, this.codeMsg = '获取手机验证码', window.clearInterval(interval), this.isDisabled = false) : (this.time--, this.codeMsg = this.time + 's');
      }, 1000);
    this.baseInfoService.getIdentifyCode(this.mobileNumber).subscribe(
      data => {
        // this.resultCode = data.ResultCode;
        // this.resultInfo = data.ResultInfo;
        if (this.resultCode !== 0) {
          this.time = 60;
          this.codeMsg = '获取验证码';
          window.clearInterval(interval);
          this.isDisabled = false;
        }
        setTimeout(() => {
          this.resultCode = 0;
        }, 2000);
      }
    );
  }
  findPwd() {
    this.mobileNumber = this.findForm.controls['mobileNumber'].value;
    this.checkCode = this.findForm.controls['checkCode'].value;
    this.passWord = this.findForm.controls['passWord'].value;
    this.passWordRepeat = this.findForm.controls['passWordRepeat'].value;
    console.log('1', this.mobileNumber);
    console.log(this.findForm.value);
    let body = JSON.stringify({
      'MobileNumber': this.mobileNumber,
      'CheckCode': this.checkCode,
      'passWord': this.passWord,
      'passWordRepeat': this.passWordRepeat
    });
    console.log('body', body);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.post ('http://api.emake.cn/console/user/login', body).map(res => res.json());
  }

}
