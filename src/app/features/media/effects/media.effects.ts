import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MediaDataService } from '../services/media.data.service';
import * as actions from '../actions/list.actions';
import { switchMap, map } from 'rxjs/operators';
@Injectable()
export class MediaEffects {

  // turns a mediaAdded -> mediaAddedSuccessfully | mediaAddedFailure
  saveData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.mediaItemAdded),
      switchMap(originalAction => this.service.addOne(originalAction.payload)
        .pipe(
          map(response => actions.mediaItemAddedSuccessfully({
            originalId: originalAction.payload.id,
            payload: response
          }))
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
