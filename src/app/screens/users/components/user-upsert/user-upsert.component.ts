import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { UpsertType } from '../../../../helpers/enums/upsert-type';
import { UserPayload } from '../../../../helpers/interfaces/user-payload';
import * as actions from '../../../../root-store/user/actions';
import { selectUsersIsSaving } from '../../../../root-store/user/selectors';
import { FormErrorMessageService } from '../../../../services/form-error-message.service';

export type UserUpsertModalData = {
  user: UserPayload;
  upsertType: UpsertType;
  title: string;
};

@UntilDestroy()
@Component({
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.scss']
})
export class UserUpsertComponent implements OnInit {
  isSaving$ = this.store.select(selectUsersIsSaving);
  canEdit = this.data.upsertType !== UpsertType.New;
  formGroup!: FormGroup;
  title: string;
  user: UserPayload;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: UserUpsertModalData,
    private dialogRef: MatDialogRef<UserUpsertComponent>,
    private fb: FormBuilder,
    private store: Store,
    private actions$: Actions,
    public formErrorMessageService: FormErrorMessageService
  ) {
    this.title = data.title;
    this.user = data.user;
  }

  ngOnInit(): void {
    this.buildForm();
    this.actions$.pipe(ofType(actions.CreateSuccess, actions.UpdateSuccess), untilDestroyed(this)).subscribe(() => {
      this.store.dispatch(actions.ListRequested());
      this.dialogRef.close();
    });
  }

  save(): void {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      const user: UserPayload = { ...this.user, ...this.formGroup.value };
      const action = this.data.upsertType === UpsertType.New ? actions.CreateRequested : actions.UpdateRequested;
      this.store.dispatch(action({ user }));
    }
  }

  private buildForm(): void {
    this.formGroup = this.fb.group({
      id: [{ value: this.user?.id, disabled: this.canEdit }, Validators.required],
      name: [this.user?.name],
      phone: [this.user?.phone],
      address: [this.user?.address],
      neighborhood: [this.user?.neighborhood],
      type: [this.user?.type],
      userId: [this.user?.userId]
    });
  }
}
