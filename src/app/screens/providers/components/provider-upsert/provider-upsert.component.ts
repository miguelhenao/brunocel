import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UpsertType } from '../../../../helpers/enums/upsert-type';
import { ProviderPayload } from '../../../../helpers/interfaces/provider-payload';
import { selectProvidersIsSaving } from '../../../../root-store/provider/selectors';
import { FormErrorMessageService } from '../../../../services/form-error-message.service';
import * as actions from '../../../../root-store/provider/actions';

export type ProviderUpsertData = {
  provider: ProviderPayload;
  upsertType: UpsertType;
  title: string;
};

@UntilDestroy()
@Component({
  templateUrl: './provider-upsert.component.html',
  styleUrls: ['./provider-upsert.component.scss']
})
export class ProviderUpsertComponent implements OnInit {
  isSaving$: Observable<boolean> = this.store.select(selectProvidersIsSaving);

  canEdit = this.data.upsertType !== UpsertType.New;
  formGroup!: FormGroup;
  provider: ProviderPayload;
  title: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: ProviderUpsertData,
    private dialogRef: MatDialogRef<ProviderUpsertComponent>,
    private fb: FormBuilder,
    private actions$: Actions,
    private store: Store,
    public formErrorMessageService: FormErrorMessageService
  ) {
    this.provider = this.data.provider;
    this.title = this.data.title;
  }

  ngOnInit(): void {
    this.buildForm();
    this.actions$.pipe(ofType(actions.CreateSuccess, actions.UpdateSuccess), untilDestroyed(this)).subscribe(() => {
      this.store.dispatch(actions.ListRequested());
      this.dialogRef.close();
    });
  }

  onSubmit(): void {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      const provider: ProviderPayload = { ...this.provider, ...this.formGroup.value };
      const action = this.data.upsertType === UpsertType.New ? actions.CreateRequested : actions.UpdateRequested;
      this.store.dispatch(action({ provider }));
    }
  }

  private buildForm(): void {
    this.formGroup = this.fb.group({
      id: [{ value: this.provider?.id, disabled: this.canEdit }, Validators.required],
      name: [this.provider?.name, Validators.required],
      phone: [this.provider?.phone, Validators.required],
      address: [this.provider?.address, Validators.required],
      neighborhood: [this.provider?.neighborhood, Validators.required]
    });
  }
}
