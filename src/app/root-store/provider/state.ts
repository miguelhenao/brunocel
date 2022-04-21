import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { ProviderPayload } from '../../helpers/interfaces/provider-payload';

export interface State extends EntityState<ProviderPayload> {
  isLoading: boolean;
  isSaving: boolean;
  hasLoaded: boolean;
}

export const providerAdapter: EntityAdapter<ProviderPayload> = createEntityAdapter<ProviderPayload>();

export const initState: State = providerAdapter.getInitialState({
  isLoading: false,
  isSaving: false,
  hasLoaded: false
});

export const { selectAll, selectEntities, selectIds, selectTotal } = providerAdapter.getSelectors();
