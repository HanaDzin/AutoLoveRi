import { USEDCARS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usedCarsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsedCars: builder.query({
            query: () => ({
                url: USEDCARS_URL,
            }),
            keepUnusedDataFor: 5
        }),
        getUsedCarDetails: builder.query({
            query: (usedCarId) => ({
                url: `${USEDCARS_URL}/${usedCarId}`,
            }),
            keepUnusedDataFor: 5,
        })
    }),
});

export const { useGetUsedCarsQuery, useGetUsedCarDetailsQuery } = usedCarsApiSlice;