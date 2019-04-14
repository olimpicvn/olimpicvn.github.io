import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { SportsComponent } from './components/sports/sports.component';
import { PersonComponent } from './components/person/person.component';
import { HttpModule } from '@angular/http';
//import { SharedBootstrapModule } from './shared-bootstrap.module';  
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HistoryComponent,
    SportsComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  //  SharedBootstrapModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
