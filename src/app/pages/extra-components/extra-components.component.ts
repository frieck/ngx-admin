import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'ngx-components',
    template: `
    <router-outlet></router-outlet>
  `,
    imports: [RouterOutlet]
})
export class ExtraComponentsComponent {
}
