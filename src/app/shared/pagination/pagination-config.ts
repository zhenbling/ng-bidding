// todo: split
import { Injectable } from '@angular/core';

/** Provides default values for Pagination and pager components */
@Injectable()
export class PaginationConfig {
  main: any = {
    maxSize: void 0,
    itemsPerPage: 10,
    boundaryLinks: false,
    directionLinks: true,
    firstText: '首页',
    previousText: '上一页',
    nextText: '下一页',
    lastText: '尾页',
    pageBtnClass: '',
    rotate: true
  };
  pager: any = {
    itemsPerPage: 15,
    previousText: '上一页',
    nextText: '下一页',
    pageBtnClass: '',
    align: true
  };
}
