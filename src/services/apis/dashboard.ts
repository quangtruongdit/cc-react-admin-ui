import { chartBoxRevenue, barChartBoxVisit, chartBoxConversion } from "../../data";

// src/api/dashboardAPI.ts
export type SalesDataRevenue = typeof chartBoxRevenue

export type SalesDataVisit = typeof barChartBoxVisit

export type SalesDataConversion = typeof chartBoxConversion

export const fetchSalesDataRevenue = async (): Promise<SalesDataRevenue> => {
    return Promise.resolve(chartBoxRevenue)
    // return await fetch('/api/sales').then(res => res.json());
};

export const fetchSalesDataVisit = async (): Promise<SalesDataVisit> => {
    return Promise.resolve(barChartBoxVisit)
    // return await fetch('/api/user-stats').then(res => res.json());
};

export const fetchSalesDataConversion = async (): Promise<SalesDataConversion> => {
    return Promise.resolve(chartBoxConversion)
    // return await fetch('/api/analytics').then(res => res.json());
};
