import { Component } from '@angular/core';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { EarningCardFrontComponent } from './front-side/earning-card-front.component';
import { EarningCardBackComponent } from './back-side/earning-card-back.component';

@Component({
    selector: 'ngx-earning-card',
    styleUrls: ['./earning-card.component.scss'],
    templateUrl: './earning-card.component.html',
    imports: [NbCardModule, EarningCardFrontComponent, NbIconModule, EarningCardBackComponent]
})
export class EarningCardComponent {

  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}
