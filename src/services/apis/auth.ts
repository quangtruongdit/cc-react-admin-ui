// src/services/ordersApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface LoginRequest {
    userName: string;
    password: string;
}

interface ApiResponse {
    status: number;
    message: string;
}

interface VerifyRequest {
    code: string;
}


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/auth' }),
    endpoints: (builder) => ({
        login: builder.mutation<ApiResponse, Partial<LoginRequest>>({
            query: (loginRequest) => ({
                url: 'login',
                method: 'POST',
                body: loginRequest,
            }),
        }),
        verify: builder.mutation<ApiResponse, Partial<VerifyRequest>>({
            query: (verifyRequest) => ({
                url: 'verify',
                method: 'POST',
                body: verifyRequest,
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useVerifyMutation
} = authApi;
