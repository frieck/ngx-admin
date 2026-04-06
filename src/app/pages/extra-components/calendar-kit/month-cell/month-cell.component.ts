import { Component, EventEmitter, inject } from '@angular/core';
import { NbCalendarCell, NbCalendarDayPickerComponent, NbCalendarMonthModelService, NbDateService, NbCalendarKitModule } from '@nebular/theme';
import { TranslationWidth } from '@angular/common';

@Component({
    selector: 'ngx-calendar-kit-month-cell',
    styleUrls: ['month-cell.component.scss'],
    templateUrl: 'month-cell.component.html',
    imports: [NbCalendarKitModule]
})
export class CalendarKitMonthCellComponent extends NbCalendarDayPickerComponent<Date, Date>
  implements NbCalendarCell<Date, Date> {
  private dateService = inject<NbDateService<Date>>(NbDateService);

  select: EventEmitter<Date> = new EventEmitter();
  selectedValue: Date;

  constructor() {
    const monthModel = inject<NbCalendarMonthModelService<Date>>(NbCalendarMonthModelService);

    super(monthModel);
  }

  get title() {
    return this.dateService.getMonthName(this.date, TranslationWidth.Wide);
  }
}
