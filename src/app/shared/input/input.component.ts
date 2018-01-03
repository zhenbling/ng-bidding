import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() type: string = null;
  @Input() value: string = null;
  @Input() placeholder: string = null;
  // @Input() formControlName: string = null;
  @Input() labelText: string = null;
  @Input() ngModel: string = null;
  @Input() name: string = null;
  // phone: string = null;
  // @Output() MobileNumber = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  // phoneChange() {
  //   this.MobileNumber.emit(this.phone);
  // }
}
