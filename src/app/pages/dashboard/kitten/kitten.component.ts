import { Component, OnDestroy, inject } from '@angular/core';
import { NbThemeService, NbCardModule, NbIconModule } from '@nebular/theme';

@Component({
    selector: 'ngx-kitten',
    styleUrls: ['./kitten.component.scss'],
    templateUrl: './kitten.component.html',
    imports: [NbCardModule, NbIconModule]
})
export class KittenComponent implements OnDestroy {
  private themeService = inject(NbThemeService);


  currentTheme: string;
  themeSubscription: any;

  constructor() {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
