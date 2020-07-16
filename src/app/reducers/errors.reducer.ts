import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '../actions/app.actions';
export interface ErrorsState {
  errorMessage: string;
  hasError: boolean;
}

const initialState: ErrorsState = {
  errorMessage: null,
  hasError: false
};


const reducerFunction = createReducer(
  initialState,
  on(actions.displayApplicationError, (s, a) => ({ errorMessage: a.message, hasError: true })),
  on(actions.clearApplicationError, (s, a) => initialState)
);

export function reducer(state: ErrorsState, action: Action): ErrorsState {
  return reducerFunction(state, action);
}
