import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetOrderDetailsQuery } from '../slices/ordersApiSlice'

const OrderScreen = () => {
    const { id: orderId } = useParams();
    
    const { data: order, 
        refetch, 
        isLoading, 
        error } = useGetOrderDetailsQuery(orderId);

  
  
  
  
    return (
        <div className="px-16 py-10 pb-4 mt-12 dark:text-white dark:bg-black 
        text-xl font-bold text-gray-900 sm:min-h-[500px] sm:grid sm:place-items-center">
                <h1 className='my-6 text-3xl'>Detalji narudžbe</h1>
    
            <div className="container">
                <div className='grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1'>
                { isLoading ? <h1>Loading...</h1> : error ? <h1>{error}</h1> : (
                    <>
                        <div>
                           <h2 className='pb-4'>Podaci o kupcu: </h2>
                           <p>Ime:  <strong className='text-primary'>{order.user.name}</strong></p>
                           <p>E-mail adresa:<strong className='text-primary'> {order.user.email}</strong></p>
                           <p>Adresa: <strong className='text-primary'>  {order.shippingAddress.address}, {order.shippingAddress.postalCode} {order.shippingAddress.city}, {order.shippingAddress.country}</strong></p>
                           <hr />
                           <p className='mt-6 pb-2'>Status narudžbe: <br />
                            {
                                order.isDelivered ? (
                                    <p className='text-[green] bg-[green]/50'>Narudžba uspješno dostavljena</p>
                                ) : (
                                    <p className='text-[red] p-2 bg-[red]/50'> Narudžba nije dostavljena</p>
                                ) 
                            } </p>
                            <hr />
                            <p className='mt-6'> Metoda plaćanja: {
                                    <strong className='text-primary'>{order.paymentMethod}</strong>
                                }
                            </p>
                            <p className='pb-2'>
                                Status naplate: 
                                {
                                    order.isPaid ? (
                                        <p className='text-[green] bg-[green]/50'>Narudžba plaćena</p>
                                    ) : (
                                        <p className='text-[red] p-2 bg-[red]/50'> Narudžba nije plaćena</p>
                                    ) 
                                }
                            </p>
                            <hr />
                            
                                <h2 className='py-4'>Stavke narudžbe: </h2>
                                {
                                    order.orderItems.map((item, index) => (
                                        <div className='grid grid-cols-2 border border-2 rounded-lg p-2 justify-center place-items-center'>
                                            <div>
                                                <img src={item.image} className='max-w-[150px]' />
                                            </div>
                                            <div>
                                                <p className='text-primary'>{item.brand} {item.model}</p>
                                                <p>Cijena vozila: <strong className='text-primary'>{item.price}€</strong></p>
                                            </div>
                                        </div>
                                        ))
                                }
                            
                        </div>
                        <div className='text-right'>
                           <h3 className='pb-4'>Sažetak narudžbe</h3>
                           {<>
                            <p>Ukupna cijena vozila: {order.itemsPrice} €</p>
                            <p>Cijena isporuke: {order.shippingPrice} €</p>
                            <p className='text-4xl pt-4'>Ukupno za platiti: <strong className='text-primary'> {order.totalPrice} €</strong></p>
                            </>

                            /* MJESTO ZA DODATI PLATI NARUDŽBU */

                            /* MJESTO ZA DODATI PAYPAL */

                           }
                        </div>

                    </>
                )}
                </div>
                </div>
                </div>
  )
}

export default OrderScreen