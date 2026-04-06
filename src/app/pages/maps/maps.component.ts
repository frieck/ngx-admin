import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'ngx-maps',
    template: `
    <router-outlet></router-outlet>
  `,
    imports: [RouterOutlet]
})
export class MapsComponent {
}
