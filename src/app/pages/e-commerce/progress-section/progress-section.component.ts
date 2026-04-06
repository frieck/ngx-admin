import { Component, OnDestroy, inject } from '@angular/core';
import { ProgressInfo, StatsProgressBarData } from '../../../@core/data/stats-progress-bar';
import { takeWhile } from 'rxjs/operators';
import { NbCardModule, NbProgressBarModule } from '@nebular/theme';
import { NumberWithCommasPipe } from '../../../@theme/pipes/number-with-commas.pipe';

@Component({
    selector: 'ngx-progress-section',
    styleUrls: ['./progress-section.component.scss'],
    templateUrl: './progress-section.component.html',
    imports: [NbCardModule, NbProgressBarModule, NumberWithCommasPipe]
})
export class ECommerceProgressSectionComponent implements OnDestroy {
  private statsProgressBarService = inject(StatsProgressBarData);


  private alive = true;

  progressInfoData: ProgressInfo[];

  constructor() {
    this.statsProgressBarService.getProgressInfoData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.progressInfoData = data;
      });
  }

  ngOnDestroy() {
    this.alive = true;
  }
}
