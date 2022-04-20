import { Component, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { ClientPayload } from '../../helpers/interfaces/client-payload';
import { selectAllClients, selectClientsIsLoading } from '../../root-store/client/selectors';
import * as clientActions from '../../root-store/client/actions';
import { ClientUpsertComponent, ClientUpsertModalData } from './components/client-upsert/client-upsert.component';
import { UpsertType } from '../../helpers/enums/upsert-type';

@UntilDestroy()
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  allClients$: Observable<ClientPayload[]> = this.store.select(selectAllClients);
  isLoading$: Observable<boolean> = this.store.select(selectClientsIsLoading);

  constructor(private store: Store, private actions$: Actions, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(clientActions.ListRequested());
    this.actions$.pipe(ofType(clientActions.UpdateSuccess), untilDestroyed(this)).subscribe(action => {
      this.store.dispatch(clientActions.ReadRequested({ id: action.update.id as string }));
    });
  }

  openUpsertModal(): void {
    const config: MatDialogConfig<ClientUpsertModalData> = {
      data: { client: {} as ClientPayload, upsertType: UpsertType.New, title: 'Agregar cliente' }
    };
    this.dialog.open(ClientUpsertComponent, config);
  }
}
