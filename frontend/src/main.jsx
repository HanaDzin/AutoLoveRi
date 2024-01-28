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
import NewCarDetailsScreen from './screens/NewCarDetailsScreen.jsx'
import RentaCarDetailsScreen from './screens/RentaCarDetailsScreen.jsx'
import NewCarsScreen from './screens/NewCarsScreen.jsx'
import UsedCarsScreen from './screens/UsedCarsScreen.jsx'
import AboutUsScreen from './screens/AboutUsScreen.jsx'
import NewsScreen from './screens/NewsScreen.jsx'
import UsedCarDetailsScreen from './screens/UsedCarDetailsScreen.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomeScreen/>} />;

      <Route path='/cars' element={<AllCarsScreen/>} />;

      <Route path='/rentacar/' element={<RentaCarScreen/>} />;
      <Route path='/rentacar/:id' element={<RentaCarDetailsScreen/>} />;


      <Route path='/newcars/' element={<NewCarsScreen/>} />;
      <Route path='/newcars/:id' element={<NewCarDetailsScreen/>} />;

      <Route path='/usedcars/' element={<UsedCarsScreen/>} />;
      <Route path='/usedcars/:id' element={<UsedCarDetailsScreen/>} />;


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
