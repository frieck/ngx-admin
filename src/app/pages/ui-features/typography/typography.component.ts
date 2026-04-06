import { Component, OnDestroy, inject } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService, NbCardModule, NbAlertModule } from '@nebular/theme';

@Component({
    selector: 'ngx-typography',
    styleUrls: ['./typography.component.scss'],
    templateUrl: './typography.component.html',
    imports: [NbCardModule, NbAlertModule]
})
export class TypographyComponent implements OnDestroy {
  private themeService = inject(NbThemeService);
  private breakpointService = inject(NbMediaBreakpointsService);

  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;

  constructor() {

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
