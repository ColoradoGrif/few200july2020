import { createAction } from '@ngrx/store';

export const applicationStarted = createAction(
  '[app] APPLICATION_STARTED' // a little homage to ASP
);
