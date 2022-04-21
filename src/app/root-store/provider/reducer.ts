import { Action, createReducer, on } from '@ngrx/store';

import { initState, State, providerAdapter } from './state';
import * as actions from './actions';

const reducer = createReducer(
  initState,

  on(
    actions.CreateRequested,
    actions.UpdateRequested,
    actions.DeleteRequested,
    (state): State => ({ ...state, isSaving: true })
  ),
  on(actions.ListRequested, actions.ReadRequested, (state): State => ({ ...state, isLoading: true })),

  on(actions.CreateFail, actions.UpdateFail, actions.DeleteFail, (state): State => ({ ...state, isSaving: false })),
  on(actions.ListFail, actions.ReadFail, (state): State => ({ ...state, isLoading: false })),

  on(actions.CreateSuccess, (state, { provider }) => providerAdapter.addOne(provider, { ...state, isSaving: false })),
  on(actions.UpdateSuccess, (state, { update }) => providerAdapter.updateOne(update, { ...state, isSaving: false })),
  on(actions.DeleteSuccess, (state, { id }) => providerAdapter.removeOne(id, { ...state, isSaving: false })),
  on(actions.ListSuccess, (state, { providers }) =>
    providerAdapter.setAll(providers, { ...state, isLoading: false, hasLoaded: true })
  ),
  on(actions.ReadSuccess, (state, { provider }) => providerAdapter.upsertOne(provider, { ...state, isLoading: false }))
);

export function providersReducer(state: State | undefined, action: Action): State {
  return reducer(state, action);
}
