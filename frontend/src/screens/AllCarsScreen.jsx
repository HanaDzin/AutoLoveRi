import React from 'react'
import { Link } from 'react-router-dom'


import NewCarsScreen from './NewCarsScreen'
import UsedCarsScreen from './UsedCarsScreen'
import RentaCarScreen from './RentaCarScreen'

const AllCarsScreen = () => {
  return (
    <div className='pb-8 pt-14 bg-white dark:bg-dark dark:text-white'>
        <NewCarsScreen />
        
    <div className='grid place-content-center pt-12 pb-6 dark:bg-black'>
        <Link to={`/newcars`} >
        <button className='button-outline' data-aos="fade-up">
        Istraži ponudu
        </button>
        </Link>
    </div>

        <RentaCarScreen />
        
    <div className='grid place-content-center pt-12 pb-6 dark:bg-black'>
        <Link to={`/rentacar`} >
        <button className='button-outline' data-aos="fade-up">
        Istraži ponudu
        </button></Link>
        </div>

        <UsedCarsScreen />
        
    <div className='grid place-content-center pt-8 pb-4 dark:bg-black'>
        <Link to={`/usedcars`} >
            <button className='button-outline' data-aos="fade-up">
             Istraži ponudu
            </button>
        </Link>
    </div>

</div>

  )
}

export default AllCarsScreen