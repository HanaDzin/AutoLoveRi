import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const RentaCarDetailsScreen = () => {
  const [rentaCar, setRentaCar] = useState([]);

  const { id } = useParams(); 
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/rentacar/${id}`);
        
        console.log(response.data);
        setRentaCar(response.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

  },[]); 

  return (
    <div className='dark:bg-black dark:text-white duration-300 bg-primary sm:min-h-[600px] sm:grid sm:place-items-center'>
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
      </div> 
    </div>
  );
}

export default RentaCarDetailsScreen;
