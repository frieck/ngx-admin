import { Component, inject } from '@angular/core';
import { NbDateService, NbCardModule, NbInputModule, NbDatepickerModule } from '@nebular/theme';

@Component({
    selector: 'ngx-datepicker',
    templateUrl: 'datepicker.component.html',
    styleUrls: ['datepicker.component.scss'],
    imports: [NbCardModule, NbInputModule, NbDatepickerModule]
})
export class DatepickerComponent {
  protected dateService = inject<NbDateService<Date>>(NbDateService);


  min: Date;
  max: Date;

  constructor() {
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);
  }
}
