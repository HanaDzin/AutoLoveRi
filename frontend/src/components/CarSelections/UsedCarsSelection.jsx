import React, {useState, useEffect} from 'react'
import axios from 'axios';


//komponente:
import UsedCarCard from './UsedCarCard'
import { Link } from 'react-router-dom'


const UsedCarsSelection = () => {
  const [usedCars, setUsedCars] = useState([]);

  useEffect(() => {
    const fetchUsedCars = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/usedcars');
        console.log(response.data); 
        setUsedCars(response.data);
      } catch (error) {
        console.error('Error fetching new cars:', error);
      }
    };
  
    fetchUsedCars();
  }, []);

  return (
    <div className='pb-24 pt-14 dark:bg-black dark:text-white'>
        <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
            { usedCars.map((car) => (
              <UsedCarCard key={car._id} _id={car._id} brand={car.brand} 
              model={car.model} price={car.price} mileage={car.mileage} image={car.image} />
              ))}
            </div>
        </div>
    </div>
  )
}

export default UsedCarsSelection