/* eslint-disable no-console */
/* eslint-disable rxjs/no-implicit-any-catch */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mapTo, tap } from 'rxjs/operators';

import { ProviderPayload } from '../../helpers/interfaces/provider-payload';
import { ProviderService } from '../../services/provider.service';
import * as actions from './actions';

@Injectable()
export class ProvidersEffects {
  create$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.CreateRequested),
      exhaustMap(action =>
        this.providerService.create(action.provider).pipe(
          map(provider => actions.CreateSuccess({ provider, message: this.createMessage })),
          catchError(error => of(actions.CreateFail(error)))
        )
      )
    );
  });

  read$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.ReadRequested),
      exhaustMap(action =>
        this.providerService.read(action.id).pipe(
          map(provider => actions.ReadSuccess({ provider })),
          catchError(error => of(actions.ReadFail({ error: error })))
        )
      )
    );
  });

  list$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.ListRequested),
      exhaustMap(() =>
        this.providerService.list().pipe(
          map(providers => actions.ListSuccess({ providers })),
          catchError(error => of(actions.ListFail(error)))
        )
      )
    );
  });

  update$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.UpdateRequested),
      exhaustMap(action => {
        return this.providerService.update(action.provider).pipe(
          map(provider => {
            const update: Update<ProviderPayload> = {
              id: provider.id,
              changes: provider
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
        this.providerService.delete(action.id).pipe(
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

  constructor(private actions$: Actions, private providerService: ProviderService) {}
}
