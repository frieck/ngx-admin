import { Component, Input, OnDestroy, inject } from '@angular/core';
import { NbThemeService, NbCardModule } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { TrafficBarChartComponent } from './traffic-bar-chart.component';

@Component({
    selector: 'ngx-traffic-back-card',
    styleUrls: ['./traffic-back-card.component.scss'],
    templateUrl: './traffic-back-card.component.html',
    imports: [NbCardModule, TrafficBarChartComponent]
})
export class TrafficBackCardComponent implements OnDestroy {
  private themeService = inject(NbThemeService);


  private alive = true;

  @Input() trafficBarData: any;

  currentTheme: string;

  constructor() {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
