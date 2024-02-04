import React from 'react'

import { FaTimes, FaEdit, FaTrash } from 'react-icons/fa'
import { useGetNewCarsQuery, useCreateNewCarMutation } from '../../slices/newCarsApiSlice'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const CarsListScreen = () => {
    const { data: newCars, isLoading, error, refetch } = useGetNewCarsQuery();

    const [createNewCar, { isLoading: loadingCreate }] = useCreateNewCarMutation();

    const deleteHandler = (id) => {
        console.log('delete', id);
    };

    const createNewCarHandler = async () => {
      if (window.confirm('Jeste li sigurni da želite dodati novo vozilo?')) {
        try {
          await createNewCar();
          refetch();
        } catch (err) {
          toast.err(err?.data?.message || err.error)
        }
      }
    }


  return (
    <div className="dark:bg-dark px-10 mt-16 dark:text-white mt-8 text-center font-bold text-gray-900">
      <div className='items-center justify-center dark:bg-dark container p-10'>
      <h1 className='text-3xl dark:text-primary text-left mb-6'>Pregled svih vozila</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div></div>
            <div className='items-right justify-right text-right'>
            <button className='button-outline' onClick={ createNewCarHandler }>Dodaj vozilo</button></div>
        </div>

        { loadingCreate && <h1>Loading...</h1>}
        {
            isLoading ? <h1>Loading...</h1> : error ? <h1>{error}</h1> : (
                <>
                <table class="text-md text-serif min-w-full">
            <thead className='text-primary shadow-lg'>
              <tr>
                <th className="px-4 py-2 ">ID</th>
                <th className="px-4 py-2 ">Naziv vozila</th>
                <th className="px-4 py-2 ">Cijena</th>
                <th className="px-4 py-2 ">Kategorija</th>
              </tr>
          </thead>

          <tbody>
            { newCars.map((car) => (
              <tr key={car._id} >
                <td className='px-4 py-2'>{car._id}</td>
                <td className='px-4 py-2'>{car.brand} {car.model}</td>
                <td className='px-4 py-2'>{(car.price).toFixed(2)} € </td>
                <td className='px-4 py-2'>Nova vozila </td>
                <td className='px-4 py-2'>
                <Link to={`/admin/newcar/${car._id}/edit`}>
                    <button className='button-outline'><FaEdit /></button>
                </Link>
                <button className='mx-2 button-outline'
                onClick={() => deleteHandler(car._id)}>
                <FaTrash style={{color: 'red'}} /></button>
                </td>
                <td className='px-4 py-2'>
                
                </td>
                <td>
                    <button className='rounded-lg border-2 border-[green] p-1.5 hover:scale-105'>Detalji</button>
                  
                </td>
              </tr>
            ))}
          </tbody>
      </table> 
                </>

            )
        }


      </div>
    </div>
  )
}

export default CarsListScreen