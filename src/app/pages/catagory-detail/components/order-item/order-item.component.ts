import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  @Input()
  flag
  public seFlag: boolean = false;
  public myfinalPrice=233;
  constructor() { }

  ngOnInit() {
  }
  mouseOver () {
    this.seFlag = true;
  }
  mouseOut () {
    this.seFlag = false;
  }
  gotoDetail() {
    window.location.href = '/#/pages/detaillist';
  }
}
