import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  @Input()
  startTime
  @Input()
  endTime
  alarm
  clockFlag = false;
  hourFst = 0;
  hourSec = 3;
  minFst;
  minSec;
  scdFst;
  scdSec;
  constructor() { }

  ngOnInit() {
    // console.log('end', this.endTime);
    let now = new Date().getTime();
    console.log('now', now);

    if (this.startTime > now || now > this.endTime) {
      this.clockFlag = false;
      //false表示计时未开始或者计时已结束
      console.log('未开始', this.clockFlag)
    }else {
      // this.alarm = new Alarm(this.startTime, this.endTime, function(second, minute, hour, day){
      //
      //   hour < 10 ? (this.hourFst = 0, this.hourSec = hour) : ( this.hourFst = hour.toString().charAt(0), this.hourSec = hour.toString().charAt(1))
      //   console.log('hour1', this.hourFst);
      //   console.log('hour2', this.hourSec);
      // })
      // this.alarm.start();
    }
    // console.log('wwww', this.alarm.start())
    console.log('hour111', this.hourFst);
    console.log('hour222', this.hourSec);

  }
  start() {
    let timeId, times;
    let now = new Date().getTime()
    times = Math.floor((this.endtime - now) / 1000);

    timeId = setInterval( () => {
      if (times < 0) {
        clearInterval(timeId);
        console.log('计时结束');
      } else {
        let minute, hour, day, second;
        day = Math.floor(times / 60 / 60 / 24);
        hour = Math.floor(times / 60 / 60 % 24);
        minute = Math.floor(times / 60 % 60);
        second = Math.floor(times % 60);
        this.countFunc(second, minute, hour, day);
        times--;
      }
    }, 1000);
  }
  countFunc(second, minute, hour, day) {
    hour < 10 ? (this.hourFst = 0, this.hourSec = hour) : ( this.hourFst = hour.toString().charAt(0), this.hourSec = hour.toString().charAt(1))
    console.log('hour1', this.hourFst);
    console.log('hour2', this.hourSec);
  }
}

// export class Alarm {
//   constructor(public startime: number, public endtime: number, public countFunc) {
//     this.startime = startime;
//     this.endtime = endtime;
//     this.countFunc = countFunc;
//   }
//   start() {
//     let timeId, times;
//     let now = new Date().getTime()
//     times = Math.floor((this.endtime - now) / 1000);
//
//     timeId = setInterval( () => {
//       if (times < 0) {
//         clearInterval(timeId);
//         console.log('计时结束');
//       } else {
//         let minute, hour, day, second;
//         day = Math.floor(times / 60 / 60 / 24);
//         hour = Math.floor(times / 60 / 60 % 24);
//         minute = Math.floor(times / 60 % 60);
//         second = Math.floor(times % 60);
//         this.countFunc(second, minute, hour, day);
//         times--;
//       }
//     }, 1000);
//   }
//
// }
