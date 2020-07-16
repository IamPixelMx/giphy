import { FETCH_GIFS, FETCH_GIFS_ERROR, FETCH_GIFS_SUCCESS } from '../constants';

import { gifsSearch } from '../models';

const INITIAL_STATE = gifsSearch;

const gifsReducer = (state = INITIAL_STATE, { type, payload = {} }) => {
  switch (type) {
    case FETCH_GIFS:
      return {
        ...state,
        target: {
          ...payload,
          data: '',
        },
        fetching: true,
      };

    case FETCH_GIFS_ERROR:
      return {
        target: { ...state.target, value: undefined, trending: false },
        error: payload,
        fetching: false,
      };

    case FETCH_GIFS_SUCCESS:
      return {
        target: {
          ...state.target,
          data: payload,
        },
        fetching: false,
        error: '',
      };

    default:
      return state;
  }
};

export default gifsReducer;
