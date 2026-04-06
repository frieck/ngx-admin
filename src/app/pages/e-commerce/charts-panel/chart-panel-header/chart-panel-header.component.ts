import { Component, EventEmitter, Input, OnDestroy, Output, inject } from '@angular/core';
import { NbMediaBreakpoint, NbMediaBreakpointsService, NbThemeService, NbSelectModule, NbOptionModule } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { ECommerceLegendChartComponent } from '../../legend-chart/legend-chart.component';


@Component({
    selector: 'ngx-chart-panel-header',
    styleUrls: ['./chart-panel-header.component.scss'],
    templateUrl: './chart-panel-header.component.html',
    imports: [ECommerceLegendChartComponent, NbSelectModule, NbOptionModule]
})
export class ChartPanelHeaderComponent implements OnDestroy {
  private themeService = inject(NbThemeService);
  private breakpointService = inject(NbMediaBreakpointsService);


  private alive = true;

  @Output() periodChange = new EventEmitter<string>();

  @Input() type: string = 'week';

  types: string[] = ['week', 'month', 'year'];
  chartLegend: {iconColor: string; title: string}[];
  breakpoint: NbMediaBreakpoint = { name: '', width: 0 };
  breakpoints: any;
  currentTheme: string;

  constructor() {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        const orderProfitLegend = theme.variables.orderProfitLegend;

        this.currentTheme = theme.name;
        this.setLegendItems(orderProfitLegend);
      });

      this.breakpoints = this.breakpointService.getBreakpointsMap();
      this.themeService.onMediaQueryChange()
        .pipe(takeWhile(() => this.alive))
        .subscribe(([oldValue, newValue]) => {
          this.breakpoint = newValue;
        });
  }

  setLegendItems(orderProfitLegend) {
    this.chartLegend = [
      {
        iconColor: orderProfitLegend.firstItem,
        title: 'Payment',
      },
      {
        iconColor: orderProfitLegend.secondItem,
        title: 'Canceled',
      },
      {
        iconColor: orderProfitLegend.thirdItem,
        title: 'All orders',
      },
    ];
  }

  changePeriod(period: string): void {
    this.type = period;
    this.periodChange.emit(period);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
