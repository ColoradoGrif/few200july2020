import { Action } from '@ngrx/store';
export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
};

// current state, action => next state

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  switch (action.type) {
    case 'Increment': {
      return {
        current: state.current + 1
      };
    }
    case 'Decrement': {
      return {
        current: state.current - 1
      };
    }
    default: {
      return state;
    }
  }
}

