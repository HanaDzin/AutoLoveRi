import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'


import RentaCarCard from './RentaCarCard'


const RentaCarSelection = () => {
  const [rentaCars, setRentaCars] = useState([]);

  useEffect(() => {
    const fetchRentaCars = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/rentacar');
        console.log(response.data); 
        setRentaCars(response.data);
      } catch (error) {
        console.error('Error fetching rentacars:', error);
      }
    };
  
    fetchRentaCars();
  }, []);

  return (
    <div className='pb-24 pt-14 dark:bg-black dark:text-white'>
        <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
            { rentaCars.map((car) => (
              <RentaCarCard key={car._id} _id={car._id} brand={car.brand} 
              model={car.model} price={car.price} image={car.image} />
              ))}
            </div>
        </div>
    </div>
  )
}

export default RentaCarSelection