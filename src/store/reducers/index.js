import { combineReducers } from 'redux';

import gifsReducer from './gifsReducer';

const rootReducer = combineReducers({
  gifsSearch: gifsReducer,
});

export default rootReducer;
