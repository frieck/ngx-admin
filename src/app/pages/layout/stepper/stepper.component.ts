import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbStepperModule, NbButtonModule } from '@nebular/theme';
import { NgClass } from '@angular/common';

@Component({
    selector: 'ngx-stepper',
    templateUrl: 'stepper.component.html',
    styleUrls: ['stepper.component.scss'],
    imports: [NbCardModule, NbStepperModule, NbButtonModule, FormsModule, ReactiveFormsModule, NgClass]
})
export class StepperComponent implements OnInit {
  private fb = inject(UntypedFormBuilder);


  firstForm: UntypedFormGroup;
  secondForm: UntypedFormGroup;
  thirdForm: UntypedFormGroup;

  ngOnInit() {
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }
}
