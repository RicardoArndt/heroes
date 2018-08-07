import {HeroSearchComponent} from './hero-search/hero-search.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {Routes} from '@angular/router';

export const HEROES_ROUTES: Routes = [
  {path: 'details/:id', component: HeroDetailComponent},
  {path: 'search/:id', component: HeroSearchComponent}
];
