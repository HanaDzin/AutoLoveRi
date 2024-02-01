import React from 'react'

const FormContainer = ({ children }) => {
  return (
    <div className='dark:bg-black dark:text-white duration-300 bg-primary 
    sm:min-h-[600px] sm:grid sm:place-items-center'>
        <div className='container'>
            <div className='place-items-center'>
            { children }
            </div>
        </div>
    </div>
  )
}

export default FormContainer