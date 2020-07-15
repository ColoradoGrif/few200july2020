import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromList from './list.reducer';
import { MediaItem } from '../models';
export const featureName = 'mediaFeature';

export interface MediaState {
  list: fromList.ListState;
}

export const reducers: ActionReducerMap<MediaState> = {
  list: fromList.reducer
};


// 1. Feature Selector
const selectMediaFeature = createFeatureSelector<MediaState>(featureName);
// 2. Selector Per Branch
const selectListBranch = createSelector(
  selectMediaFeature,
  f => f.list
);

// 3. Helpers
// console.log(fromList.adapter.getSelectors(selectListBranch));

const { selectAll: selectMediaEntityArray } = fromList.adapter.getSelectors(selectListBranch);
// 4. What the components need.
// TODO: We need one that returns models.MediaItem[]

export const selectMediaLitems = createSelector(
  selectMediaEntityArray,
  m => m as MediaItem[]
);
