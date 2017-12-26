import { Component, OnInit } from '@angular/core';
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
  mobileNumber;
  checkCode;
  passWord;
  companyName;
  contactName;
  isDisabled = false;
  time = 60;
  codeMsg = '获取手机验证码';
  resultCode = 0;
  resultInfo = '';
  regForm: FormGroup; // <--- regForm is of type FormGroup
  // list = [];
  // resultCode: number = 0;
  // resultInfo: string = '';
  // registerPhone: string = '';
  constructor(private http: HttpClient, private fb: FormBuilder, private baseInfoService: BaseInfoService, private routeInfo: ActivatedRoute) { } // <--- inject FormBuilder
  ngOnInit() {
    this.regForm = this.fb.group({
      mobileNumber: ['', Validators.compose([Validators.required, PhoneValidator.validator]) ],
      checkCode: ['', Validators.compose([Validators.required]) ],
      passWord: ['', Validators.compose([Validators.required, Validators.minLength(6)]) ],
      companyName: ['', Validators.compose([Validators.required]) ],
      contactName: ['', Validators.compose([Validators.required]) ]
    });
  }
  getIdentifyCode() {
      this.mobileNumber = this.regForm.controls['mobileNumber'];
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
  onSubmit() {
    this.mobileNumber = this.regForm.controls['mobileNumber'];
    this.passWord = this.regForm.controls['passWord'];
    this.checkCode = this.regForm.controls['checkCode'];
    this.companyName = this.regForm.controls['companyName'];
    this.contactName = this.regForm.controls['contactName'];
    console.log(this.regForm.value);
  }
}
