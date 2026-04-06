import { Component, inject } from '@angular/core';
import { NbDialogRef, NbCardModule, NbInputModule, NbButtonModule } from '@nebular/theme';

@Component({
    selector: 'ngx-dialog-name-prompt',
    templateUrl: 'dialog-name-prompt.component.html',
    styleUrls: ['dialog-name-prompt.component.scss'],
    imports: [NbCardModule, NbInputModule, NbButtonModule]
})
export class DialogNamePromptComponent {
  protected ref = inject<NbDialogRef<DialogNamePromptComponent>>(NbDialogRef);


  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }
}
