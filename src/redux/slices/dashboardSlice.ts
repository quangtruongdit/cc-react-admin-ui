import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DashboardState {
    loading: boolean;
    error: string | null;
    data: {
        salesDataRevenue: any;
        salesDataVisit: any;
        salesDataConversion: any;
    } | null;
}

const initialState: DashboardState = {
    loading: false,
    error: null,
    data: null,
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        dashboardDataRequest(state) {
            state.loading = true;
            state.error = null;
        },
        dashboardDataSuccess(
            state,
            action: PayloadAction<{ salesDataRevenue: any; salesDataVisit: any; salesDataConversion: any }>
        ) {
            state.loading = false;
            state.data = action.payload;
        },
        dashboardDataFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    }
});


export const { dashboardDataRequest, dashboardDataSuccess, dashboardDataFailure } =
    dashboardSlice.actions;

export default dashboardSlice.reducer;