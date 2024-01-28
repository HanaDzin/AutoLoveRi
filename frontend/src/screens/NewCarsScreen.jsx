import React from 'react'
import { Link } from 'react-router-dom'
import NewCarsSelection from '../components/CarSelections/NewCarsSelection'



const NewCarsScreen = () => {
  return (

    <div className='pb-20 pt-14 dark:bg-black dark:text-white duration-300 
    sm:min-h-[600px] sm:grid sm:place-items-center'>
        <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'></div>

        <h1 className='text-3xl sm:text-4xl font-semibold mb-3 text-center text-primary'
              data-aos="fade-up">Nova vozila</h1>

          <p className='text-sm pb-3 text-center' data-aos="fade-up">
          Pogledajte široku ponudu potpuno novih vozila.</p>


          <NewCarsSelection />

          <div className='grid place-content-center mt-8'>
                <Link to={`/newcars`} ><button className='button-outline'
                data-aos="fade-up">
                    Istraži ponudu
                </button></Link>
            </div>

        </div>

    </div>
  )
}

export default NewCarsScreen