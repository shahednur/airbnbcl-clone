import React from 'react';
import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <div className='cursor-pointer hover:scale-105 tranform:transition duration-300 ease-out my-1 '>
        <div className='relative h-60 w-60 my-1'>
            <Image
                src={img}
                layout='fill'
                className='rounded-xl '
            />
        </div>
        <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
)
}

export default MediumCard