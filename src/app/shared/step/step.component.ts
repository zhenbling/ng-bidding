import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  @Input() step: string = null;
  @Input() roundClass: string = null;
  @Input() lineClass: string = null;
  @Input() label: string = null;
  constructor() { }

  ngOnInit() {
  }

}
