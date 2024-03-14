import {Component, HostBinding, Input, OnInit} from '@angular/core';
import * as $ from 'jquery';
// import {MapboxStuff} from "./mapboxStuff";
import {Portfolio} from "./portfolio";
import {NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";
import {MainComponent} from "./main/main.component";
import {Router, Routes} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
// import {ScrollEvent} from "ngx-scroll-event";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  // mapbox_token = "pk.eyJ1IjoicHNwZWxtYW4iLCJhIjoiY2poanJsNDBmMDRsYTMwcjA2aDFuODN4cSJ9.itOSiLnm059ORfgzcu8RXw";
  // box = new MapboxStuff();
  siteLogic = new Portfolio();
  showResume = false;



  ngOnInit(): void {

    // this.box.initMapboxMap();

    // this.box.travelMapOne();
    // this.siteLogic.portfolioJS();

    //put the following in ngOnInit(){}
    $(function () {
      console.log(`inside of OnInit now!`,);
    //     //END of 'ready' state function
    });

  }


//   export class MainComponent {
//   @HostBinding('class.hidden') @Input() hidden = false;
//   @Input() caption: string;
// }





}
