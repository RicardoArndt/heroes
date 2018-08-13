import {Component, OnInit} from '@angular/core';
import {Hero} from '../models/hero.model';
import {HeroService} from '../service/hero.service';
import {HeroesError} from '../../error/HeroesError';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  private _route: Router;

  constructor(private heroService: HeroService,
              private heroError: HeroesError,
              private toastr: ToastrService,
              private route: ActivatedRoute) {
  }

  loading;
  hero: Hero;

  ngOnInit() {
    this.loading = true;

    this.heroService.getById(this.route.snapshot.params['id']).subscribe(response => {
      this.loading = false;
      this.hero = response;
      this.toastr.success('Busca concluída com sucesso', 'Success!');
    }, error => {
      this.loading = false;
      this.heroError.handleError(error);
    });
  }

  onDelete(id: string) {
    this.heroService.delete(id).subscribe(() => {
      this._route.navigate(['/heroes']);
      this.toastr.success('Deletado com sucesso', 'Success!');
    });
  }
}
