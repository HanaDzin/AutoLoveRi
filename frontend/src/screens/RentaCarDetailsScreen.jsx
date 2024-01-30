
import { useParams, useNavigate } from 'react-router-dom';
import { useGetRentaCarDetailsQuery } from '../slices/rentaCarsApiSlice';
import { useDispatch } from 'react-redux';

import {addToCart} from '../slices/cartSlice.js'
import { useState } from 'react';

const RentaCarDetailsScreen = () => {
  
  const { id } = useParams();
  const [qty, setQty] = useState(1);

   
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: rentaCar, isLoading, error } = useGetRentaCarDetailsQuery(id);

  const addToCartHandler = () => {
    dispatch(addToCart({...rentaCar, qty}));
    navigate('/cart');
  }

  return (
    <div className='dark:bg-black dark:text-white duration-300 bg-primary sm:min-h-[600px] sm:grid sm:place-items-center'>
      { isLoading ? (
      <h2>Loading...</h2>
    ) : error ? (
      <div>
        {error?.data?.message || error.error}
      </div>
    ) : (
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div className='flex items-center p-5' data-aos="slide-right">
            <img src={rentaCar.image} alt="" />   
          </div>

          <div>
            <div className='grid grid-rows-5 space-y-5 sm:p-16 pb-6'>
              <h1 className='text-3xl sm:text-4xl font-bold font-serif' data-aos="fade-up">{rentaCar.brand} {rentaCar.model}</h1>
              <div>Godina proizvodnje: {rentaCar.makeYear}</div>
              <div>Motor: {rentaCar.motor}</div>
              <div>Mjenjač: {rentaCar.transmission}</div>
              <div>Broj sjedala: 5 </div>
              <p>{rentaCar.description}</p>
            </div>
          </div>
        </div>
        <div className='dark:text-primary grid text-4xl place-content-center'>
          Cijena: {rentaCar.pricePerDay} € / dan
        </div>
        <div className='grid place-content-center mt-8 mb-8'>
            </div>
      </div> 
    )}
    </div>
  );
}

export default RentaCarDetailsScreen;
