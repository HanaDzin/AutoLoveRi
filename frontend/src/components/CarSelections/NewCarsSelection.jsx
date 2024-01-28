import React, {useState, useEffect} from 'react'
import axios from 'axios';


//komponente:
import NewCarCard from './NewCarCard'
import { Link } from 'react-router-dom'


const NewCarsSelection = () => {
  const [newCars, setNewCars] = useState([]);

  useEffect(() => {
    const fetchNewCars = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/newcars');
        console.log(response.data); 
        setNewCars(response.data);
      } catch (error) {
        console.error('Error fetching new cars:', error);
      }
    };
  
    fetchNewCars();
  }, []);

  return (
    <div className='pb-24 pt-14 dark:bg-black dark:text-white'>
        <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
            { newCars.map((car) => (
              <NewCarCard key={car._id} _id={car._id} brand={car.brand} 
              model={car.model} price={car.price} image={car.image} />
              ))}
            </div>
        </div>
    </div>
  )
}

export default NewCarsSelection