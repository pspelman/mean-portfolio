import { Component, OnInit } from '@angular/core';
import {ScrollEvent} from "ngx-scroll-event";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  showResume = false;

  toggleNavbar = false;

  public handleScroll(event: ScrollEvent) {
    // console.log('scroll occurred', event.originalEvent);
    if (event.isReachingBottom) {
      // console.log(`the user is reaching the bottom`);
    }
    if (event.isReachingTop) {
      // console.log(`the user is reaching the top`);
    }
    if (event.isWindowEvent) {
      this.toggleNavbar = false;
      // console.log(`This event is fired on Window not on an element.`);
    }

  }

  ngOnInit() {
  }


  // toggleResume(){
  //   if (this.showResume) {
  //     this.showResume = false;
  //   } else {
  //     this.showResume = true;
  //   }
  //
  // }
  //

}
