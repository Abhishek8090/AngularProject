import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//impoert custom componnets
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';

//setup routs contant where we can define paths for componenets
//each route is JS object contains 2 properties
// path  >> defines url path
// component name 

const routes: Routes = [
  {path:'home',component:NavComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
