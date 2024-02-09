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
        }),
        createRentaCar: builder.mutation({
            query: () => ({
                url: RENTACARS_URL,
                method: 'POST',
            }),
            invalidatesTags: ['RentaCar'],
        }),
        updateRentaCar: builder.mutation({
            query: (data) => ({
                url: `${RENTACARS_URL}/${data.rentaCarId}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['RentaCars'],
        }),
        deleteRentaCar: builder.mutation ({
            query: (rentaCarId) => ({
                url: `${RENTACARS_URL}/${rentaCarId}`,
                method: 'DELETE',
            })
        })
    }),
});

export const { 
    useGetRentaCarsQuery, 
    useGetRentaCarDetailsQuery,
    useCreateRentaCarMutation,
    useUpdateRentaCarMutation,
    useDeleteRentaCarMutation
 } = rentaCarsApiSlice;