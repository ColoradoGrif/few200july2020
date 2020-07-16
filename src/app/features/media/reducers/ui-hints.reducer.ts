import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '../actions/list.actions';
export interface UiHintsState {
  mediaLoaded: boolean;
}

const initialState: UiHintsState = {
  mediaLoaded: false
};

const reducerFunction = createReducer(
  initialState,
  on(actions.loadMedia, actions.loadMediaFailed, (s, a) => ({ mediaLoaded: false })),
  on(actions.loadMediaSucceeeded, (s, a) => ({ mediaLoaded: true }))
);

export function reducer(state: UiHintsState, action: Action): UiHintsState {
  return reducerFunction(state, action);
}
