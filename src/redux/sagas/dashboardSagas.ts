import { takeLatest, call, put, all } from 'redux-saga/effects';
import { fetchSalesDataRevenue, fetchSalesDataVisit, fetchSalesDataConversion, SalesDataRevenue, SalesDataVisit, SalesDataConversion } from '../../services/apis/dashboard';
import { dashboardDataSuccess, dashboardDataFailure } from '../slices/dashboardSlice';

function* fetchDashboardData(): Generator<any, void, [SalesDataRevenue, SalesDataVisit, SalesDataConversion]> {
    try {
        const [salesDataRevenue, salesDataVisit, salesDataConversion]: [SalesDataRevenue, SalesDataVisit, SalesDataConversion] = yield all([
            call(fetchSalesDataRevenue),
            call(fetchSalesDataVisit),
            call(fetchSalesDataConversion),
        ]);

        yield put(dashboardDataSuccess({ salesDataRevenue, salesDataVisit, salesDataConversion }));
    } catch (error) {
        yield put(dashboardDataFailure('Failed to load dashboard data'));
    }
}

export function* watchDashboardDataRequest() {
    yield takeLatest('dashboard/dashboardDataRequest', fetchDashboardData);
}