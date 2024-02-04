    import React, { useEffect, useState } from 'react'
    import FormContainer from '../../components/formContainer/formContainer'
    import { toast } from 'react-toastify'
    import { useUpdateNewCarMutation, useGetNewCarDetailsQuery } from '../../slices/newCarsApiSlice'
    import { Form, useNavigate, useParams } from 'react-router-dom'
    import { Link } from 'react-router-dom'


    const NewCarEditScreen = () => {

        const { id: newCarId } = useParams();
        
        const [model, setModel] = useState('');
        const [brand, setBrand] = useState('');
        const [image, setImage] = useState('');
        const [price, setPrice] = useState(0);
        const [makeYear, setMakeYear] = useState(0);
        const [motor, setMotor] = useState('');
        const [transmission, setTransmission] = useState('');
        const [description, setDescription] = useState('');

        const { data: newCar, 
            isLoading, 
            refetch, 
            error } = useGetNewCarDetailsQuery(newCarId);

        const [ updateNewCar, { isLoading: loadingUpdate } ] = useUpdateNewCarMutation();

        const navigate = useNavigate();

        const submitHandler = async (e) => {
            e.preventDefault();
            try {
                await updateNewCar({
                    newCarId,
                    brand,
                    model,
                    price,
                    image,
                    description,
                    makeYear,
                    transmission,
                    motor,
                });
                toast.success('Uspješno ažurirano vozilo!');
                refetch();
                navigate('/admin/carlist');
            } catch (err) {
                toast.error(err?.data?.message || err.error);
            }
        };

        useEffect(() => {
            if (newCar) {
                setModel(newCar.model);
                setBrand(newCar.brand);
                setPrice(newCar.price);
                setMakeYear(newCar.makeYear);
                setImage(newCar.image);
                setMotor(newCar.motor);
                setTransmission(newCar.transmission);
                setDescription(newCar.description);
            }

        }, [newCar])


    return (
        <div className=" dark:bg-dark mt-16 dark:text-white font-bold text-gray-900">
            <div className='dark:bg-dark container p-10'>
                <h1 className=' text-3xl dark:text-primary text-left mb-6'>Ažuriraj vozilo</h1>
                <Link to="/admin/carlist"><button className='button-outline text-sm mb-4'>Natrag</button></Link>
                <div className='grid grid-cols-2'>
                <FormContainer>

                { loadingUpdate && <h1>Loading...</h1> }

             { isLoading ? <h1>Loading</h1> : error ? <h1>{error}</h1> : (

        <form className="space-y-4" onSubmit={submitHandler}>

    <div>
    <div className="flex items-center justify-between">
        <label className="dark:text-white block text-sm font-medium leading-6 text-gray-900">
        Marka
        </label>
    </div>
    <div className="mt-2">
        <input
        id="brand"
        name="brand"
        type="text"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        className="block w-full rounded-md border-0 p-2.5 text-gray-900 
        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
    </div>
    </div>

    <div>
    <label className="text-left dark:text-white block text-sm font-medium leading-6 text-gray-900">
        Model
    </label>
    <div className="mt-2">
        <input
        id="model"
        name="model"
        type="text"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        className="block w-full rounded-md border-0 p-2.5 text-gray-900 
        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm 
        sm:leading-6"
        />
    </div>
    </div>

    <div>
    <label className="text-left dark:text-white block text-sm font-medium leading-6 text-gray-900">
        Cijena
    </label>
    <div className="mt-2">
        <input
        id="price"
        name="price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="block w-full rounded-md border-0 p-2.5 text-gray-900 
        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm 
        sm:leading-6"
        />
    </div>
    </div>

    <div>
    <label className="text-left dark:text-white block text-sm font-medium leading-6 text-gray-900">
        Godina proizvodnje
    </label>
    <div className="mt-2">
        <input
        id="makeYear"
        name="makeYear"
        type="text"
        value={makeYear}
        onChange={(e) => setMakeYear(e.target.value)}
        className="block w-full rounded-md border-0 p-2.5 text-gray-900 
        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm 
        sm:leading-6"
        />
    </div>
    </div>

    <div>
    <label className="text-left dark:text-white block text-sm font-medium leading-6 text-gray-900">
        Motor
    </label>
    <div className="mt-2">
        <input
        id="motor"
        name="motor"
        type="text"
        value={motor}
        onChange={(e) => setMotor(e.target.value)}
        className="block w-full rounded-md border-0 p-2.5 text-gray-900 
        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm 
        sm:leading-6"
        />
    </div>
    </div>

    <div>
    <label className="text-left dark:text-white block text-sm font-medium leading-6 text-gray-900">
        Mijenjač
    </label>
    <div className="mt-2">
        <input
        id="transmission"
        name="transmission"
        type="text"
        value={transmission}
        onChange={(e) => setTransmission(e.target.value)}
        className="block w-full rounded-md border-0 p-2.5 text-gray-900 
        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm 
        sm:leading-6"
        />
    </div>
    </div>

    <div>
    <label className="text-left dark:text-white block text-sm font-medium leading-6 text-gray-900">
        Opis
    </label>
    <div className="mt-2">
        <input
        id="description"
        name="description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block w-full rounded-md border-0 p-2.5 text-gray-900 
        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm 
        sm:leading-6"
        />
    </div>
    </div>

    

    <div>
    <button
        type="submit"
        className="flex justify-center rounded-md bg-indigo-600 
        mt-10 px-4 py-1.5 text-sm font-semibold leading-6 text-white 
        shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
        focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Ažuriraj
    </button>
    </div>
    </form>
    )}
    </FormContainer>
                </div>
                
                </div>
                <div>
            </div>
        </div>
    )
    }

    export default NewCarEditScreen