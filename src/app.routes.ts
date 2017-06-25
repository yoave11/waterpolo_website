import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./app/home/home.component";
import {AboutComponent} from "./app/about/about.component";
const APP_ROUTES: Routes = [
  {path: 'about', component: AboutComponent,pathMatch: 'full'},
  {path: '', component: HomeComponent, pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
