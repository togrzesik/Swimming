import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrawlComponent } from './components/crawl/crawl.component';
import { HomeComponent } from './components/home/home.component';
import { FrogComponent } from './components/frog/frog.component';
import { DolphinComponent } from './components/dolphin/dolphin.component';
import { BackComponent } from './components/back/back.component';

@NgModule({
  declarations: [
    AppComponent,
    CrawlComponent,
    HomeComponent,
    FrogComponent,
    DolphinComponent,
    BackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
