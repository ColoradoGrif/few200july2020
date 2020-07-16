import * as fromCounter from './counter.reducer';
import * as fromErrors from './errors.reducer';
import { ActionReducerMap, createSelector } from '@ngrx/store';

export interface AppState {
  counter: fromCounter.CounterState;
  errors: fromErrors.ErrorsState;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer,
  errors: fromErrors.reducer
};


// "Ducks" (just put your selectors here so you get build errors in the same file if something you breaks things.)

// 1. If in a feature module, create a feature selector

// 2. Create a selector per "branch" of your application state.
const selectCounterBranch = (state: AppState) => state.counter;
const selectErrorBranch = (state: AppState) => state.errors;
// 3. Any helpers you need.


// 4. Exported selectors for your components.

// TODO: We need one that returns the current value of the counter (Observable<number>) counter.component.ts
export const selectCountingBy = createSelector(
  selectCounterBranch,
  b => b.by
);

export const selectCurrentCount = createSelector(
  selectCounterBranch,
  b => b.current
);

export const selectResetDisabled = createSelector(
  selectCurrentCount,
  c => c === 0
);


export const selectHasError = createSelector(
  selectErrorBranch,
  b => b.hasError
);

export const selectErrorMessage = createSelector(
  selectErrorBranch,
  b => b.errorMessage
);
