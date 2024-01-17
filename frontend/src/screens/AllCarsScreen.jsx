import React from 'react'
import { Link } from 'react-router-dom'

import { CarListData } from '../components/CarList/CarList'
import NewCarsScreen from './NewCarsScreen'
import UsedCarsScreen from './UsedCarsScreen'
import RentaCarScreen from './RentaCarScreen'

const AllCarsScreen = () => {
  return (
    <div className='pb-20 pt-14 bg-white dark:bg-dark dark:text-white'>
        <RentaCarScreen />
        <NewCarsScreen />
        <UsedCarsScreen />
    </div>

  )
}

export default AllCarsScreen