import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromClients from './state';

export const selectClientsState = createFeatureSelector<fromClients.State>('clients');
export const selectClientsIsLoading = createSelector(selectClientsState, (state: fromClients.State) => state.isLoading);
export const selectClientsIsSaving = createSelector(selectClientsState, (state: fromClients.State) => state.isSaving);
export const selectClientsIsHasLoaded = createSelector(
  selectClientsState,
  (state: fromClients.State) => state.hasLoaded
);
export const selectAllClients = createSelector(selectClientsState, fromClients.selectAll);
