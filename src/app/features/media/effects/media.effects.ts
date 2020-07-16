import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MediaDataService } from '../services/media.data.service';
import * as actions from '../actions/list.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MediaEntity } from '../reducers/list.reducer';
@Injectable()
export class MediaEffects {

  // turn a mediaConsumed -> api call -> nothing (unless there is an error, but there won't be. because is classroom crap)
  markConsumed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.mediaConsumed),
      switchMap((action) => this.service.markConsumed(action.payload))
    ), { dispatch: false }
  );


  // turns a mediaAdded -> mediaAddedSuccessfully | mediaAddedFailure
  saveData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.mediaItemAdded),
      switchMap(originalAction => this.service.addOne(originalAction.payload)
        .pipe(
          map(response => actions.mediaItemAddedSuccessfully({
            originalId: originalAction.payload.id,
            payload: response
          })),
          catchError((r) => of(actions.mediaItemAddedFailure({
            message: JSON.stringify(r),
            payload: originalAction.payload
          }))
          )
        )
      )
    ), { dispatch: true }
  );

  // turns a loadMedia -> loadMediaSucceeded (or loadMediaFailed)
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadMedia),
      switchMap(() => this.service.getAll()
        .pipe(
          map(payload => actions.loadMediaSucceeeded({ payload }))
        )
      )
    ), { dispatch: true }
  );

  constructor(private actions$: Actions, private service: MediaDataService) { }
}
