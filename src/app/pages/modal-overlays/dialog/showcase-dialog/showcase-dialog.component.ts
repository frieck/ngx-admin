import { Component, Input, inject } from '@angular/core';
import { NbDialogRef, NbCardModule, NbButtonModule } from '@nebular/theme';

@Component({
    selector: 'ngx-showcase-dialog',
    templateUrl: 'showcase-dialog.component.html',
    styleUrls: ['showcase-dialog.component.scss'],
    imports: [NbCardModule, NbButtonModule]
})
export class ShowcaseDialogComponent {
  protected ref = inject<NbDialogRef<ShowcaseDialogComponent>>(NbDialogRef);


  @Input() title: string;

  dismiss() {
    this.ref.close();
  }
}
