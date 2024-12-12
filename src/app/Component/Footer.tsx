import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook } from 'react-icons/fa';



    
  

function footer() {
  return (
//     <div style={{ backgroundColor: 'rgba(45, 60, 101, 1)' }} className='h-screen pt-9 '>
//         <img className='w-32 m-10 mx-10'  src="logo1.png" alt="" />
//         <div>
//       <FontAwesomeIcon icon={faPhone} style={{  color: '#ffffff' }} className='w-3 h-3 mx-10' /> 
//      <div className='mx-1'>
//       <p className='text-xs mx-14 text-white -mt-3 '>+1 (525) 456 7890</p>
//       </div>

//       <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '24px', color: '#ffffff' }} className='w-3 mx-44 -mt-4' />
//       <div className='ml-[-10px] '>
//       <p className='text-xs text-white mx-52 -mt-3  '>info@domain.com</p>

//       <h2 className='text-white mx-[750px] -mt-16 font-bold'>Solutions</h2>
//       <p className='text-xs flex justify-center text-white font-thin mr-[-300px] mt-5'>Assets Management</p>
//       <p className='text-white flex-justify-center text-xs mx-[800px] mr-4 p-4 ml-[736px]'>Private Equity & IB</p>
//     <p className='mx-[752px] mr-6 text-xs text-white '>Real Estate Investments </p>
//     <p className='text-white mx-[950px] -mt-[126px] mr-6'>Helpful Link</p>
//     <p className='text-white mx-[948px] text-xs mr-10 pt-5'>About us</p>
//     <p className='text-white mx-[950px] text-xs p-4 mr-5 -ml-[-930px]'>Contact Us</p>
//     <p className='text-white mx-[950px] text-xs -ml-[-946px]'>Careers</p>
//     <p className='text-white mx-[1130px] -mt-[126px] font-bold mr-6 '>Follow Us</p>
//     <div >
//      <img className='mx-[1130px] w-5 h-5 mt-5 ' src="fb.png" alt="" />
//      <img  className='mx-[1170px] -mt-5 w-5 h-5 absolute -left-5 ' src="linkedin.png" alt="" />
//      <img  className='mx-[1170px] -mt-[19px] w-4 h-4 absolute left-3 ' src="X.png" alt="" />
//      <p className='text-xs flex text-wrap text-white mt-44 mx-[550px] mr-6'>© 2024 MEFIC Capital. All rights reserved.</p>
//     </div>

//       </div>
//     </div>
<div style={{ backgroundColor: 'rgba(45, 60, 101, 1)' }} className='h-screen pt-9'>
  <img className='w-24 sm:w-32 m-4 mx-4 sm:mx-10' src="logo1.png" alt="" />
  
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start mx-4 sm:mx-10">
    <FontAwesomeIcon icon={faPhone} style={{ color: '#ffffff' }} className='w-3 h-3' />
    <p className='text-xs sm:text-sm text-white mt-2 sm:mt-0 sm:ml-2'>+1 (525) 456 7890</p>
  </div>

  <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '24px', color: '#ffffff' }} className='w-3 mx-auto sm:mx-44 mt-4 sm:mt-0' />

  <div className='flex flex-col sm:flex-row sm:justify-between mx-4 sm:ml-10 mt-6'>
    <div>
      <h2 className='text-white font-bold text-center sm:text-left sm:mx-0'>Solutions</h2>
      <p className='text-xs text-white text-center sm:text-left mt-2 sm:mt-4'>Assets Management</p>
      <p className='text-xs text-white text-center sm:text-left mt-2'>Private Equity & IB</p>
      <p className='text-xs text-white text-center sm:text-left mt-2'>Real Estate Investments</p>
    </div>

    <div className="mt-6 sm:mt-0">
      <h2 className='text-white font-bold text-center sm:text-left'>Helpful Links</h2>
      <p className='text-xs text-white text-center sm:text-left mt-2'>About Us</p>
      <p className='text-xs text-white text-center sm:text-left mt-2'>Contact Us</p>
      <p className='text-xs text-white text-center sm:text-left mt-2'>Careers</p>
    </div>

    <div className="mt-6 sm:mt-0">
      <h2 className='text-white font-bold text-center sm:text-left'>Follow Us</h2>
      <div className="flex justify-center sm:justify-start mt-4 space-x-4">
        <img className='w-5 h-5' src="fb.png" alt="" />
        <img className='w-5 h-5' src="linkedin.png" alt="" />
        <img className='w-5 h-5' src="X.png" alt="" />
      </div>
    </div>
  </div>

  <p className='text-xs text-white text-center mt-10 sm:mt-44'>© 2024 MEFIC Capital. All rights reserved.</p>



</div>

    




  )
}

export default footer