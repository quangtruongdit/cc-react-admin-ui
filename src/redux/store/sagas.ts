import { all } from 'redux-saga/effects';
import { watchDashboardDataRequest } from '../sagas/dashboardSagas';

export default function* rootSaga() {
    yield all([watchDashboardDataRequest()]);
}