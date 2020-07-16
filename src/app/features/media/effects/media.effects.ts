import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MediaDataService } from '../services/media.data.service';
import * as actions from '../actions/list.actions';
@Injectable()
export class MediaEffects {

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadMedia),

    )
    , { dispatch: false }
  );
  constructor(private actions$: Actions, private service: MediaDataService) { }
}
