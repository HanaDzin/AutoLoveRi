import React from 'react'


import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'

const testimonialData = [
    {
        name: 'Marko',
        img: icon1,
        text: 'Udobna i sigurna vožnja u savršenom vozilu.',
        aosDelay: '0'
    },
    {
        name: 'Ana',
        img: icon2,
        text: 'Bez zamjerke. Vozila u odličnom stanju.',
        aosDelay: '500'
    },
    {
        name: 'Ivan',
        img: icon3,
        text: 'Profesionalnost osoblja na zavidnom nivou.',
        aosDelay: '1000'
    },

]


export const Testimonials = () => {
  return (
    <div className='bg-primary dark:bg-black dark:text-white
    py-14 sm:pb-24'>
    <div className='container'>
        <div className='space-y-4 pb-12'>
            <p data-aos="fade-up" className='dark:text-primary text-3xl font-semibold text-center sm:text-4xl'>Komentari zadovoljnih kupaca</p>
            <p data-aos="fade-up" className='text-center sm:px-34'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti a illo voluptates delectus expedita, 
                quidem perferendis impedit molestiae optio vero et vitae.
            </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white'>
        {
            testimonialData.map((testimonial) => {
                return <div key={testimonial.name}
                className='card text-center group space-y-3 bg-gray-100 dark:bg-dark
                sm:space-y-4 sm:py-12 duration-300 rounded-lg'
                data-aos="fade-up"
                data-aos-delay={testimonial.aosDelay}>
                    <div className='grid place-items-center'>
                        <img src={testimonial.img} alt="" className='h-20' />
                        </div>
                            <div className='text-2xl'>⭐⭐⭐⭐⭐</div>
                            <p>{testimonial.text}</p>
                            <p className='font-bold text-center text-primary'>{testimonial.name}</p>
                        </div>
                })
        }
                </div>


    </div>

    </div>
  )
}

export default Testimonials
