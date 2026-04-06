import { Component } from '@angular/core';
import { NbCardModule, NbInputModule, NbSelectModule, NbOptionModule, NbCheckboxModule, NbRadioModule } from '@nebular/theme';

@Component({
    selector: 'ngx-form-inputs',
    styleUrls: ['./form-inputs.component.scss'],
    templateUrl: './form-inputs.component.html',
    imports: [NbCardModule, NbInputModule, NbSelectModule, NbOptionModule, NbCheckboxModule, NbRadioModule]
})
export class FormInputsComponent {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
}
