import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from '../hero-detail/hero.model';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  @Input() heroes: Hero[];

  @Output() onSearch = new EventEmitter<{event: any}>();

  search(term: string) {
    this.onSearch.emit({event: this.filter(term)});
  }

  constructor() { }

  ngOnInit() {

  }

  private filter(term: string) {
    return this.heroes.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) !== -1);
  }

}
