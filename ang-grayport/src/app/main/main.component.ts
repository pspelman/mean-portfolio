import { Component, OnInit } from '@angular/core';
import { ResumeComponent} from "../resume/resume.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }


  pageTopNav = "#page-top";

  ngOnInit() {
    this.showResume = false;
  }


  showResume = false;

  toggleResume(){
    if (this.showResume) {
      this.showResume = false;
    } else {
      this.showResume = true;
    }

  }
}
