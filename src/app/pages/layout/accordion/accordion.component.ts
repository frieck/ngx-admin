import { Component, ViewChild } from '@angular/core';
import { NbCardModule, NbButtonModule, NbAccordionModule } from '@nebular/theme';

@Component({
    selector: 'ngx-accordion',
    templateUrl: 'accordion.component.html',
    styleUrls: ['accordion.component.scss'],
    imports: [NbCardModule, NbButtonModule, NbAccordionModule]
})
export class AccordionComponent {

  @ViewChild('item', { static: true }) accordion;

  toggle() {
    this.accordion.toggle();
  }
}
