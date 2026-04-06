import { Component, OnDestroy, inject } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { NgChartsModule } from 'ng2-charts';

@Component({
    selector: 'ngx-chartjs-line',
    template: `
    <canvas
      baseChart
      [type]="'line'"
      [data]="data"
      [options]="options"
      [legend]="true">
    </canvas>
  `,
    imports: [NgChartsModule]
})
export class ChartjsLineComponent implements OnDestroy {
  private theme = inject(NbThemeService);

  data: any;
  options: any;
  themeSubscription: any;

  constructor() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'Series A',
            backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 0.3),
            borderColor: colors.primary,
          },
          {
            data: [28, 48, 40, 19, 86, 27, 90],
            label: 'Series B',
            backgroundColor: NbColorHelper.hexToRgbA(colors.danger, 0.3),
            borderColor: colors.danger,
          },
          {
            data: [18, 48, 77, 9, 100, 27, 40],
            label: 'Series C',
            backgroundColor: NbColorHelper.hexToRgbA(colors.info, 0.3),
            borderColor: colors.info,
          },
        ],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: true,
              color: chartjs.axisLineColor,
            },
            ticks: {
              color: chartjs.textColor,
            },
          },
          y: {
            grid: {
              display: true,
              color: chartjs.axisLineColor,
            },
            ticks: {
              color: chartjs.textColor,
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: chartjs.textColor,
            },
          },
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
