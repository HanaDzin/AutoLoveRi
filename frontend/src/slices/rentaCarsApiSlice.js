import { RENTACARS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const rentaCarsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRentaCars: builder.query({
            query: () => ({
                url: RENTACARS_URL,
            }),
            keepUnusedDataFor: 5
        }),
        getRentaCarDetails: builder.query({
            query: (rentaCarId) => ({
                url: `${RENTACARS_URL}/${rentaCarId}`,
            }),
            keepUnusedDataFor: 5,
        })
    }),
});

export const { useGetRentaCarsQuery, useGetRentaCarDetailsQuery } = rentaCarsApiSlice;