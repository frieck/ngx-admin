import { Component, OnDestroy, inject } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { PieChartModule } from '@swimlane/ngx-charts';

@Component({
    selector: 'ngx-d3-advanced-pie',
    template: `
    <ngx-charts-advanced-pie-chart
      [scheme]="colorScheme"
      [results]="single">
    </ngx-charts-advanced-pie-chart>
  `,
    imports: [PieChartModule]
})
export class D3AdvancedPieComponent implements OnDestroy {
  private theme = inject(NbThemeService);

  single = [
    {
      name: 'Germany',
      value: 8940000,
    },
    {
      name: 'USA',
      value: 5000000,
    },
    {
      name: 'France',
      value: 7200000,
    },
  ];
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
