import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';
export interface CounterState {
  current: number;
  by: number;
}

const initialState: CounterState = {
  current: 0,
  by: 1
};

// current state, action => next state
const myReducer = createReducer(
  initialState,
  on(actions.countIncremented, (state) => ({ ...state, current: state.current + state.by })),
  on(actions.countDecremented, (state) => ({ ...state, current: state.current - state.by })),
  on(actions.countReset, () => initialState),
  on(actions.countBySet, (state, action) => ({ ...state, by: action.by }))
);

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return myReducer(state, action);
}

