import { Component } from '@angular/core';
import { NbCardModule, NbInputModule, NbCheckboxModule, NbButtonModule, NbRadioModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'ngx-form-layouts',
    styleUrls: ['./form-layouts.component.scss'],
    templateUrl: './form-layouts.component.html',
    imports: [NbCardModule, FormsModule, NbInputModule, NbCheckboxModule, NbButtonModule, NbRadioModule]
})
export class FormLayoutsComponent {

}
