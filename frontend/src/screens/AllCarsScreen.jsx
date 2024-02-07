import React from 'react'
import { Link } from 'react-router-dom'


import NewCarsScreen from './NewCarsScreen'
import UsedCarsScreen from './UsedCarsScreen'
import RentaCarScreen from './RentaCarScreen'

const AllCarsScreen = () => {
  return (
    <div className='pb-20 pt-14 bg-white dark:bg-dark dark:text-white'>
        <NewCarsScreen />
        
    <div className='grid place-content-center mt-8'>
                <Link to={`/newcars`} ><button className='button-outline'
                data-aos="fade-up">
                    Istraži ponudu
                </button></Link>
            </div>
        <RentaCarScreen />
        
    <div className='grid place-content-center mt-8'>
                <Link to={`/rentacar`} ><button className='button-outline'
                data-aos="fade-up">
                    Istraži ponudu
                </button></Link>
            </div>
        <UsedCarsScreen />
        
    <div className='grid place-content-center mt-8'>
                <Link to={`/usedcars`} ><button className='button-outline'
                data-aos="fade-up">
                    Istraži ponudu
                </button></Link>
            </div>
    </div>

  )
}

export default AllCarsScreen