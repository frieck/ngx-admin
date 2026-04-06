import { Component, EventEmitter, Input, OnDestroy, Output, inject } from '@angular/core';
import { NbThemeService, NbCardModule, NbSelectModule, NbOptionModule } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

@Component({
    selector: 'ngx-traffic-cards-header',
    styleUrls: ['./traffic-cards-header.component.scss'],
    templateUrl: './traffic-cards-header.component.html',
    imports: [NbCardModule, NbSelectModule, NbOptionModule]
})
export class TrafficCardsHeaderComponent implements OnDestroy {
  private themeService = inject(NbThemeService);

  private alive = true;

  @Output() periodChange = new EventEmitter<string>();

  @Input() type: string = 'week';

  types: string[] = ['week', 'month', 'year'];
  currentTheme: string;

  constructor() {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  changePeriod(period: string): void {
    this.type = period;
    this.periodChange.emit(period);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
