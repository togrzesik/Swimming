import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {BackComponent} from "./components/back/back.component";
import {CrawlComponent} from "./components/crawl/crawl.component";
import {FrogComponent} from "./components/frog/frog.component";
import {DolphinComponent} from "./components/dolphin/dolphin.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'back', component: BackComponent},
  {path: 'crawl', component: CrawlComponent},
  {path: 'frog', component: FrogComponent},
  {path: 'dolphin', component: DolphinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
