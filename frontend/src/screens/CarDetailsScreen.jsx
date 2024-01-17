import React from 'react'

//za dohvat id-a auta koji se prikazuje
import { useParams } from 'react-router-dom'

//uvoz podataka
import { CarListData } from '../components/CarList/CarList'

import Golf from '../assets/Golf.png'

const CarDetailsScreen = () => {

    const { id: carId } = useParams();
    //dohvati auto pomoću id-a (iz array-a)
    const car = CarListData.find((c) => c._id === parseInt(carId, 10))
    console.log(car)

  return (
    <div className='dark:bg-black dark:text-white duration-300 
    bg-primary
    sm:min-h-[600px] sm:grid sm:place-items-center'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                <div className='flex items-center p-5' data-aos="slide-right">
                <img src={Golf} alt="" />   
                </div>


                <div>
                    <div className='grid grid-rows-8 space-y-5 sm:p-16 pb-6'>
                    <h1 className='text-3xl sm:text-4xl font-bold font-serif'
                    data-aos="fade-up">Ime automobila</h1>
                        <div>Godina proizvodnje: </div>
                        <div>Prijeđeni kilometri:</div>
                        <div>Snaga motora: </div>
                        <div>Vrsta motora: </div>
                        <div>Radni obujam: </div>
                        <div>Mjenjač: </div>
                        <div>Broj sjedala: </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CarDetailsScreen