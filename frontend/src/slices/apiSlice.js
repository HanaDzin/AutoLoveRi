//parent to other API slices
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../constants';

const baseQuery = fetchBaseQuery({baseUrl: BASE_URL});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['NewCar','RentaCar', 'UsedCar', 'Order', 'User'],
    endpoints: (builder) => ({}),
});