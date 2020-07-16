import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as listActions from '../actions/list.actions';
import * as appActions from '../../../actions/app.actions';
import { map } from 'rxjs/operators';
@Injectable()
export class MediaAppEffects {

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => listActions.loadMedia())
    )
  );

  constructor(private actions$: Actions) { }
}
