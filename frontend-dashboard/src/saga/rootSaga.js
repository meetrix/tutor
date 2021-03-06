/**
 * Created by pubudud on 5/18/17.
 */

// Core modules
import { all } from 'redux-saga/effects';

// Sagas
import { takeEveryFetchSaga, takeLatestFetchSaga } from './Saga/fetchSaga';
import takeEveryApiGateWaySaga from './ApiGateWay/apiGateWaySaga';
import takeEveryAwsAmplifySaga from './AwsAmlify/awsAmlify';


/**
 * Root Saga for combining all other sagas
 */
export default function* rootSaga() {
  yield all([
    takeEveryFetchSaga(),
    takeLatestFetchSaga(),
    takeEveryApiGateWaySaga(),
    takeEveryAwsAmplifySaga(),
  ]);
}
