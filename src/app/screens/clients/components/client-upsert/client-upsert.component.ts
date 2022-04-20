import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UpsertType } from '../../../../helpers/enums/upsert-type';
import { ClientPayload } from '../../../../helpers/interfaces/client-payload';
import * as actions from '../../../../root-store/client/actions';
import { selectClientsIsSaving } from '../../../../root-store/client/selectors';
import { FormErrorMessageService } from '../../../../services/form-error-message.service';

export type ClientUpsertModalData = {
  client: ClientPayload;
  upsertType: UpsertType;
  title: string;
};

@UntilDestroy()
@Component({
  selector: 'app-client-upsert',
  templateUrl: './client-upsert.component.html',
  styleUrls: ['./client-upsert.component.scss']
})
export class ClientUpsertComponent implements OnInit {
  isSaving$: Observable<boolean> = this.store.select(selectClientsIsSaving);

  canEdit = this.data.upsertType !== UpsertType.New;
  client: ClientPayload;
  formGroup!: FormGroup;
  title: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: ClientUpsertModalData,
    private dialogRef: MatDialogRef<ClientUpsertComponent>,
    private fb: FormBuilder,
    private store: Store,
    private actions$: Actions,
    public formErrorMessageService: FormErrorMessageService
  ) {
    this.client = this.data.client;
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
      const client: ClientPayload = { ...this.client, ...this.formGroup.value };
      const action = this.data.upsertType === UpsertType.New ? actions.CreateRequested : actions.UpdateRequested;
      this.store.dispatch(action({ client }));
    }
  }

  private buildForm(): void {
    this.formGroup = this.fb.group({
      id: [{ value: this.client?.id, disabled: this.canEdit }, Validators.required],
      name: [this.client?.name],
      phone: [this.client?.phone],
      address: [this.client?.address],
      neighborhood: [this.client?.neighborhood]
    });
  }
}
