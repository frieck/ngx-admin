import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'ngx-editors',
    template: `
    <router-outlet></router-outlet>
  `,
    imports: [RouterOutlet]
})
export class EditorsComponent {

}
