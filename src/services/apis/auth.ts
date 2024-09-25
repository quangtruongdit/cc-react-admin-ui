// src/services/ordersApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface LoginRequest {
    userName: string;
    password: string;
}

interface LoginResponse {
    status: number;
    message: string;
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/auth' }),
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, Partial<LoginRequest>>({
            query: (loginRequest) => ({
                url: 'login',
                method: 'POST',
                body: loginRequest,
            }),
        }),
    }),
});

export const {
    useLoginMutation,
} = authApi;
