import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { ProviderPayload } from '../../helpers/interfaces/provider-payload';

export const ListRequested = createAction('[Provider Effects] LIST Providers Requested');
export const ListSuccess = createAction(
  '[Provider Effects] LIST Providers Success',
  props<{ providers: ProviderPayload[] }>()
);
export const ListFail = createAction('[Provider Effects] LIST Providers Fail', props<{ error: HttpErrorResponse }>());

export const CreateRequested = createAction(
  '[Provider Effects] CREATE Provider Requested',
  props<{ provider: ProviderPayload }>()
);
export const CreateSuccess = createAction(
  '[Provider Effects] CREATE Provider Success',
  props<{ provider: ProviderPayload; message: string }>()
);
export const CreateFail = createAction(
  '[Provider Effects] CREATE Provider Fail',
  props<{ error: HttpErrorResponse }>()
);

export const ReadRequested = createAction('[Provider Effects] READ Provider Requested', props<{ id: string }>());
export const ReadSuccess = createAction(
  '[Provider Effects] READ Provider Success',
  props<{ provider: ProviderPayload }>()
);
export const ReadFail = createAction('[Provider Effects] READ Provider Fail', props<{ error: HttpErrorResponse }>());

export const UpdateRequested = createAction(
  '[Provider Effects] UPDATE Provider Requested',
  props<{ provider: ProviderPayload }>()
);
export const UpdateSuccess = createAction(
  '[Provider Effects] UPDATE Provider Success',
  props<{ update: Update<ProviderPayload>; message: string }>()
);
export const UpdateFail = createAction(
  '[Provider Effects] UPDATE Provider Fail',
  props<{ error: HttpErrorResponse }>()
);

export const DeleteRequested = createAction('[Provider Effects] DELETE Provider Requested', props<{ id: string }>());
export const DeleteSuccess = createAction(
  '[Provider Effects] DELETE Provider Success',
  props<{ id: string; message: string }>()
);
export const DeleteFail = createAction(
  '[Provider Effects] DELETE Provider Fail',
  props<{ error: HttpErrorResponse }>()
);
