import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UsedCarDetailsScreen = () => {
  const [usedCar, setUsedCar] = useState([]);

  const { id } = useParams(); 
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/usedcars/${id}`);
        
        console.log(response.data);
        setUsedCar(response.data);

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
            <img src={usedCar.image} alt="" />   
          </div>

          <div>
            <div className='grid grid-rows-5 space-y-5 sm:p-16 pb-6'>
              <h1 className='text-3xl sm:text-4xl font-bold font-serif' data-aos="fade-up">{usedCar.brand} {usedCar.model}</h1>
              <div>Godina proizvodnje: {usedCar.makeYear}</div>
              <div>Motor: {usedCar.motor}</div>
              <div>Mjenjač: {usedCar.transmission}</div>
              <div>Broj sjedala: 5 </div>
              <p>{usedCar.description}</p>

            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default UsedCarDetailsScreen;
