import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroSearchComponent} from './hero-search.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeroSearchComponent
  ],
  exports: [
    HeroSearchComponent
  ]
})

export class HeroSearchModule {
}
