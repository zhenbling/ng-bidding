import { Injectable } from '@angular/core';

import { Http, HttpModule, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
// import { API_URL } from '../app.constants';

import { Observable } from 'rxjs/Observable';
import { Md5 } from 'ts-md5/dist/md5';
import 'rxjs/Rx';

@Injectable()
export class BaseInfoService {
  // public api_url = 'http://api.emake.cn';
  // testUrl = 'http://int.emake.cn';  // 阿里测试环境
  // productUrl = 'http://api.emake.cn'; // 阿里生产环境

  constructor(private http: HttpClient) {}
  getVerificationCode(phone) {
    const obj = JSON.stringify({ MobileNumber: phone});
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.post( 'http://192.168.0.59:4000/verificationcode', obj).map(res => res);
  }
  onSubmit(obj) {
    const headers = new Headers();

    headers.append('Content-Type', 'application/json;chatset=UTF-8');
    // headers.append('Access-Control-Allow-Origin','*');
    // headers.append('Access-Control-Allow-Headers','x-requested-with,content-type');
    // headers.append('Authorization', str);

    // const options = new RequestOptions({headers: headers});
    // console.log(obj);
    const url = 'http://192.168.0.59:4000/user/regist'; // "http://localhost:3000/user/wx/regist";  //
    return this.http.post(url, obj).map(res => res);
  }

}

