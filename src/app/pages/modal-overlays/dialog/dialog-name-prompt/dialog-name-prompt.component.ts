import { Component } from '@angular/core';
import { NbDialogRef, NbCardModule, NbInputModule, NbButtonModule } from '@nebular/theme';

@Component({
    selector: 'ngx-dialog-name-prompt',
    templateUrl: 'dialog-name-prompt.component.html',
    styleUrls: ['dialog-name-prompt.component.scss'],
    imports: [NbCardModule, NbInputModule, NbButtonModule]
})
export class DialogNamePromptComponent {

  constructor(protected ref: NbDialogRef<DialogNamePromptComponent>) {}

  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }
}
