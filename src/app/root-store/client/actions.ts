import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { ClientPayload } from '../../helpers/interfaces/client-payload';

export const ListRequested = createAction('[Client Effects] LIST Clients Requested');
export const ListSuccess = createAction('[Client Effects] LIST Clients Success', props<{ clients: ClientPayload[] }>());
export const ListFail = createAction('[Client Effects] LIST Clients Fail', props<{ error: HttpErrorResponse }>());

export const CreateRequested = createAction(
  '[Client Effects] CREATE Client Requested',
  props<{ client: ClientPayload }>()
);
export const CreateSuccess = createAction(
  '[Client Effects] CREATE Client Success',
  props<{ client: ClientPayload; message: string }>()
);
export const CreateFail = createAction('[Client Effects] CREATE Client Fail', props<{ error: HttpErrorResponse }>());

export const ReadRequested = createAction('[Client Effects] READ Client Requested', props<{ id: string }>());
export const ReadSuccess = createAction('[Client Effects] READ Client Success', props<{ client: ClientPayload }>());
export const ReadFail = createAction('[Client Effects] READ Client Fail', props<{ error: HttpErrorResponse }>());

export const UpdateRequested = createAction(
  '[Client Effects] UPDATE Client Requested',
  props<{ client: ClientPayload }>()
);
export const UpdateSuccess = createAction(
  '[Client Effects] UPDATE Client Success',
  props<{ update: Update<ClientPayload>; message: string }>()
);
export const UpdateFail = createAction('[Client Effects] UPDATE Client Fail', props<{ error: HttpErrorResponse }>());

export const DeleteRequested = createAction('[Client Effects] DELETE Client Requested', props<{ id: string }>());
export const DeleteSuccess = createAction(
  '[Client Effects] DELETE Client Success',
  props<{ id: string; message: string }>()
);
export const DeleteFail = createAction('[Client Effects] DELETE Client Fail', props<{ error: HttpErrorResponse }>());
