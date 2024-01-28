import { useParams } from 'react-router-dom';
import { useGetUsedCarDetailsQuery } from '../slices/usedCarsApiSlice';

const UsedCarDetailsScreen = () => {

  const { id } = useParams(); 

  const { data: usedCar, isLoading, error } = useGetUsedCarDetailsQuery(id);

  return (
    <div className='dark:bg-black dark:text-white duration-300 bg-primary sm:min-h-[600px] sm:grid sm:place-items-center'>
    { isLoading ? (
      <h2>Loading...</h2>
    ) : error ? (
      <div>
        {error?.data?.message || error.error}
      </div>
    ) : (
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div className='flex items-center p-5' data-aos="slide-right">
            <img src={usedCar.image} alt="" />   
          </div>

          <div>
            <div className='grid grid-rows-5 space-y-5 sm:p-16 pb-6'>
              <h1 className='text-3xl sm:text-4xl font-bold font-serif' data-aos="fade-up">{usedCar.brand} {usedCar.model}</h1>
              <div>Godina proizvodnje: {usedCar.makeYear}</div>
              <div>Motor: {usedCar.motor}</div>
              <div>Mjenjač: {usedCar.transmission}</div>
              <div>Broj sjedala: 5 </div>
              <p>{usedCar.description}</p>

            </div>
          </div>
        </div>
      </div> 
    )}
    </div>
  );
}

export default UsedCarDetailsScreen;
