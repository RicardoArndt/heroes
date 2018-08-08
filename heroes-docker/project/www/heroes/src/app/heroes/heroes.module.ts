import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { OwlModule } from 'ngx-owl-carousel';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    HeroSearchComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    OwlModule
  ],
  providers: []
})
export class HeroesModule { }
