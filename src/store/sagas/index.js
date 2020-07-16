import { all } from 'redux-saga/effects';
//sagas
import gifsSaga from './gifsSaga';

function* rootSaga() {
  yield all([gifsSaga()]);
}

export default rootSaga;
