import { Component, OnDestroy, inject } from '@angular/core';
import { StatsBarData } from '../../../../@core/data/stats-bar';
import { takeWhile } from 'rxjs/operators';
import { NbCardModule } from '@nebular/theme';
import { StatsAreaChartComponent } from './stats-area-chart.component';

@Component({
    selector: 'ngx-stats-card-back',
    styleUrls: ['./stats-card-back.component.scss'],
    templateUrl: './stats-card-back.component.html',
    imports: [NbCardModule, StatsAreaChartComponent]
})
export class StatsCardBackComponent implements OnDestroy {
  private statsBarData = inject(StatsBarData);


  private alive = true;

  chartData: number[];

  constructor() {
    this.statsBarData.getStatsBarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.chartData = data;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
