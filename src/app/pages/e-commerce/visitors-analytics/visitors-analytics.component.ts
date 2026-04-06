import { Component, OnDestroy, inject } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NbThemeService, NbCardModule } from '@nebular/theme';
import { OutlineData, VisitorsAnalyticsData } from '../../../@core/data/visitors-analytics';
import { forkJoin } from 'rxjs';
import { ECommerceLegendChartComponent } from '../legend-chart/legend-chart.component';
import { ECommerceVisitorsAnalyticsChartComponent } from './visitors-analytics-chart/visitors-analytics-chart.component';
import { SlideOutComponent } from '../slide-out/slide-out.component';
import { ECommerceVisitorsStatisticsComponent } from './visitors-statistics/visitors-statistics.component';


@Component({
    selector: 'ngx-ecommerce-visitors-analytics',
    styleUrls: ['./visitors-analytics.component.scss'],
    templateUrl: './visitors-analytics.component.html',
    imports: [NbCardModule, ECommerceLegendChartComponent, ECommerceVisitorsAnalyticsChartComponent, SlideOutComponent, ECommerceVisitorsStatisticsComponent]
})
export class ECommerceVisitorsAnalyticsComponent implements OnDestroy {
  private themeService = inject(NbThemeService);
  private visitorsAnalyticsChartService = inject(VisitorsAnalyticsData);

  private alive = true;

  pieChartValue: number;
  chartLegend: {iconColor: string; title: string}[];
  visitorsAnalyticsData: { innerLine: number[]; outerLine: OutlineData[]; };

  constructor() {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.setLegendItems(theme.variables.visitorsLegend);
      });

    forkJoin(
      this.visitorsAnalyticsChartService.getInnerLineChartData(),
      this.visitorsAnalyticsChartService.getOutlineLineChartData(),
      this.visitorsAnalyticsChartService.getPieChartData(),
    )
      .pipe(takeWhile(() => this.alive))
      .subscribe(([innerLine, outerLine, pieChartValue]: [number[], OutlineData[], number]) => {
        this.visitorsAnalyticsData = {
          innerLine: innerLine,
          outerLine: outerLine,
        };

        this.pieChartValue = pieChartValue;
      });
  }

  setLegendItems(visitorsLegend): void {
    this.chartLegend = [
      {
        iconColor: visitorsLegend.firstIcon,
        title: 'Unique Visitors',
      },
      {
        iconColor: visitorsLegend.secondIcon,
        title: 'Page Views',
      },
    ];
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
