import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  images = [
    {url: '../../assets/img/heroes/aquaman.jpg'},
    {url: '../../assets/img/heroes/greenlantern.jpg'},
    {url: '../../assets/img/heroes/spiderman.jpg'},
    {url: '../../assets/img/heroes/superman.jpg'},
    {url: '../../assets/img/heroes/wonderwoman.jpg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
