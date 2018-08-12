import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroCompareComponent} from './hero-compare.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ChartsModule} from 'ng2-charts';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    ChartsModule
  ],
  declarations: [
    HeroCompareComponent,
    GraphComponent
  ],
  exports: [
    HeroCompareComponent
  ]
})
export class HeroCompareModule {
}
