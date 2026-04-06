import { Component } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { TinyMCEComponent as TinyMCEComponent_1 } from '../../../@theme/components/tiny-mce/tiny-mce.component';

@Component({
    selector: 'ngx-tiny-mce-page',
    template: `
    <nb-card>
      <nb-card-header>
        Tiny MCE
      </nb-card-header>
      <nb-card-body>
        <ngx-tiny-mce></ngx-tiny-mce>
      </nb-card-body>
    </nb-card>
  `,
    imports: [NbCardModule, TinyMCEComponent_1]
})
export class TinyMCEComponent {
}
