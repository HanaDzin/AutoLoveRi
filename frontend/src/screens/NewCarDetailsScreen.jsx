import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const NewCarDetailsScreen = () => {
  const [newCar, setNewCar] = useState([]);

  const { id } = useParams(); 
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/newcars/${id}`);
        
        console.log(response.data);
        setNewCar(response.data);

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
            <img src={newCar.image} alt="" />   
          </div>

          <div>
            <div className='grid grid-rows-5 space-y-5 sm:p-16 pb-6'>
              <h1 className='text-3xl sm:text-4xl font-bold font-serif' data-aos="fade-up">{newCar.brand} {newCar.model}</h1>
              <div>Godina proizvodnje: {newCar.makeYear}</div>
              <div>Motor: {newCar.motor}</div>
              <div>Mjenjač: {newCar.transmission}</div>
              <div>Broj sjedala: 5 </div>
              <p>{newCar.description}</p>

            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default NewCarDetailsScreen;
