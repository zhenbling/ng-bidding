import {Component, DoCheck, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  // @Output()
  // scrollTo: EventEmitter<boolean> = new EventEmitter();

  indexUrl: string;
  showButton: boolean;
  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.indexUrl = window.location.href;
    this.indexUrl = 'http://localhost:4200/#/pages/index'
    this.showButton = true;
    // console.log('headerinit111', this.indexUrl);

  }
  ngDoCheck(): void {
    let currentUrl = window.location.href;
    if (currentUrl.indexOf('index')) {
      // console.log('因为回到了主页，我进来了一次');
      this.showButton = true;
    }
    if (currentUrl !== this.indexUrl) {
      // console.log('因为跳出主页，我进来了一次')
      if (currentUrl.indexOf('index') === -1 ) {
        this.showButton = false;
      }
    }
  }
  jumpTo () {
    // this.router.navigate(['/pages/index/' + item]);
    // jQuery('html, body').animate({scrollTop: 680});
  }

}
