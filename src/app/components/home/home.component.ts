import { Component, OnInit } from '@angular/core';
import {HttpModule, Http, RequestOptionsArgs, Headers} from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  parser : any;
  constructor(private http:Http) {
    
  }

  ngOnInit() {
    this.startParsing();
  }

  private async startParsing( ) {
    const headerDict = {
    }
    this.http.get('https://rss2json.com/api.json?rss_url=http://k.img.com.ua/rss/ua/sport.xml', {
      headers: new Headers(headerDict)
    }).subscribe ((response:any )=> {
      console.log ( response);
      let actualRes = JSON.parse(response._body);
      console.log(actualRes);
    },
    error => {
      console.log ( error);
    }); 

  }

}
