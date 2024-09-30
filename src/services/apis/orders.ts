// src/services/ordersApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { orders } from '../../data';

interface Order {
    id: number;
    img?: string;
    title: string;
    color: string;
    price: string;
    producer: string;
    createdAt: string;
}

export const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
    endpoints: (builder) => ({
        getOrders: builder.query<Order[], void>({
            query: () => 'orders',
        }),
        createOrder: builder.mutation<Order, Partial<Order>>({
            query: (newOrder) => ({
                url: 'orders',
                method: 'POST',
                body: newOrder,
            }),
        }),
        updateOrder: builder.mutation<Order, Partial<Order> & { id: string }>({
            query: ({ id, ...patch }) => ({
                url: `orders/${id}`,
                method: 'PUT',
                body: patch,
            }),
        }),
        deleteOrder: builder.mutation<{ success: boolean }, string>({
            query: (id) => ({
                url: `orders/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetOrdersQuery,
    useCreateOrderMutation,
    useUpdateOrderMutation,
    useDeleteOrderMutation,
} = ordersApi;
