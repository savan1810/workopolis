import React from 'react'
import logo1 from '../images/part-time.svg';
import logo2 from '../images/full-time.svg';
import logo3 from '../images/accounting.svg';
import logo4 from '../images/construction.svg';
import logo5 from '../images/wfh.svg';
import logo6 from '../images/visa-sponsorship.svg';
import logo7 from '../images/nursing.svg';
import logo8 from '../images/admin-assistant.svg';
import logo9 from '../images/human-resources.svg';
import logo10 from '../images/driver.svg';
import logo11 from '../images/pharmacist.svg';
import logo12 from '../images/sales.svg';



const Jobs = () => {
  return (
    <div className='px-10 py-4 rounded-3xl my-10  bg-[#FFE5E5] bg-opacity-40 w-4/5 mx-auto'>
      <p className='mt-10 text-md font-medium'>Browse Popular jobs</p>
      <div className='my-6   grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
        <div className='border bg-white cursor-pointer hover:border-purple-300 rounded-lg h-28 flex flex-col justify-center items-center '>
        <img src={logo1}  className='mb-2'height='40' width='40' alt=''/>
            <p >Part Time</p>
        </div>
        <div className='border bg-white  cursor-pointer hover:border-purple-300  rounded-lg h-28 flex flex-col justify-center items-center'>
            <img src={logo2}  className='mb-2'height='40' width='40' alt=''/>
            <p>Full Time</p>
        </div>
        <div className='border bg-white  cursor-pointer hover:border-purple-300  rounded-lg h-28 flex flex-col justify-center items-center'>
            <img src={logo3}  className='mb-2'height='40' width='40' alt=''/>
            <p>Accounting </p>
        </div>
        <div className='border bg-white cursor-pointer hover:border-purple-300   rounded-lg h-28 flex flex-col justify-center items-center'>
            <img src={logo4}  className='mb-2'height='40' width='40' alt=''/>
            <p>Construction</p>
        </div>
        <div className='border  bg-white cursor-pointer hover:border-purple-300   rounded-lg h-28 flex flex-col justify-center items-center'>
            <img src={logo5}  className='mb-2'height='40' width='40' alt=''/>
            <p>Work From Home</p>
        </div>
        <div className='border bg-white cursor-pointer hover:border-purple-300   rounded-lg h-28 flex flex-col justify-center items-center'>
            <img src={logo6}  className='mb-2'height='40' width='40' alt=''/>
            <p>Visa Sponsorship</p>
        </div>
        <div className='border bg-white cursor-pointer hover:border-purple-300   rounded-lg h-28 flex flex-col justify-center items-center'>
            <img src={logo7}  className='mb-2'height='40' width='40' alt=''/>
            <p>Nursing</p>
        </div>
        <div className='border bg-white cursor-pointer hover:border-purple-300  rounded-lg h-28 flex flex-col justify-center items-center'>
            <img src={logo9} className='mb-2'height='40' width='40' alt=''/>
            <p>Human Resources</p>
        </div>
        <div className='border bg-white cursor-pointer hover:border-purple-300   rounded-lg h-28 flex flex-col justify-center items-center'>
            <img src={logo8}  className='mb-2'height='40' width='40' alt=''/>
            <p>Admin Assistant</p>
        </div>
        <div className='border bg-white cursor-pointer hover:border-purple-300   rounded-lg h-28 flex flex-col justify-center items-center'>
            <img src={logo10} className='mb-2'height='40' width='40' alt=''/>
            <p>Driver</p>
        </div>
        <div className='border bg-white cursor-pointer hover:border-purple-300   rounded-lg h-28 flex flex-col justify-center items-center'>
            <img src= {logo11} className='mb-2'height='40' width='40' alt=''/>
            <p>Pharmacist</p>
        </div>
        <div  className='border bg-white cursor-pointer hover:border-purple-300   rounded-lg h-28 flex flex-col justify-center items-center'>
            <img src={logo12}  className='mb-2'height='40' width='40' alt=''/>
            <p>Sales</p>
        </div>
      </div>
    </div>
  )
}

export default Jobs
