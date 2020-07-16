import { call, takeLatest, put } from 'redux-saga/effects';
import { getGifs } from './api';
import { FETCH_GIFS } from '../constants';
import { fetchGifsError, fetchGifsSuccess } from '../actions';

function* getData() {
  try {
    // const paramsObj = { method: 'GET', url: LIST_BALANCES_URL, API_SECRET };
    // const dataRes = yield call(getGifs, paramsObj);
    // yield put(fetchGifsSuccess(dataRes.crypto));
    yield put(fetchGifsSuccess('gif'));
  } catch (error) {
    console.error(error);
    yield put(fetchGifsError(error));
  }
}

function* gifsSaga() {
  yield takeLatest(FETCH_GIFS, getData);
}

export default gifsSaga;
