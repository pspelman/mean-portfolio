import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResumeComponent} from "./resume/resume.component";
import {AppComponent} from "./app.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {path:'resume', component: ResumeComponent},
  {path: 'home', redirectTo: ''},
  {path: '', component: MainComponent},
  // {path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
