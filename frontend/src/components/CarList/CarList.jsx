import React from 'react'

import Golf from '../../assets/Golf.png'
import Mercedes from '../../assets/Mercedes.png'
import Audi from '../../assets/Audi.png'
import Skoda from '../../assets/whiteCar.png'
import Tesla from '../../assets/blackTesla.png'
import BMW from '../../assets/bmw2.png'

//komponente:
import RentaCarCard from './RentaCarCard'
import { Link } from 'react-router-dom'

export const CarListData = [

    {   _id: 1,
        name: "Golf",
        price: 120,
        image: Golf,
        aosDelay: "0",
    },

    {   _id: 2,
        name: "Mercedes",
        price: 80,
        image: Mercedes,
        aosDelay: "500",
    },

    {   _id: 3,
        name: "Audi",
        price: 100,
        image: Audi,
        aosDelay: "1000",
    },
    {   _id: 4,
        name: "BMW",
        price: 90,
        image: Skoda,
        aosDelay: "1500",
    },

    {   _id: 5,
        name: "Tesla",
        price: 150,
        image: Tesla,
        aosDelay: "2000",
    },

    {   _id: 6,
        name: "BMW",
        price: 110,
        image: BMW,
        aosDelay: "2500",
    },
]

const CarList = () => {
  return (
    <div className='pb-24 pt-14 dark:bg-black dark:text-white'>
        <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
            {
                CarListData.map((car) => {
                    return (
                    <RentaCarCard key={car._id} _id={car._id} name={car.name} price={car.price} 
                    image={car.image} aosDelay={car.aosDelay} />             
                )
            })}

            </div>

        </div>
    </div>
  )
}

export default CarList