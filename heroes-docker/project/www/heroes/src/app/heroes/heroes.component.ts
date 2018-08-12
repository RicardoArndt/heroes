import {Component, OnInit} from '@angular/core';
import {Hero} from './models/hero.model';
import {HeroService} from './service/hero.service';
import {HeroesError} from '../error/HeroesError';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes: Hero[];
  public searchHeroes: Hero[];
  public loading = false;
  public p = 1;

  constructor(private heroService: HeroService,
              private heroError: HeroesError,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.loading = true;

    this.heroService.getAll()
      .subscribe(response => {
          this.loading = false;
          this.heroes = response;
          console.log(this.heroes);
          this.toastr.success('Heróis buscados com sucesso', 'Listagem');
        },
        error => {
          this.loading = false;
          this.heroError.handleError(error);
        });
  }

  search(response: any) {
    console.log(response.event);
    this.searchHeroes = response.event;
  }

  onReload() {
    location.reload();
  }

}
