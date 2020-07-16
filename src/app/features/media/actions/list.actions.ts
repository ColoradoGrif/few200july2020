import { createAction, props } from '@ngrx/store';
import { MediaEntity } from '../reducers/list.reducer';
import { MediaItem } from '../models';

let fakeId = 0;

export const mediaItemAdded = createAction(
  '[media list] media item added',
  ({ title, format, recommendedBy, note }: { title: string, format: string, recommendedBy: string, note: string }) => ({
    payload: {
      title,
      format,
      recommendedBy,
      note,
      id: 'T' + fakeId++
    } as MediaEntity
  })
);

export const mediaItemAddedSuccessfully = createAction(
  '[media list] media item added successfully',
  props<{ originalId: string, payload: MediaEntity }>()
);

export const mediaItemAddedFailure = createAction(
  '[media list] media item added failure',
  props<{ payload: MediaEntity, message: string }>()
);
// {title: "Some Show", format: "game", recommendedBy: "Bill", note: "Note"}

// Initiating Action - what you want the effect to do
export const loadMedia = createAction(
  '[media list] load media'
);
// Success Action - what the Effect should produce if it worked
export const loadMediaSucceeeded = createAction(
  '[media list] load media succeeded',
  props<{ payload: MediaEntity[] }>()
);
// Failure Action - what the Effect should produce if it failed
export const loadMediaFailed = createAction(
  '[media list] load media failed',
  props<{ errorMessage: string }>()
);


// consuming media actions

export const mediaConsumed = createAction(
  '[media list] media consumed',
  ({ media }: { media: MediaEntity }) => ({
    payload: {
      ...media,
      consumedOn: new Date().toISOString()
    } as MediaEntity
  })
);
