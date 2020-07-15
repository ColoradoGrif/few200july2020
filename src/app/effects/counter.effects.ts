import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import * as actions from '../actions/counter.actions';
import { applicationStarted } from '../actions/app.actions';
import { Action } from 'rxjs/internal/scheduler/Action';
@Injectable()
export class CounterEffects {

  // logIt$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap(a => console.log(`Got an action of type ${a.type}`))
  //   ), { dispatch: false }
  // );

  // countBySet(x) => localStorage -> nothing.

  // dispatch: maybe?
  readCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationStarted), // if the application started
      map(() => localStorage.getItem('by')), // read the value from localStorage => "1" | "3" | "5" OR null
      filter((by) => by !== null), // if it is null, fuggedaboutit. I'm done. Audi.
      map((a: string) => parseInt(a, 10)), //  "1" | "3" | "5" => 1 | 3 | 5
      map(by => actions.countBySet({ by })) // { type: [app counter] count by set, by: 3}  (this will go to the reducer)
    ), { dispatch: true }
  );


  saveCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.countBySet),
      tap((a) => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false }
  );


  constructor(private actions$: Actions) { }
}
