import { Component } from '@angular/core';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { StatsCardFrontComponent } from './front-side/stats-card-front.component';
import { StatsCardBackComponent } from './back-side/stats-card-back.component';

@Component({
    selector: 'ngx-profit-card',
    styleUrls: ['./profit-card.component.scss'],
    templateUrl: './profit-card.component.html',
    imports: [NbCardModule, StatsCardFrontComponent, NbIconModule, StatsCardBackComponent]
})
export class ProfitCardComponent {

  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}
