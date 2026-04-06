import { NbMenuService, NbCardModule, NbButtonModule } from '@nebular/theme';
import { Component } from '@angular/core';

@Component({
    selector: 'ngx-not-found',
    styleUrls: ['./not-found.component.scss'],
    templateUrl: './not-found.component.html',
    imports: [NbCardModule, NbButtonModule]
})
export class NotFoundComponent {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
