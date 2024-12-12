
'use client'
import React, { useEffect, useState } from 'react';

function exp() {
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
    <div className='bg-slate-50'>
       <p className='mx-10 text-4xl mt-24'><span className='font-thin'>Our </span> <span className='font-bold rgba(0, 27, 46, 1)'>Experience , Skills</span> & 
        <br /> <span className='font-thin'>Expertise</span> , <span className='font-bold text-orange-600'>Your Profit .</span></p>
      <br />
      <img className='mx-10' src="image.jpg" alt="" />
      <br /> 

      <p className='mx-10'>Office ipsum you must be muted. Conversation banner gave dive investigation chime usabiltiy <br /> whatever. Winning of crystallize another container reinvent stands. Left you viral relaxation <br /> unlock t-shaped. 
        Ideal deck support attached waste highlights game synchronise.</p>

        <br /> <br /> <br />
        
        <div>
          <h6 className='text-red-700 text-sm mx-10'>FIRST</h6>  
          <h4 className='mx-10 text-3xl '> <span className='font-bold background: rgba(0, 27, 46, 1);
          '>Dramtically</span> <br /> maintain solutions</h4> 
        <br /> 
        <p className='font-sans mx-10 background: rgba(61, 61, 61, 1);
        '>Collaboratively administrate turnkey channels <br /> whereas virtual e-tailers. Objectively seize <br /> scalable metrics whereas proactive e-services. <br /> Seamlessly empower growth.

       </p>
       <br /> <br /> 
       <p className='mx-10 text-orange-700'>Learn More ...</p>
        </div>

        <div className='ml-[475px] p-4 -mt-[300px]'>
          <h6 className='text-red-700 text-sm mx-10'>SECOND</h6>  
          <h4 className='mx-10 text-3xl '> <span className='font-bold background: rgba(0, 27, 46, 1);
          '>Efficiently unleash</span> <br /> media information</h4> 
        <br /> 
        <p className='font-sans mx-10 background: rgba(61, 61, 61, 1);
        '>Collaboratively administrate turnkey channels <br /> whereas virtual e-tailers. Objectively seize <br /> scalable metrics whereas proactive e-services. <br /> Seamlessly empower growth.

       </p>
       <br /> <br /> 
       <p className='mx-10 text-orange-700'>Learn More ...</p>
        </div>
    
       <br /> <br />

       
       <div className='transform translate-x-8 ml-[900px] p-4 -mt-[370px]'>
          <h6 className='text-red-700 text-sm mx-10'>THIRD</h6>  
          <h4 className='mx-10 text-3xl '> <span className='font-bold background: rgba(0, 27, 46, 1);
          '>Quickly maximize</span> <br /> timely deliverables</h4> 
        <br /> 
        <p className='font-sans mx-10 background: rgba(61, 61, 61, 1);
        '>Collaboratively administrate turnkey channels  whereas virtual e-tailers. Objectively seize  scalable metrics whereas proactive e-services. <br /> Seamlessly empower growth.

       </p>
       <br /> 
       <p className='mx-10 text-orange-700'>Learn More ...</p>
        </div>

       
       </div>

       
    
  )
}

export default exp