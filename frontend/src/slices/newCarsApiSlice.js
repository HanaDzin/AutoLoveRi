import { NEWCARS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const newCarsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getNewCars: builder.query({
            query: () => ({
                url: NEWCARS_URL,
            }),
            keepUnusedDataFor: 5
        }),
        getNewCarDetails: builder.query({
            query: (newCarId) => ({
                url: `${NEWCARS_URL}/${newCarId}`,
            }),
            keepUnusedDataFor: 5,
        })
    }),
});

export const { useGetNewCarsQuery, useGetNewCarDetailsQuery } = newCarsApiSlice;