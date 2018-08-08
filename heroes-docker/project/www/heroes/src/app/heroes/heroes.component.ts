import { Component, OnInit } from '@angular/core';
import { Hero } from './hero-detail/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [
    { 
      id: 1,
      name: 'Superman',
      image: '../../assets/img/heroes/superman.jpg',
      atack: 1000,
      defense: 600
    },
    { 
      id: 2,
      name: 'Aquaman',
      image: '../../assets/img/heroes/aquaman.jpg',
      atack: 900,
      defense: 500
    },
    { 
      id: 3,
      name: 'Spiderman',
      image: '../../assets/img/heroes/spiderman.jpg',
      atack: 6000,
      defense: 300
    },
    { 
      id: 4,
      name: 'Green Lantern',
      image: '../../assets/img/heroes/greenlantern.jpg',
      atack: 900,
      defense: 700
    },
    { 
      id: 5,
      name: 'Wonder Woman',
      image: '../../assets/img/heroes/wonderwoman.jpg',
      atack: 1000,
      defense: 1000
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
