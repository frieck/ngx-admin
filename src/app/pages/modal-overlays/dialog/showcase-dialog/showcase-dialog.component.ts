import { Component, Input } from '@angular/core';
import { NbDialogRef, NbCardModule, NbButtonModule } from '@nebular/theme';

@Component({
    selector: 'ngx-showcase-dialog',
    templateUrl: 'showcase-dialog.component.html',
    styleUrls: ['showcase-dialog.component.scss'],
    imports: [NbCardModule, NbButtonModule]
})
export class ShowcaseDialogComponent {

  @Input() title: string;

  constructor(protected ref: NbDialogRef<ShowcaseDialogComponent>) {}

  dismiss() {
    this.ref.close();
  }
}
