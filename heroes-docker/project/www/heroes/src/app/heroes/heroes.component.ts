import {Component, OnInit} from '@angular/core';
import {Hero} from './hero-detail/hero.model';
import {HeroService} from './service/hero.service';
import {HeroesError} from '../error/HeroesError';
import {ToastrService} from 'ngx-toastr';
import {reject, resolve} from 'q';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes: Hero[] = [
    {
      id: '1',
      name: 'Superman',
      image: null,
      atack: 1000,
      defense: 600
    },
    {
      id: '2',
      name: 'Aquaman',
      image: null,
      atack: 900,
      defense: 500
    },
    {
      id: '3',
      name: 'Aquaman',
      image: null,
      atack: 900,
      defense: 500
    },
    {
      id: '4',
      name: 'Aquaman',
      image: null,
      atack: 900,
      defense: 500
    },
    {
      id: '5',
      name: 'Aquaman',
      image: null,
      atack: 900,
      defense: 500
    }
  ];

  public searchHeroes: Hero[];

  public loading = false;

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
          this.toastr.success('Heróis buscados com sucesso', 'Listagem');
        },
        error => {
          this.loading = false;
          this.heroError.handleError(error);
        });

    console.log(this.heroes);
  }

  search(response: any) {
    console.log(response);
    // this.heroes = response.heroes;
  }

}
