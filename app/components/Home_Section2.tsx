import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Home_Section2 = () => {
    return (
        <div>
            <div className=' w-full h-120 mt-10 flex flex-col lg:flex-row'>
                <div className=' w-full lg:w-[45%] h-full flex justify-center '>
                
                    <div className='w-full sm:w-[80%] lg:w-[70%]  rounded-2xl px-10 h-full p-5 flex lg:block justify-between ' style={{backgroundColor:'#0049a9'}}>
                        <div className=' flex flex-col lg:block justify-center w-1/2 md:w-auto'>
                            <h1 className='text-white text-xl md:text-2xl mt-3'>Innovative Furniture</h1>
                        <h1 className='text-white mt-2 mb-3 text-xs md:text-sm mr-2 md:mr-0'>Upgrade your home with our innovative furniture designs</h1>
                        <div className='mt-8 lg:mt-0'>
                            <Link className='text-white underline uppercase text-xs md:text-sm' href='*'>Explore Now</Link>
                        </div>
                        </div>

                      <div className='w-1/2 lg:w-full flex pb-10 lg:pb-0'>
                         <div className='relative  w-[100%] md:w-[80%] lg:w-[100%] h-[270px]'>
                         <Image className='mt-10' src='/Furniture.png' fill alt='furniture' />
                       </div>
                      </div>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 h-full  flex flex-col gap-7 items-center mt-15 lg:mt-0'>

                    <div className='w-full sm:w-[80%] lg:w-full h-1/2  rounded-2xl p-7 bg-gray-100 relative pb-40 lg:pb-0 pt-10'>
                        <h1 className='text-2xl md:text-3xl font-bold'>Elegant Furniture</h1>
                        <p className='w-1/2 text-sm md:text-md mt-4 mb-10'>Upgrade your home with our innovative furniture designs.</p>
                         <Link className='text-blue-500 underline uppercase md:text-sm text-xs' href='*'>Explore Now</Link>
                         <img src='/Elegant-Furniture.png' className='absolute lg:w-[40%] md:w-[30%] w-[45%] top-[25px] right-[25px]' />
                    </div>

                    
                     <div className='w-full sm:w-[80%]  lg:w-full h-1/2  rounded-2xl p-7 bg-gray-100 relative pb-40 lg:pb-0 pt-10 mt-8 lg:mt-0'>
                        <h1 className='text-2xl md:text-3xl font-bold'>Modern Furniture</h1>
                        <p className='w-1/2 text-sm md:text-md mt-4 mb-10'>Upgrade your home with our innovative furniture designs.</p>
                         <Link className='text-blue-500 underline uppercase md:text-sm text-xs' href='*'>Explore Now</Link>
                         <img src='/Modern-Furniture.png' className='absolute lg:w-[40%] md:w-[30%] w-[40%] top-[35px] md:top-[25px] right-[25px]' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home_Section2