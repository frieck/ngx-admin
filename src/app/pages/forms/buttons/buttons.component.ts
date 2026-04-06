import { Component } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbIconModule } from '@nebular/theme';

@Component({
    selector: 'ngx-buttons',
    styleUrls: ['./buttons.component.scss'],
    templateUrl: './buttons.component.html',
    imports: [NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbIconModule]
})
export class ButtonsComponent {
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
}
