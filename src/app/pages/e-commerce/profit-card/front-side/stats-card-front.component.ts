import { Component, inject } from '@angular/core';
import { ProfitBarAnimationChartData } from '../../../../@core/data/profit-bar-animation-chart';
import { takeWhile } from 'rxjs/operators';
import { NbCardModule } from '@nebular/theme';
import { StatsBarAnimationChartComponent } from './stats-bar-animation-chart.component';

@Component({
    selector: 'ngx-stats-card-front',
    styleUrls: ['./stats-card-front.component.scss'],
    templateUrl: './stats-card-front.component.html',
    imports: [NbCardModule, StatsBarAnimationChartComponent]
})
export class StatsCardFrontComponent {
  private profitBarAnimationChartService = inject(ProfitBarAnimationChartData);


  private alive = true;

  linesData: { firstLine: number[]; secondLine: number[] };

  constructor() {
    this.profitBarAnimationChartService.getChartData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((linesData) => {
        this.linesData = linesData;
      });
  }
}
