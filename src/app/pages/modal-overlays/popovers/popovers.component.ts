import { Component } from '@angular/core';
import {
  NgxPopoverCardComponent, NgxPopoverFormComponent,
  NgxPopoverTabsComponent,
} from './popover-examples.component';
import { NbCardModule, NbButtonModule, NbPopoverModule, NbTabsetModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'ngx-popovers',
    styleUrls: ['./popovers.component.scss'],
    templateUrl: './popovers.component.html',
    imports: [NbCardModule, NbButtonModule, NbPopoverModule, NbTabsetModule, FormsModule]
})
export class PopoversComponent {
  tabsComponent = NgxPopoverTabsComponent;
  cardComponent = NgxPopoverCardComponent;
  formComponent = NgxPopoverFormComponent;
}
