import React from 'react'
import '../style/style.css';

const JobList = ({data}) => {

    return (
        <div className='  py-10 w-4/5 mx-auto  border rounded-3xl'>
         <h1 className=' px-8 sm:px-20 pb-5 text-2xl font-semibold '>Jobs you might like</h1>
        <hr className='' />
            {data.length>0 ? data.map((ele, key) => {
                return (
                    <>
                        <div key={key} className='border-b px-8 sm:px-20 py-5 cursor-pointer hover:bg-blue-100 hover:bg-opacity-50'>
                            <p className='text-lg sm:text-xl font-medium mb-5'>{ele.title}</p>
                            <p className='text-base text-gray-400'>
                                <span className='font-medium'>{ele.company}</span> - <span> {ele.location},{ele.posted_time}</span></p>
                            <div className='mt-2 text-gray-700 text-sm sm:text-base'>
                                Already have both html and css code, in need of a skiller person to re-write fresh and new css code that is easy to read but responsive and eye catching. The css code must not be too advanced and must be clean. More details once hired. Please do not respond if you dont have the required skills as this is timely project that needs to be completed as soon as possible.
                                moreabout "Develop a relatively basic but eye-catching css code for a web-page"
                            </div>
                            <button className=' mt-6  rounded-md  text-white  bg-gradient-to-r from-cyan-400 to-blue-400 buttonHover tracking-wider w-[120px] sm:w-[130px] md:w-[140px] lg:w-[150px]  h-10 ' >Apply</button>
                        </div>
                        </>

                        )
        }):<p className='mt-10 text-xl font-semibold text-center'>No Jobs Found</p>}
        </div>
    )
}

export default JobList
