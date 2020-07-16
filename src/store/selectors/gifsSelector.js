import { createSelector } from 'reselect';

const stateSelector = state => state;
export const getState = createSelector([stateSelector], state => state);

const targetSelector = state => state.gifsSearch.target;
export const getTarget = createSelector([targetSelector], target => target);

const targetValueSelector = state => state.gifsSearch.target;
export const getTargetValue = createSelector([targetValueSelector], target => target.value);

const targetDataSelector = state => state.gifsSearch.target;
export const getTargetData = createSelector([targetDataSelector], target => target.data);
