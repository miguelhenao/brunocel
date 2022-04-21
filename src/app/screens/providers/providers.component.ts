import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ProviderPayload } from '../../helpers/interfaces/provider-payload';
import { selectAllProviders, selectProvidersIsLoading } from '../../root-store/provider/selectors';
import * as providersActions from '../../root-store/provider/actions';

@UntilDestroy()
@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {
  allProviders$: Observable<ProviderPayload[]> = this.store.select(selectAllProviders);
  isLoading$: Observable<boolean> = this.store.select(selectProvidersIsLoading);

  constructor(private store: Store, private actions$: Actions) {}

  ngOnInit(): void {
    this.store.dispatch(providersActions.ListRequested());
    this.actions$.pipe(ofType(providersActions.UpdateSuccess), untilDestroyed(this)).subscribe(action => {
      this.store.dispatch(providersActions.ReadRequested({ id: action.update.id as string }));
    });
  }
}
