import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromList from './list.reducer';
import * as fromUiHints from './ui-hints.reducer';
import { MediaItem } from '../models';
export const featureName = 'mediaFeature';

export interface MediaState {
  list: fromList.ListState;
  ui: fromUiHints.UiHintsState;
}

export const reducers: ActionReducerMap<MediaState> = {
  list: fromList.reducer,
  ui: fromUiHints.reducer
};


// 1. Feature Selector
const selectMediaFeature = createFeatureSelector<MediaState>(featureName);
// 2. Selector Per Branch
const selectListBranch = createSelector(
  selectMediaFeature,
  f => f.list
);
const selectUiBranch = createSelector(
  selectMediaFeature,
  f => f.ui
);
// 3. Helpers
// console.log(fromList.adapter.getSelectors(selectListBranch));

const { selectAll: selectMediaEntityArray } = fromList.adapter.getSelectors(selectListBranch);
// 4. What the components need.
// TODO: We need one that returns models.MediaItem[]

export const selectMediaLitems = createSelector(
  selectMediaEntityArray,
  media => media.map(m => ({
    ...m,
    isTemporary: m.id.toString().startsWith('T')
  } as MediaItem))
);

export const selectMediaLoaded = createSelector(
  selectUiBranch,
  b => b.mediaLoaded
);
