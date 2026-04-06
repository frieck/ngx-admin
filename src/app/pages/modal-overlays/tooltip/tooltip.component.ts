import { Component } from '@angular/core';
import { NbCardModule, NbButtonModule, NbTooltipModule } from '@nebular/theme';

@Component({
    selector: 'ngx-tooltip',
    templateUrl: 'tooltip.component.html',
    styleUrls: ['tooltip.component.scss'],
    imports: [NbCardModule, NbButtonModule, NbTooltipModule]
})
export class TooltipComponent {

}
