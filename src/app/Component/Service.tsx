'use client'
import React, { useEffect, useState } from 'react';

function service() {
  // Track if the component is mounted
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark the component as mounted on the client side
    setMounted(true);
  }, []);

  // If not mounted yet, don't render the component to avoid SSR mismatch
  if (!mounted) {
    return null;
  }

  return  (
   
    
<section className='bg-gray-900 mt-1 min-h-screen'>
  <h1 className='text-white mx-4 sm:mx-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-10 py-20 font-thin'>
    Our <span className='font-bold'>Services</span> & <span className='text-orange-600 font-bold'>Expertise</span>
  </h1>

  <div className='flex flex-col items-center'>
    <p className='text-white text-xs sm:text-sm lg:text-base px-4 sm:px-8 md:px-32 lg:px-64 text-center'>
      Office ipsum you must be muted. Conversation banner gave dive investigation chime usability whatever. Winning of
      crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck support attached
      waste highlights game synchronize.
    </p>

    <p className='text-white text-2xl sm:text-3xl lg:text-4xl font-sans mt-8 text-center'>
      <span style={{ fontWeight: 100 }}>What</span> <br />
      <span className='font-bold'>problem</span> <br /> can we <span className='font-bold text-orange-600'>solve</span> <br />
      <span className='font-bold text-orange-600'>
        together<span className='text-white'>?</span>
      </span>
    </p>
  </div>

  <div className='flex flex-col sm:flex-row justify-center items-center mt-12'>
    <img className='w-60 sm:w-80 mb-8 sm:mb-0 sm:mr-4' src='card2.png' alt='Card 2' />
    <img className='w-60 sm:w-80 mb-8 sm:mb-0 sm:mr-4' src='card.png' alt='Card 1' />
    <img className='w-60 sm:w-80' src='card3.png' alt='Card 3' />
  </div>

  <img className='w-full mt-12' src='comp6.png' alt='Comp 6' />
</section>

      
    
  )
}

export default service