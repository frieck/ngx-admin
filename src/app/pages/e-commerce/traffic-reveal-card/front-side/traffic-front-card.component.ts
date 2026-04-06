import { Component, Input, OnDestroy, inject } from '@angular/core';
import { NbThemeService, NbListModule, NbIconModule } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

import { TrafficList } from '../../../../@core/data/traffic-list';
import { TrafficBarComponent } from './traffic-bar/traffic-bar.component';

@Component({
    selector: 'ngx-traffic-front-card',
    styleUrls: ['./traffic-front-card.component.scss'],
    templateUrl: './traffic-front-card.component.html',
    imports: [NbListModule, NbIconModule, TrafficBarComponent]
})
export class TrafficFrontCardComponent implements OnDestroy {
  private themeService = inject(NbThemeService);


  private alive = true;

  @Input() frontCardData: TrafficList[];

  currentTheme: string;

  constructor() {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });
  }

  trackByDate(_, item) {
    return item.date;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
