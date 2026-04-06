import { Component, OnDestroy, inject } from '@angular/core';
import { NbThemeService, NbCardModule, NbSelectModule, NbOptionModule, NbListModule, NbIconModule } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

import { UserActivityData, UserActive } from '../../../@core/data/user-activity';

@Component({
    selector: 'ngx-user-activity',
    styleUrls: ['./user-activity.component.scss'],
    templateUrl: './user-activity.component.html',
    imports: [NbCardModule, NbSelectModule, NbOptionModule, NbListModule, NbIconModule]
})
export class ECommerceUserActivityComponent implements OnDestroy {
  private themeService = inject(NbThemeService);
  private userActivityService = inject(UserActivityData);


  private alive = true;

  userActivity: UserActive[] = [];
  type = 'month';
  types = ['week', 'month', 'year'];
  currentTheme: string;

  constructor() {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });

    this.getUserActivity(this.type);
  }

  getUserActivity(period: string) {
    this.userActivityService.getUserActivityData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(userActivityData => {
        this.userActivity = userActivityData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
