import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  showResume = false;

  toggleNavbar = false;

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
