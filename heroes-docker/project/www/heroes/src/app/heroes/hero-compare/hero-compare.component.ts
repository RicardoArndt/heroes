import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {HeroService} from '../service/hero.service';
import {Hero} from '../models/hero.model';

@Component({
  selector: 'app-hero-compare',
  templateUrl: './hero-compare.component.html',
  styleUrls: ['./hero-compare.component.css']
})
export class HeroCompareComponent implements OnInit {

  rerender = false;

  public heroes: Hero[] = [];
  public p = 1;
  @Input() heroCompare: Hero;
  public heroesCompare: Hero[];

  constructor(private heroService: HeroService, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.heroService.getAll().subscribe((response: Hero[]) => {
      response.forEach((data: Hero) => {
        if (!(this.heroCompare.Id === data.Id)) {
          this.heroes.push(data);
        }
      });
    });
  }

  onCompare(hero: Hero) {
    this.heroesCompare = [this.heroCompare];
    this.heroesCompare.push(hero);
    this.rerender = true;
    this.cdRef.detectChanges();
    this.rerender = false;
    console.log(this.heroesCompare);
  }
}
