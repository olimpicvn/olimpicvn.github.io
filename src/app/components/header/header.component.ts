import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public people = [
    {
      route:"ahadova",
      name:"Світлана Ахадова"
    },
    {
      route:"balabanova",
      name:"Ганна Балабанова"
    },
    {
      route:"butsenko",
      name:"Микола Буценко"
    },
    {
      route:"cherevatova",
      name:"Олена Череватова"
    },
    {
      route: "cherniavsky",
      name:"Сергій Чернявський"
    },
    {
      route:"dobrynska",
      name:"Наталія Добринська"
    },{
      route:"hnukin",
      name:"Павло Хникін"
    },{
      route:"kachalka",
      name:"Наталія Качалка"
    },{
      route:"knysh",
      name:"Михайло Книш"
    },{
      route:"kolesnychenco",
      name:"Олена Колесниченко"
    },{
      route:"kovenko",
      name:"Андрій Коваленко"
    },{
      route:"levitskiy",
      name:"Микола Левицький"
    },
    {
      route:"osypenko",
      name:"Інна Осипенко-Родомська"
    },
    {
      route:"pysmenska",
      name:"Ганна Письменська"
    },{
      route:"sarafuniuk",
      name:"Петро Сарафинюк"
    },{
      route:"sokolovsky",
      name:"Андрій Соколовський"
    },{
      route:"solonenko",
      name:"Денис Солоненко"
    },{
      route:"tretiak",
      name:"Максим Третяк"
    },
    {
      route:"yakovenko",
      name:"Ольга Яковенко"
    },
    {
      route:"yanovska",
      name:"Олена Яновська"
    }
  ]

  constructor() {
    
   }

  ngOnInit() {
  }

}
