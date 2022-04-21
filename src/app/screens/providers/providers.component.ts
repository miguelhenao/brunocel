import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ProviderPayload } from '../../helpers/interfaces/provider-payload';
import { selectAllProviders, selectProvidersIsLoading } from '../../root-store/provider/selectors';
import * as providersActions from '../../root-store/provider/actions';
import { ProviderUpsertComponent, ProviderUpsertData } from './components/provider-upsert/provider-upsert.component';
import { UpsertType } from '../../helpers/enums/upsert-type';

@UntilDestroy()
@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {
  allProviders$: Observable<ProviderPayload[]> = this.store.select(selectAllProviders);
  isLoading$: Observable<boolean> = this.store.select(selectProvidersIsLoading);

  constructor(private store: Store, private actions$: Actions, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(providersActions.ListRequested());
    this.actions$.pipe(ofType(providersActions.UpdateSuccess), untilDestroyed(this)).subscribe(action => {
      this.store.dispatch(providersActions.ReadRequested({ id: action.update.id as string }));
    });
  }

  openUpsertModal(): void {
    const config: MatDialogConfig<ProviderUpsertData> = {
      data: { provider: {} as ProviderPayload, upsertType: UpsertType.New, title: 'Agregar proveedor' }
    };
    this.dialog.open(ProviderUpsertComponent, config);
  }
}
