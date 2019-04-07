import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { SportsComponent } from './components/sports/sports.component';
import { PersonComponent } from './components/person/person.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'sports',
    component: SportsComponent    
  },
  {
    path: 'person/:id',
    component: PersonComponent,
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true, onSameUrlNavigation: 'reload'})],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
