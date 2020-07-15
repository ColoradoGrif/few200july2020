import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/list.actions';

export interface MediaEntity {
  id: string;
  title: string;
  format: string;
  recommendedBy: string;
  note: string;
}

export interface ListState extends EntityState<MediaEntity> {

}

export const adapter = createEntityAdapter<MediaEntity>();

// const initialState = adapter.getInitialState();
const initialState: ListState = {
  ids: ['1', '2'],
  entities: {
    1: { id: '1', title: 'Fire Walk With Me', recommendedBy: 'Jeff', format: 'Movie', note: 'Multiple trigger warnings.' },
    2: { id: '2', title: 'Overwatch', recommendedBy: 'Henry', format: 'Game', note: 'Fun multiplayer' }
  }
};

const reducerFunction = createReducer(
  initialState,
  on(actions.mediaItemAdded, (s, a) => adapter.addOne(a.payload, s))
);

export function reducer(state: ListState = initialState, action: Action): ListState {
  return reducerFunction(state, action);
}



