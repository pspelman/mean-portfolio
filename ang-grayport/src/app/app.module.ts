import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbCollapseModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ResumeComponent} from './resume/resume.component';
import {MainComponent} from './main/main.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from "@angular/router";
// import {ScrollEventModule} from 'ngx-scroll-event';

import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {NgxPageScrollModule} from 'ngx-page-scroll';


@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    MainComponent,
    NavbarComponent
  ],
  imports: [
    NgxPageScrollCoreModule.forRoot({ /* custom settings here */}),
    NgxPageScrollModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    NgxPageScrollModule,
    NgbCollapseModule,
    RouterModule,
    // ScrollEventModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
