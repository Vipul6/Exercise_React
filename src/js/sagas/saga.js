import { call, put, takeEvery, all } from 'redux-saga/effects'
import * as actionTypes from '../constants/constants.js'
import { getData, submitData } from '../apis/api'
import * as actions from '../actions/actions'
import 'regenerator-runtime/runtime'

export function* fetchData() {
  try {
    const data = yield call(getData)
    yield put(actions.getDataSuccess(data))
  } catch (error) {
    yield put(actions.getDataFailure(error.message))
  }
}

export function* submit(action) {
  try {
    const res = yield call(submitData, action.data);
    yield put(actions.submitDataSuccess(res))
  } catch (error) {
    yield put(actions.submitDataFailure(error.message))
  }
}

export function* watchFetchAsync() {
  yield takeEvery(actionTypes.GET_DATA_REQUEST, fetchData)
  yield takeEvery(actionTypes.SUBMIT_DATA_REQUEST, submit)
}

export function* rootSaga() {
  yield all([watchFetchAsync()])
}
