import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})



export class SportsComponent implements OnInit, AfterViewInit{

  target:any;
  modalNames =[];
  map = new Map();

  sportsImages = [
    {
      src : 'assets/img/sports/archery.png',
      name : 'Стрільба з лука',
      people: []
    },
    {
      src : 'assets/img/sports/artistic_gymnastics.png',
      name : 'Художня гімнастика',
      people: []
    },
    {
      src : 'assets/img/sports/athletics.png',
      name : 'Легка атлетика',
      people: ['kolesnychenco', 'yanovska', 'yakovenko', 'dobrynska', 'kovenko', 'knysh', 'sarafuniuk','sokolovsky']
    },
    {
      src : 'assets/img/sports/badminton.png',
      name : 'Бадмінтон',
      people: []
    },
    {
      src : 'assets/img/sports/basketball.png',
      name : 'Баскетбол',
      people: []
    },
    {
      src : 'assets/img/sports/beach_volleyball.png',
      name : 'Пляжний волейбол',
      people: []
    },
    {
      src : 'assets/img/sports/boxing.png',
      name : 'Бокс',
      people: ['butsenko', 'solonenko', 'tretiak']
    },
    {
      src : 'assets/img/sports/canoe_slalom.png',
      name : 'Слалом на байдарках і каное',
      people: []
    },
    {
      src : 'assets/img/sports/canoe_sprint.png',
      name : 'Веслування на байдарках і каное',
      people: ['ahadova', 'cherevatova', 'balabanova', 'osypenko']
    },
    {
      src : 'assets/img/sports/cycling_bmx.png',
      name : 'BMX',
      people: []
    },
    {
      src : 'assets/img/sports/cycling_mountain_bike.png',
      name : 'Маунтбайк',
      people: []
    },
    {
      src : 'assets/img/sports/cycling_road.png',
      name : 'Шосейний велоспорт',
      people: ['kachalka']
    },
    {
      src : 'assets/img/sports/cycling_track.png',
      name : 'Велотрек',
      people: ['cherniavsky']
    },
    {
      src : 'assets/img/sports/diving.png',
      name : 'Стрибки у воду',
      people: ['pysmenska']
    },
    {
      src : 'assets/img/sports/equestrian.png',
      name : 'Кінний спорт',
      people: []
    },
    {
      src : 'assets/img/sports/fencing.png',
      name : 'Фехтування',
      people: []
    },
    {
      src : 'assets/img/sports/football.png',
      name : 'Футбол',
      people: []
    },
    {
      src : 'assets/img/sports/golf.png',
      name : 'Гольф',
      people: []
    },
    {
      src : 'assets/img/sports/handball.png',
      name : 'Гандбол',
      people: []
    },
    {
      src : 'assets/img/sports/hockey.png',
      name : 'Хокей',
      people: []
    },
    {
      src : 'assets/img/sports/judo.png',
      name : 'Дзюдо',
      people: ['levitskiy']
    },
    {
      src : 'assets/img/sports/marathon_swimming.png',
      name : 'Марафонне плавання',
      people: []
    },
    {
      src : 'assets/img/sports/modern_pentathlon.png',
      name : "Сучасне п'ятиборство",
      people: []
    },
    {
      src : 'assets/img/sports/rhythmic_gymnastics.png',
      name : 'Ритмічна гімнастика',
      people: []
    },
    {
      src : 'assets/img/sports/rowing.png',
      name : 'Веслування',
      people: []
    },
    {
      src : 'assets/img/sports/rugby_sevens.png',
      name : 'Регбі',
      people: []
    },
    {
      src : 'assets/img/sports/sailing.png',
      name : 'Вітрильний спорт',
      people: []
    },
    {
      src : 'assets/img/sports/shooting.png',
      name : 'Стрільба',
      people: []
    },
    {
      src : 'assets/img/sports/swimming.png',
      name : 'Плавання',
      people: ['hnukin']
    },
    {
      src : 'assets/img/sports/synchronised_swimming.png',
      name : 'Синхронне плавання',
      people: []
    },
    {
      src : 'assets/img/sports/table_tennis.png',
      name : 'Настільний теніс',
      people: []
    },
    {
      src : 'assets/img/sports/taekwondo.png',
      name : 'Таеквондо',
      people: []
    },
    {
      src : 'assets/img/sports/tennis.png',
      name : 'Теніс',
      people: []
    },
    {
      src : 'assets/img/sports/trampoline_gymnastics.png',
      name : 'Стрибки на батуті',
      people: []
    },
    {
      src : 'assets/img/sports/triathlon.png',
      name : 'Триатлон',
      people: []
    },
    {
      src : 'assets/img/sports/volleyball.png',
      name : 'Волейбол',
      people: []
    },
    {
      src : 'assets/img/sports/water_polo.png',
      name : 'Водне поло',
      people: []
    },
    {
      src : 'assets/img/sports/weightlifting.png',
      name : 'Важка атлетика',
      people: []
    },
    {
      src : 'assets/img/sports/wrestling.png',
      name : 'Боротьба',
      people: []
    }
  ];

  ngAfterViewInit(): void {
    let btns = document.getElementsByClassName("openModal");
    var span = document.getElementById("close");
    var modal = document.getElementById('modal');
  // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
    }
    for( let i = 0; i < this.sportsImages.length; ++i) {
      for(let j =0 ;j < this.sportsImages[i].people.length; ++j){
        let that = this;
        this.http.get('assets/peoples/' + this.sportsImages[i].people[j]).subscribe(data => {
          console.log(that.sportsImages);
          that.map.set(that.sportsImages[i].people[j], data["name"]);
        })
      }
    }
  }
  openMadal(item){
    console.log(item);
    var modal = document.getElementById('modal');
    var modalText = document.getElementById('modalBody');
    this.modalNames = item.people;
    this.target = item.name;
    modal.style.display = "block";
  }

  
  
  constructor(private activeRoute: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
   

  }

}
