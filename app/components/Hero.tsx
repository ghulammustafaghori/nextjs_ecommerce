import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='flex flex-1 sm:flex-row flex-col'>
        <div className='relative sm:w-1/2 w-full  flex items-center sm:justify-end justify-center shadow sm:shadow-none pb-5 sm:pb-0'>
            <Image className='object-cover ' src='/Hero-furniture.png' alt='hero' width={500} height={500} />
        </div>
        <div className='sm:w-1/2 w-full  flex justify-center mt-10 sm:mt-0'>
            <div className='flex flex-col justify-center h-full w-[75%] gap-3'>
                <h1 className='md:text-1xl text-sm'>Sustainable Furtinure</h1>
            <h1 className='md:text-4xl font-bold text-2xl sm:text-3xl'>Quality Furniture for Every Room</h1>
            <h1 className='md:text-1xl text-sm'>From living rooms to bedrooms, our high-quality furniture collections offer something for every space.</h1>
            <div className='flex gap-3'>
                <button className='border p-2  rounded-full px-4  cursor-pointer md:text-1xl text-sm bg-blue-500 text-white hover:bg-blue-800'>Explore Now</button>
                <button className='border p-2  rounded-full px-4  cursor-pointer md:text-1xl text-sm bg-gray-500 text-white hover:bg-gray-800'>Watch Now</button>

            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero