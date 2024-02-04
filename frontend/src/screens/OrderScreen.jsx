import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetOrderDetailsQuery } from '../slices/ordersApiSlice'

const OrderScreen = () => {
    const { id: orderId } = useParams();
    
    const { data: order, refetch, isLoading, isError } = useGetOrderDetailsQuery(orderId);
    console.log(order);
  
  
  
  
    return (
        <div className="px-20 pb-4 mt-12 dark:text-white dark:bg-black text-center 
        text-2xl font-bold text-gray-900 sm:min-h-[600px] sm:grid sm:place-items-center">
                <h1 className='mt-10 text-3xl'>Detalji narudžbe</h1>
    
            <div className="container">
                <div className='grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 place-items-center text-left'>
                </div>
                </div>
                </div>
  )
}

export default OrderScreen