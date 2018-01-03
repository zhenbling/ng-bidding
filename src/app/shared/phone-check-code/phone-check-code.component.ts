import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BaseInfoService} from '../../pages/register/components/base-info/base-info.service';
import {HttpClient} from '@angular/common/http';
/*tslint:disable:max-line-length*/
@Component({
  selector: 'app-phone-check-code',
  templateUrl: './phone-check-code.component.html',
  styleUrls: ['./phone-check-code.component.scss']
})
export class PhoneCheckCodeComponent implements OnInit {
  @Input() phone: string;
  isDisabled = false;
  time = 60;
  codeMsg = '获取手机验证码';
  ErrorMsg;
  ResultCode;
  ResultInfo;
  @Input() ngModel: string = null;
  @Input() name: string = null;
  @Input() click: string = null;
  // @Input() MobileNumber: string = null;
  // @Output() phone = new EventEmitter();
  constructor(private http: HttpClient, private baseinfoService: BaseInfoService, private routeInfo: ActivatedRoute) { }

  ngOnInit() {
  }
  getVerificationCode() {
    if ((!this.phone) || (!(/^1[34578]\d{9}$/.test(this.phone)))) {
      this.ErrorMsg = '请输入有效手机号！';
      this.codeMsg = '获取手机验证码';
    } else {
      console.log('phone=', this.phone);
      //   // this.phone.emit(this.MobileNumber);
      const MobileNumber = this.phone;
      // if (!this.phone) {
      //   this.ErrorMsg = '请输入手机号！';
      //   this.codeMsg = '获取手机验证码';
      // }
      this.isDisabled = true;
      const interval = window.setInterval(
        () => {
          1 === this.time ? (this.time = 60, this.codeMsg = '获取手机验证码', window.clearInterval(interval), this.isDisabled = false) : (this.time--, this.codeMsg = this.time + 's');
        }, 1000);
      this.baseinfoService.getVerificationCode(MobileNumber).subscribe(
        data => {
          // console.log(data);
          // console.log(data.ResultCode);
          // this.ResultCode = data.ResultCode;
          // this.ResultInfo = data.ResultInfo;
          if (this.ResultCode !== 0) {
            this.time = 60;
            this.codeMsg = '获取验证码';
            window.clearInterval(interval);
            this.isDisabled = false;
            this.ErrorMsg = this.ResultInfo;
          }
          setTimeout(() => {
            this.ResultCode = 0;
          }, 2000);
        }
      );
    }
    }

}
