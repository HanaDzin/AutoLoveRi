import React from 'react'

import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services';
import About from '../components/About/About';
import CarList from '../components/CarList/CarList';
import Testimonials  from '../components/Testimonials/Testimonials';
import { useOutletContext } from 'react-router-dom';

const HomeScreen = () => {
    //bez ovoga se ne mijenja slika kod promjene teme
    const theme = useOutletContext();
    
  return (
    <div>
        <Hero theme={theme}/>
        <Services />
        <About />
        <CarList />
        <Testimonials />
    </div>
  )
}

export default HomeScreen