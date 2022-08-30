import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='relative h-[450px] sm:h-[400] lg:h-[500] xl:h-[600] 2xl:h-[700px]'>
        <Image
            src="https://images.unsplash.com/photo-1507187632231-5beb21a654a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=901&q=80"
            layout="fill"
            objectFit="fill"
        />
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg '>Not sure where to go? Perfect.</p>
            <button className='text-purple-500 bg-white px-10 py-4 rounded-full shadow-md mt-2 font-bold hover:shadow-xl hover:text-green-500 active:scale-90 transition duration-150'>I'm flexible</button>
        </div>
    </div>
  )
}

export default Banner