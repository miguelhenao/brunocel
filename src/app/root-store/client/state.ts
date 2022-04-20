import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { ClientPayload } from '../../helpers/interfaces/client-payload';

export interface State extends EntityState<ClientPayload> {
  isLoading: boolean;
  isSaving: boolean;
  hasLoaded: boolean;
}

export const clientsAdapter: EntityAdapter<ClientPayload> = createEntityAdapter<ClientPayload>();

export const initState: State = clientsAdapter.getInitialState({
  isLoading: false,
  isSaving: false,
  hasLoaded: false
});

export const { selectAll, selectEntities, selectIds, selectTotal } = clientsAdapter.getSelectors();
