import { Component, OnDestroy, inject } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

import { Contacts, RecentUsers, UserData } from '../../../@core/data/users';
import { NbCardModule, NbTabsetModule, NbListModule, NbUserModule, NbIconModule } from '@nebular/theme';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'ngx-contacts',
    styleUrls: ['./contacts.component.scss'],
    templateUrl: './contacts.component.html',
    imports: [NbCardModule, NbTabsetModule, NbListModule, NbUserModule, NbIconModule, DatePipe]
})
export class ContactsComponent implements OnDestroy {
  private userService = inject(UserData);


  private alive = true;

  contacts: any[];
  recent: any[];

  constructor() {
    forkJoin(
      this.userService.getContacts(),
      this.userService.getRecentUsers(),
    )
      .pipe(takeWhile(() => this.alive))
      .subscribe(([contacts, recent]: [Contacts[], RecentUsers[]]) => {
        this.contacts = contacts;
        this.recent = recent;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
