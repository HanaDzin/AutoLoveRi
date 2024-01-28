import React from 'react'

import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services';
import About from '../components/About/About';
import Testimonials  from '../components/Testimonials/Testimonials';
import { useOutletContext } from 'react-router-dom';
import NewCarsSelection from '../components/CarSelections/NewCarsSelection';

const HomeScreen = () => {
    //bez ovoga se ne mijenja slika kod promjene teme
    const theme = useOutletContext();
    
  return (
    <div>
        <Hero theme={theme}/>
        <Services />
        <About />
        <NewCarsSelection />
        <Testimonials />
    </div>
  )
}

export default HomeScreen