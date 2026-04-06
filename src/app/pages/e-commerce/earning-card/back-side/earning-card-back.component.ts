import { Component, OnDestroy, inject } from '@angular/core';
import { PieChart, EarningData } from '../../../../@core/data/earning';
import { takeWhile } from 'rxjs/operators';
import { NbCardModule } from '@nebular/theme';
import { EarningPieChartComponent } from './earning-pie-chart.component';

@Component({
    selector: 'ngx-earning-card-back',
    styleUrls: ['./earning-card-back.component.scss'],
    templateUrl: './earning-card-back.component.html',
    imports: [NbCardModule, EarningPieChartComponent]
})
export class EarningCardBackComponent implements OnDestroy {
  private earningService = inject(EarningData);

  private alive = true;

  earningPieChartData: PieChart[];
  name: string;
  color: string;
  value: number;
  defaultSelectedCurrency: string = 'Bitcoin';

  constructor() {
    this.earningService.getEarningPieChartData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((earningPieChartData) => {
        this.earningPieChartData = earningPieChartData;
      });
  }

  changeChartInfo(pieData: {value: number; name: string; color: any}) {
    this.value = pieData.value;
    this.name = pieData.name;
    this.color = pieData.color;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
