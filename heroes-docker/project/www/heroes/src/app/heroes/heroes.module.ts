import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { OwlModule } from 'ngx-owl-carousel';
import { ModalModule } from 'ngx-modal';
import { CommonModule } from '@angular/common';
import { HeroFormModule } from './hero-form/hero-form.module';
import { HeroDetailModule } from './hero-detail/hero-detail.module';
import { HeroSearchModule } from './hero-search/hero-search.module';

@NgModule({
  declarations: [
    HeroesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    OwlModule,
    HeroFormModule,
    HeroDetailModule,
    HeroSearchModule,
    ModalModule
  ],
  exports: [
    OwlModule,
    ModalModule,
    HeroesRoutingModule
  ],
  providers: []
})
export class HeroesModule { }
