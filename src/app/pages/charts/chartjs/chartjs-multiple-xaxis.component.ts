import { Component, OnDestroy, inject } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { NgChartsModule } from 'ng2-charts';

@Component({
    selector: 'ngx-chartjs-multiple-xaxis',
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
export class ChartjsMultipleXaxisComponent implements OnDestroy {
  private theme = inject(NbThemeService);

  data: any;
  options: any;
  themeSubscription: any;

  constructor() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'dataset - big points',
            data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
            borderColor: colors.primary,
            backgroundColor: colors.primary,
            fill: false,
            borderDash: [5, 5],
            pointRadius: 8,
            pointHoverRadius: 10,
          },
          {
            label: 'dataset - individual point sizes',
            data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
            borderColor: colors.dangerLight,
            backgroundColor: colors.dangerLight,
            fill: false,
            borderDash: [5, 5],
            pointRadius: 8,
            pointHoverRadius: 10,
          },
          {
            label: 'dataset - large pointHoverRadius',
            data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
            borderColor: colors.info,
            backgroundColor: colors.info,
            fill: false,
            pointRadius: 8,
            pointHoverRadius: 10,
          },
          {
            label: 'dataset - large pointHitRadius',
            data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
            borderColor: colors.success,
            backgroundColor: colors.success,
            fill: false,
            pointRadius: 8,
            pointHoverRadius: 10,
          },
        ],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        hover: {
          mode: 'index',
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Month',
            },
            grid: {
              display: true,
              color: chartjs.axisLineColor,
            },
            ticks: {
              color: chartjs.textColor,
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Value',
            },
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
            position: 'bottom',
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

  private random() {
    return Math.round(Math.random() * 100);
  }
}
