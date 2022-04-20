/* eslint-disable no-console */
/* eslint-disable rxjs/no-implicit-any-catch */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mapTo, tap } from 'rxjs/operators';

import { ClientPayload } from '../../helpers/interfaces/client-payload';
import { ClientService } from '../../services/client.service';
import * as actions from './actions';

@Injectable()
export class ClientsEffects {
  create$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.CreateRequested),
      exhaustMap(action =>
        this.clientService.create(action.client).pipe(
          map(client => actions.CreateSuccess({ client, message: this.createMessage })),
          catchError(error => of(actions.CreateFail(error)))
        )
      )
    );
  });

  read$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.ReadRequested),
      exhaustMap(action =>
        this.clientService.read(action.id).pipe(
          map(client => actions.ReadSuccess({ client })),
          catchError(error => of(actions.ReadFail({ error: error })))
        )
      )
    );
  });

  list$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.ListRequested),
      exhaustMap(() =>
        this.clientService.list().pipe(
          map(clients => actions.ListSuccess({ clients })),
          catchError(error => of(actions.ListFail(error)))
        )
      )
    );
  });

  update$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.UpdateRequested),
      exhaustMap(action => {
        return this.clientService.update(action.client).pipe(
          map(client => {
            const update: Update<ClientPayload> = {
              id: client.id,
              changes: client
            };
            return actions.UpdateSuccess({
              update,
              message: this.updateMessage
            });
          }),
          catchError(error => of(actions.UpdateFail(error)))
        );
      })
    );
  });

  delete$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.DeleteRequested),
      exhaustMap(action =>
        this.clientService.delete(action.id).pipe(
          mapTo(
            actions.DeleteSuccess({
              id: action.id,
              message: 'DELETE'
            })
          ),
          catchError(error => of(actions.DeleteFail({ error })))
        )
      )
    );
  });

  success$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(actions.CreateSuccess, actions.UpdateSuccess),
        tap(action => console.log(action.message))
      );
    },
    { dispatch: false }
  );

  failure$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(actions.CreateFail, actions.UpdateFail, actions.ListFail, actions.ReadFail),
        tap(action => console.log(action.error))
      );
    },
    { dispatch: false }
  );

  private createMessage = 'Creado';
  private updateMessage = 'Actualizado';

  constructor(private actions$: Actions, private clientService: ClientService) {}
}
