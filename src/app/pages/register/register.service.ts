import { Injectable } from '@angular/core';

import { Http, HttpModule, Headers, RequestOptions } from '@angular/http';

// import { API_URL } from '../app.constants';

import { Observable } from 'rxjs/Observable';
import { Md5 } from 'ts-md5/dist/md5';
import 'rxjs/Rx';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RegisterService {
  public api_url = 'http://api.emake.cn';
  testUrl = 'http://int.emake.cn';  // 阿里测试环境
  productUrl = 'http://api.emake.cn'; // 阿里生产环境
  imgList= [];

  constructor(private http: HttpClient) {}
  // getVerificationCode(phone) {
  //   const obj = JSON.stringify({MobileNumber: phone});
  //   return this.http.post('http://localhost:4000/verificationcode', obj).map((res: Response) => res.json());
  // }
  // public getHeaders() {
  //   // let base64Str = this.base64.getEncode();
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   // headers.append('Authorization', base64Str);
  //   return  new RequestOptions({headers: headers});
  // }
  // public upLoadImg(str) {
  //   // var options = this.getHeaders();
  //   var body = {
  //     'Image': str
  //   };
  //   let url = 'https://api.emake.cn/image';
  //   return this.http.post(url, body)
  //     .map(res => res.json());
  // }
  // public deleteBrandPic(item) {
  //   // var options=this.getHeaders();
  //   let url = 'http://api.emake.cn/web/brand/photo/delete';
  //   // let url = "http://192.168.0.232:3000" + '/web/brand/photo/delete';
  //   return this.http.post(url, item )
  //     .map(res => res.json());
  // }
  // login(obj) {
  //
  //
  //   obj.Password = obj.Password; // Md5.hashStr(obj.Password)
  //   const objStr = JSON.stringify(obj);
  //   const headers = new Headers();
  //
  //   headers.append('Content-Type', 'application/json;chatset=UTF-8');
  //   // headers.append('Access-Control-Allow-Origin','*');
  //   // headers.append('Access-Control-Allow-Headers','x-requested-with,content-type');
  //   // headers.append('Authorization', str);
  //
  //   const options = new RequestOptions({headers: headers});
  //   console.log('loginlogin==', objStr);
  //   console.log(obj);
  //   const url = this.api_url + '/user/wx/regist'; // "http://localhost:3000/user/wx/regist";  //
  //   return this.http.post(url, obj, options).map(res => res.json());
  // }

}

