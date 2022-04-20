import { Action, createReducer, on } from '@ngrx/store';

import { initState, State, clientsAdapter } from './state';
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

  on(actions.CreateSuccess, (state, { client }) => clientsAdapter.addOne(client, { ...state, isSaving: false })),
  on(actions.UpdateSuccess, (state, { update }) => clientsAdapter.updateOne(update, { ...state, isSaving: false })),
  on(actions.DeleteSuccess, (state, { id }) => clientsAdapter.removeOne(id, { ...state, isSaving: false })),
  on(actions.ListSuccess, (state, { clients }) =>
    clientsAdapter.setAll(clients, { ...state, isLoading: false, hasLoaded: true })
  ),
  on(actions.ReadSuccess, (state, { client }) => clientsAdapter.upsertOne(client, { ...state, isLoading: false }))
);

export function clientsReducer(state: State | undefined, action: Action): State {
  return reducer(state, action);
}
