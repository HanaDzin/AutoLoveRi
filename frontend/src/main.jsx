import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'



import App from './App.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import AllCarsScreen from './screens/AllCarsScreen.jsx'
import RentaCarScreen from './screens/RentaCarScreen.jsx'
import CarDetailsScreen from './screens/CarDetailsScreen.jsx'
import NewCarsScreen from './screens/NewCarsScreen.jsx'
import UsedCarsScreen from './screens/UsedCarsScreen.jsx'
import AboutUsScreen from './screens/AboutUsScreen.jsx'
import NewsScreen from './screens/NewsScreen.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomeScreen/>} />;

      <Route path='/cars' element={<AllCarsScreen/>} />;

      <Route path='/rentacar/' element={<RentaCarScreen/>} />;
      <Route path='/rentacar/:id' element={<CarDetailsScreen/>} />;

      <Route path='/newCars/' element={<NewCarsScreen/>} />;
      <Route path='/usedCars/' element={<UsedCarsScreen/>} />;

      <Route path='/about' element={<AboutUsScreen/>} />;

      <Route path='/news' element={<NewsScreen/>} />;

      
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
