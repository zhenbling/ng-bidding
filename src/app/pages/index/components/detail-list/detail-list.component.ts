import {Component, Input, OnInit} from '@angular/core';
var $:any;
@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.scss']
})
export class DetailListComponent implements OnInit {
  myfinalPrice = 233;
  flag: boolean = false;

  startTime = new Date(Date.parse('2017-12-21T00:00:00')).getTime();
  endTime = new Date(Date.parse('2017-12-22T10:56:00')).getTime();
  constructor() {
  }
  ngOnInit() {
    // 触发 id="defaultOpen" click 事件
    // document.getElementById('defaultOpen').click();
    // window.onload = function(){
    //   const oTabs = document.getElementsByClassName('tabcontent');
    //   const oLis = document.getElementsByClassName('tablink');
    //   console.log(oTabs.length);
    //   console.log(oLis.length);
    //   // const oDivs = document.getElementsByTagName('div');
    //   // const oTabs = document.getElementsByClassName('tabs');
    //   // console.log(oTabs.length);
    //   if (oLis.length !== 0) {
    //     for (let i = 0; i < oLis.length; i++) {
    //       console.log(oTabs[i].className);
    //     }
    //   } else {
    //     return;
    //   }
    //   // console.log(oDivs.length);
    //   // for (let i = 0; i < oLis.length; i++) {
    //   //   oLis[i].click = function(){
    //   //     console.log(22222);
    //   //     for (let n = 0; n < oTabs.length; n++) {
    //   //       oLis[n].className = '';
    //   //       oTabs[n].className = 'tabs hide';
    //   //     }
    //   //     this.className = 'on';
    //   //     oTabs[$('li').index(this)].className = 'tabs tabs-content';
    //   //   };
    //   // }
    // };
  }
  openTabs(evt, id) {
    console.log(2333);
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    console.log(tabcontent.length);
    for (i = 0; i < tabcontent.length; i++) {
      // tabcontent[i].className = 'hide';
      console.log(2333);
    }
    tablinks = document.getElementsByClassName('tablink');
    console.log(tablinks.length);
    for (i = 0; i < tablinks.length; i++) {
      // tablinks[i].className = '';
    }
    // document.getElementById(id).className = 'tabcontent';
    // evt.className = 'active';

  }
// 触发 id="defaultOpen" click 事件
//   document.getElementById("defaultOpen").click();
}
