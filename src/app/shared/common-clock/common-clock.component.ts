import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-clock',
  templateUrl: './common-clock.component.html',
  styleUrls: ['./common-clock.component.scss']
})
export class CommonClockComponent implements OnInit {
  @Input()
  startTime;
  @Input()
  endTime;
  // alarm
  now;
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
    this.now = new Date().getTime();
    console.log('now', this.now);

    if (this.startTime > this.now || this.now > this.endTime) {
      this.clockFlag = false;
      //false表示计时未开始或者计时已结束
      console.log('未开始', this.clockFlag)
    }else {
      this.start();
      // console.log('hour111', this.hourFst);
      // console.log('hour222', this.hourSec);
    }
    // console.log('wwww', this.alarm.start())


  }
  start() {
    let timeId, times;
    // let now = new Date().getTime()
    times = Math.floor((this.endTime - this.now) / 1000);

    timeId = setInterval( () => {
      if (times < 0) {
        clearInterval(timeId);
        this.clockFlag = false;
        console.log('计时结束');
      } else {
        this.clockFlag = true;
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
    minute < 10 ? (this.minFst = 0, this.minSec = minute) : ( this.minFst = minute.toString().charAt(0), this.minSec = minute.toString().charAt(1))
    second < 10 ? (this.scdFst = 0, this.scdSec = second) : ( this.scdFst = second.toString().charAt(0), this.scdSec = second.toString().charAt(1))
    // console.log('hour1', this.hourFst);
    // console.log('hour2', this.hourSec);
  }

}
