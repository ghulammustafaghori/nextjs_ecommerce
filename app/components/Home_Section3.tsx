import React from 'react'
import Image from 'next/image'

 type Home_Section3 = {
    title: string
  }
const Home_Section3 = ({title}:Home_Section3) => {

    return (
        <div className='mt-25'>
            <div className='w-full'>
                <h1 className='text-center text-3xl font-bold'>{title}</h1>
                <p className='text-center text-1xl mt-5'>Shop versatile furniture perfect for multi-use spaces</p>
            </div>

            <div className='w-full px-20 mt-20 flex flex-col sm:flex-row flex-wrap lg:flex-nowrap gap-5'>
                <div className='w-[100%] sm:w-[45%] lg:w-[25%]  hover:shadow-2xl hover:shadow-gray-700 hover:mt-[-10px] pb-5'>
                    <div className='w-[100%]  mx-auto flex justify-center' style={{backgroundColor:'#f8f9f9'}}>
                        <img className="object-cover w-[80%]" src='/4.jpg' alt='furniture' />
                    </div>
                    <p className='text-center mt-3 text-1xl text-gray-500'>Product 1</p>
                    <p className='text-xs text-center'>$200.00 - $300.00</p>
                </div>

                 <div className='w-[100%] sm:w-[45%] lg:w-[25%]  hover:shadow-2xl hover:shadow-gray-700 hover:mt-[-10px] pb-5'>
                    <div className='w-[100%]  mx-auto flex justify-center' style={{backgroundColor:'#f8f9f9'}}>
                        <img className="object-cover w-[80%]" src='/11.png' alt='furniture' />
                    </div>
                    <p className='text-center mt-3 text-1xl text-gray-500'>Product 2</p>
                    <p className='text-xs text-center'>$200.00 - $300.00</p>
                </div>

                 <div className='w-[100%] sm:w-[45%] lg:w-[25%]  hover:shadow-2xl hover:shadow-gray-700 hover:mt-[-10px] pb-5'>
                    <div className='w-[100%]  mx-auto flex justify-center' style={{backgroundColor:'#f8f9f9'}}>
                        <img className="object-cover w-[80%]" src='/2.jpg' alt='furniture' />
                    </div>
                    <p className='text-center mt-3 text-1xl text-gray-500'>Product 3</p>
                    <p className='text-xs text-center'>$200.00 - $300.00</p>
                </div>

                 <div className='w-[100%] sm:w-[45%] lg:w-[25%]  hover:shadow-2xl hover:shadow-gray-700 hover:mt-[-10px] pb-5'>
                    <div className='w-[100%]  mx-auto flex justify-center' style={{backgroundColor:'#f8f9f9'}}>
                        <img className="object-cover w-[80%]" src='/1.jpg' alt='furniture' />
                    </div>
                    <p className='text-center mt-3 text-1xl text-gray-500'>Product 4</p>
                    <p className='text-xs text-center'>$200.00 - $300.00</p>
                </div>

            </div>

        </div>
    )
}

export default Home_Section3