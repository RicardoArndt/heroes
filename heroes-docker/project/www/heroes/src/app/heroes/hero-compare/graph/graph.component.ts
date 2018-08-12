import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../../models/hero.model';

// @ts-ignore
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  @Input() heroesCompare: Hero[];

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 1000
        }
      }]
    }
  };
  public barChartLabels: string[] = ['Atack', 'Defense'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public t: any;

  public barChartData: any[] = [];

  constructor() {
  }

  ngOnInit() {
    this.mountGraph();
  }

  mountGraph() {
    console.log(this.heroesCompare);
    this.heroesCompare.forEach(hero => (
        this.t = {data: [hero.Atack, hero.Defense], label: hero.Name},
        this.barChartData.push(this.t)
    ));
  }
}
