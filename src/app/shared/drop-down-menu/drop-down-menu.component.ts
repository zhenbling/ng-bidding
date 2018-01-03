import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.scss']
})
export class DropDownMenuComponent implements OnInit {
  // cities = [
  //   {
  //   'name': '安徽',
  // },
  // ];
  @Input() label: string = null;
  constructor() { }

  ngOnInit() {
    window.onload = function(){
    const Lis = document.getElementsByClassName('option');
    // const Lis = dropDown.getElementsByTagName('li');
    console.log(Lis.length);
    };
  }
}
