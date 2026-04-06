import { Component, OnDestroy, inject } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { AreaChartModule } from '@swimlane/ngx-charts';

@Component({
    selector: 'ngx-d3-area-stack',
    template: `
    <ngx-charts-area-chart
      [scheme]="colorScheme"
      [results]="multi"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      [autoScale]="autoScale">
    </ngx-charts-area-chart>
  `,
    imports: [AreaChartModule]
})
export class D3AreaStackComponent implements OnDestroy {
  private theme = inject(NbThemeService);

  multi = [{
    name: 'Germany',
    series: [{
        name: '2010',
        value: 7300000,
      }, {
        name: '2011',
        value: 8940000,
      }],
  }, {
    name: 'USA',
    series: [{
        name: '2010',
        value: 7870000,
      }, {
        name: '2011',
        value: 8270000,
      }],
  }, {
    name: 'France',
    series: [{
        name: '2010',
        value: 5000002,
      }, {
        name: '2011',
        value: 5800000,
      }],
  }];
  showLegend = true;
  autoScale = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Country';
  yAxisLabel = 'Population';
  colorScheme: any;
  themeSubscription: any;

  constructor() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
