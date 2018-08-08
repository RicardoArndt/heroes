import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }
  
  hero: Hero = {
    id: 1,
    name: 'Superman',
    image: '../../assets/img/heroes/superman.jpg',
    atack: 1000,
    defense: 600
  };

  ngOnInit() {
  }

}
