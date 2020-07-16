import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/list.actions';

export interface MediaEntity {
  id: string;
  title: string;
  format: string;
  recommendedBy: string;
  note: string;
  consumedOn: null | string;
}

export interface ListState extends EntityState<MediaEntity> {

}

export const adapter = createEntityAdapter<MediaEntity>();

const initialState = adapter.getInitialState();


const reducerFunction = createReducer(
  initialState,
  on(actions.mediaItemAdded, (s, a) => adapter.addOne(a.payload, s)),
  on(actions.loadMediaSucceeeded, (s, a) => adapter.setAll(a.payload, s)),
  on(actions.mediaItemAddedSuccessfully, (s, a) => {
    const tempState = adapter.removeOne(a.originalId, s);
    return adapter.addOne(a.payload, tempState);
  }),
  on(actions.mediaItemAddedFailure, (s, a) => adapter.removeOne(a.payload.id, s)),
  on(actions.mediaConsumed, (s, a) => adapter.updateOne({
    id: a.payload.id,
    changes: {
      consumedOn: a.payload.consumedOn
    }
  }, s))
);

export function reducer(state: ListState = initialState, action: Action): ListState {
  return reducerFunction(state, action);
}



