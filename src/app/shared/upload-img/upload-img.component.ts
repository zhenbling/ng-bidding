import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.scss']
})
export class UploadImgComponent implements OnInit {
  @Input() imgLabel: string = null;
  constructor() { }

  ngOnInit() {
  }

}
