
import RentaCarCard from './RentaCarCard'
import { useGetRentaCarsQuery } from '../../slices/rentaCarsApiSlice';


const RentaCarSelection = () => {
  const { data: rentaCars, isLoading, error} = useGetRentaCarsQuery();

  return (
    <div className='pb-24 pt-14 dark:bg-black dark:text-white'>
         { isLoading ? (
      <h2>Loading...</h2>
    ) : error ? (
      <div>
      {error?.data?.message || error.error}
      </div>
    ) : (
        <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
            { rentaCars.map((car) => (
              <RentaCarCard key={car._id} _id={car._id} brand={car.brand} 
              model={car.model} price={car.price} image={car.image} />
              ))}
            </div>
        </div>
    )}
    </div>
  )
}

export default RentaCarSelection