import React from 'react'
import { Link } from 'react-router-dom'


import NewCarsScreen from './NewCarsScreen'
import UsedCarsScreen from './UsedCarsScreen'
import RentaCarScreen from './RentaCarScreen'

const AllCarsScreen = () => {
  return (
    <div className='pb-20 pt-14 bg-white dark:bg-dark dark:text-white'>
        <NewCarsScreen />
        <RentaCarScreen />
        <UsedCarsScreen />
    </div>

  )
}

export default AllCarsScreen