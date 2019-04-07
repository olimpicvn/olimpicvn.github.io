import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
//import { HeaderComponent } from '../header/header.component';  
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})

export class PersonComponent implements OnInit {
  
  content = "";
  src = "";
  name = "";
  navigationSubscription;
  constructor(private activeRoute: ActivatedRoute, private http: HttpClient, private router: Router) { 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        const routeParams = this.activeRoute.snapshot.params;
        this.loadUserDetail(routeParams.id);

      }
    });
  }

  ngOnInit() {
  
  }
  loadUserDetail(id: any): any {
    this.http.get('assets/peoples/' + id).subscribe(data => {
      console.log(id);
      this.content = data["content"];
      this.src = data["src"];
      this.name = data["name"];
    })
  }
}
