import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { NgModule } from '@angular/core';

const heroesRoutes: Routes = [
  {path: 'heroes', component: HeroesComponent, children:[
    {path: 'details', component: HeroDetailComponent}
  ]}
];


@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class HeroesRoutingModule {}
