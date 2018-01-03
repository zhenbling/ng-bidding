import { Component, OnInit,ElementRef, Renderer } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-center-menu-item',
  templateUrl: './center-menu-item.component.html',
  styleUrls: ['./center-menu-item.component.scss']
})
export class CenterMenuItemComponent implements OnInit {
  customClass: string = 'customClass';
  activeIndex:number=1;
  constructor(private elementRef: ElementRef, private renderer: Renderer, private router: Router) {

  }

  ngOnInit() {
  }
  openChange(event: boolean,name:string) {
 ;
   // console.log(me
     var str=event?"#"+name+"-show":"#"+name+"-hide";

     console.log(str);
     if(event){
       var  Show = this.elementRef.nativeElement.querySelector("#"+name+"-show");
       Show.style.display = "block";
       var  Hide = this.elementRef.nativeElement.querySelector("#"+name+"-hide");
       Hide.style.display = "none";
       console.log(Show);
       console.log(Hide);
     }else{
       var  Show = this.elementRef.nativeElement.querySelector("#"+name+"-hide");
       Show.style.display = "block";
       var  Hide = this.elementRef.nativeElement.querySelector("#"+name+"-show");
       Hide.style.display = "none";
       console.log("dfdfdfd");
       console.log(Show);
       console.log(Hide);
     }

  //  console.log(Div);
  //  Div.style.backgroundColor = "red";
    console.log(`Accordion has been ${event ?
      'opened' : 'closed'}`);
  }
  jumpTo(item,index) {
    this.activeIndex=index;
    this.router.navigate(['pages/mycenter'+item])
  }

}
