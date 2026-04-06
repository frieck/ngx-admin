import { Component } from '@angular/core';
import { NbCardModule, NbSearchModule } from '@nebular/theme';

@Component({
    selector: 'ngx-search-fields',
    templateUrl: 'search-fields.component.html',
    imports: [NbCardModule, NbSearchModule]
})
export class SearchComponent {
}
