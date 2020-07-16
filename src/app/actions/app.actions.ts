import { createAction, props } from '@ngrx/store';

export const applicationStarted = createAction(
  '[app] APPLICATION_STARTED' // a little homage to ASP
);

export const displayApplicationError = createAction(
  '[app] APPLICATION_ERROR',
  props<{ message: string }>()
);

export const clearApplicationError = createAction(
  '[app] Clear application error'
);
