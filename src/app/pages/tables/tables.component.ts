import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'ngx-tables',
    template: `<router-outlet></router-outlet>`,
    imports: [RouterOutlet]
})
export class TablesComponent {
}
