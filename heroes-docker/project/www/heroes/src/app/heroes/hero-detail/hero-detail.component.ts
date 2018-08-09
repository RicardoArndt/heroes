import {Component, OnInit} from '@angular/core';
import {Hero} from './hero.model';
import {HeroService} from '../service/hero.service';
import {HeroesError} from '../../error/HeroesError';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(private heroService: HeroService,
              private heroError: HeroesError,
              private toastr: ToastrService,
              private route: ActivatedRoute) {
  }

  public loading;

  hero: Hero = {
    id: '1',
    name: 'Superman',
    image: null,
    atack: 1000,
    defense: 600
  };

  ngOnInit() {
    this.heroService.getById(this.route.params['id']).subscribe(response => {
      this.loading = false;
      this.toastr.success('Busca concluída com sucesso', 'Success!');
      this.hero = response;
    }, error => {
      this.loading = false;
      this.heroError.handleError(error);
    });
  }

  onDelete(id: string) {
    this.loading = true;

    this.heroService.delete(id).subscribe(() => {
      this.loading = false;
      this.toastr.success('Deletado com sucesso', 'Success!');
    }, error => {
      this.loading = false;
      this.heroError.handleError(error);
    });
  }

}
