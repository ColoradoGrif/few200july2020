import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as listActions from '../actions/list.actions';
import * as appActions from '../../../actions/app.actions';
import { map } from 'rxjs/operators';
@Injectable()
export class MediaAppEffects {

  // when application is started, load the data
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => listActions.loadMedia())
    )
  );


  // when *I* have an error (mediaFeature) -> tell the application to display an error
  // TODO: Write this code.
  addMediaError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(listActions.mediaItemAddedFailure),
      map(a => appActions.displayApplicationError({ message: a.message + ` - Title: ${a.payload.title}` }))
    ), { dispatch: true }
  );

  constructor(private actions$: Actions) { }
}
