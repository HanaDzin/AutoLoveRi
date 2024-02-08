import React from 'react'
import { Link } from 'react-router-dom'

import RentaCarSelection from '../components/CarSelections/RentaCarSelection'

const RentaCarScreen = () => {

  return (
    <div className='pb-10 pt-14 dark:bg-black dark:text-white'>
        <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'></div>

              <h1 className='text-3xl sm:text-4xl font-semibold mb-3 text-center text-primary'
              data-aos="fade-up">Vozila za iznajmljivanje</h1>

          <p className='text-sm pb-6 text-center' data-aos="fade-up">
          Iznajmite neko od najpopularnijih vozila u našoj ponudi. </p>

        {/*popis auta */}
        <RentaCarSelection />

        
    </div>
    </div>
    

  )
}

export default RentaCarScreen