import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HEROES_ROUTES} from './heroes.routing';
import {BrowserModule} from '@angular/platform-browser';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    HeroSearchComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(HEROES_ROUTES)
  ],
  providers: []
})
export class HeroesModule { }
