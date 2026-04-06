import { NbMenuService, NbCardModule, NbButtonModule } from '@nebular/theme';
import { Component, inject } from '@angular/core';

@Component({
    selector: 'ngx-not-found',
    styleUrls: ['./not-found.component.scss'],
    templateUrl: './not-found.component.html',
    imports: [NbCardModule, NbButtonModule]
})
export class NotFoundComponent {
  private menuService = inject(NbMenuService);


  goToHome() {
    this.menuService.navigateHome();
  }
}
