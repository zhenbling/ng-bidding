import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-catagory-list',
  templateUrl: './catagory-list.component.html',
  styleUrls: ['./catagory-list.component.scss']
})
export class CatagoryListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  private jumpTo() {
    this.router.navigate(['/pages/catagorydetail']);
  }

}
