import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromProviders from './state';

export const selectProvidersState = createFeatureSelector<fromProviders.State>('providers');
export const selectProvidersIsLoading = createSelector(
  selectProvidersState,
  (state: fromProviders.State) => state.isLoading
);
export const selectProvidersIsSaving = createSelector(
  selectProvidersState,
  (state: fromProviders.State) => state.isSaving
);
export const selectProvidersIsHasLoaded = createSelector(
  selectProvidersState,
  (state: fromProviders.State) => state.hasLoaded
);
export const selectAllProviders = createSelector(selectProvidersState, fromProviders.selectAll);
