import { createAction } from '@ngrx/store';
import { MediaEntity } from '../reducers/list.reducer';

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

// {title: "Some Show", format: "game", recommendedBy: "Bill", note: "Note"}
