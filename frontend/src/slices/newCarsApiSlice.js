import { NEWCARS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const newCarsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getNewCars: builder.query({
            query: () => ({
                url: NEWCARS_URL,
            }),
            providesTags: ['NewCar'],
            keepUnusedDataFor: 5
        }),
        getNewCarDetails: builder.query({
            query: (newCarId) => ({
                url: `${NEWCARS_URL}/${newCarId}`,
            }),
            keepUnusedDataFor: 5,
        }),
        createNewCar: builder.mutation({
            query: () => ({
                url: NEWCARS_URL,
                method: 'POST',
            }),
            invalidatesTags: ['NewCar'],
        }),
        updateNewCar: builder.mutation({
            query: (data) => ({
                url: `${NEWCARS_URL}/${data.newCarId}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['NewCar'],
        })
    }),
});

export const { useGetNewCarsQuery, 
    useGetNewCarDetailsQuery, 
    useCreateNewCarMutation,
    useUpdateNewCarMutation } = newCarsApiSlice;