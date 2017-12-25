import { Injectable } from '@angular/core';

import { Http, HttpModule, Headers, RequestOptions } from '@angular/http';

// import { API_URL } from '../app.constants';

import { Observable } from 'rxjs/Observable';
import { Md5 } from 'ts-md5/dist/md5';
import 'rxjs/Rx';

@Injectable()
export class LoginService {
  public api_url = 'http://api.emake.cn';
  testUrl = 'http://int.emake.cn';  // 阿里测试环境
  productUrl = 'http://api.emake.cn'; // 阿里生产环境

  constructor(private http: Http) {}
  login(obj) {


    obj.Password = obj.Password; // Md5.hashStr(obj.Password)
    const objStr = JSON.stringify(obj);
    const headers = new Headers();

    headers.append('Content-Type', 'application/json;chatset=UTF-8');
    // headers.append('Access-Control-Allow-Origin','*');
    // headers.append('Access-Control-Allow-Headers','x-requested-with,content-type');
    // headers.append('Authorization', str);

    const options = new RequestOptions({headers: headers});
    console.log('loginlogin==', objStr);
    console.log(obj);
    // http://api.emake.cn/user/login
    const url = this.api_url + '/user/login'; // "http://localhost:3000/user/wx/regist";  //
    return this.http.post(url, obj, options).map(res => res.json());
  }

}

