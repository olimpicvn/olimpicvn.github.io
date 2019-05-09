import { Component, OnInit } from '@angular/core';
import {HttpModule, Http, RequestOptionsArgs, Headers} from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  parser : any;
  
  news : any[] = [];

  constructor(private http:Http) {
    
  }

  ngOnInit() {
    this.handleRss();
  }


  private async handleRss() {
    var json : any= await this.getRssJson("http://k.img.com.ua/rss/ua/sport.xml");
    console.log (json);
    json.items.forEach(element => {
      this.news.push(element);  
    });
    //console.log ( json);
  }

  private async getRssJson( url: string) {
    const headerDict = {
    }
    return fetch('https://rss2json.com/api.json?rss_url=' + url, {
    }).then (async (response:any )=> {
      console.log(response); 
      let actualRes = await response.json();
     // console.log ( actualRes);
      return actualRes;
    },
    error => {
      console.log ( error);
    }); 
  }
}
