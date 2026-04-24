'use client'
import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
const Home_Section4 = () => {
    const saleDate = "2026-05-10T23:59:59"; // dummy date for now

    // State to store countdown values
    const [days, setDays] = useState("00");
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");

    useEffect(() => {
        const timer = setInterval(() => {
            // Current time
            const now = new Date().getTime();

            // Sale ending time
            const endDate = new Date(saleDate).getTime();

            // Difference between sale date and current time
            const distance = endDate - now;

            // Convert milliseconds into days, hours, mins, secs
            const d = Math.floor(distance / (1000 * 60 * 60 * 24));

            const h = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );

            const m = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );

            const s = Math.floor((distance % (1000 * 60)) / 1000);

            // Save values into state
            setDays(String(d));
            setHours(String(h));
            setMinutes(String(m));
            setSeconds(String(s));

        }, 1000); // updates every second

        return () => clearInterval(timer);
    }, []);


    return (
        <div>
            <div className='w-full h-[480px]  mt-15 flex-col lg:flex-row flex' style={{ backgroundColor: '#e4e4e4' }}>


                <div className='lg:w-1/2 w-full  h-full  flex flex-col justify-center items-center'>
                    <div>
                        <div>
                        <h1 className='lg:text-3xl sm:text-2xl text-xl'>Flat 30% off</h1>
                    <h1 className='lg:text-3xl sm:text-2xl text-xl'>limited time offer!</h1>
                    </div>

                    <div className='flex flex-row gap-3 mt-5 '>

                        <div className=' w-[70px] border h-[70px] rounded-lg flex flex-col justify-center items-center'>
                            <h1 className='lg:text-lg text-sm font-bold'>{days}</h1>
                            <p className='text-xs'>Days</p>
                        </div>

                        <div className=' w-[70px] border h-[70px] rounded-lg flex flex-col justify-center items-center'>
                            <h1 className='lg:text-lg text-sm font-bold'>{hours}</h1>
                            <p className='text-xs'>Hours</p>
                        </div>

                        <div className=' w-[70px] border h-[70px] rounded-lg flex flex-col justify-center items-center'>
                            <h1 className='lg:text-lg text-sm font-bold'>{minutes}</h1>
                            <p className='text-xs'>Minutes</p>
                        </div>

                        <div className=' w-[70px] border h-[70px] rounded-lg flex flex-col justify-center items-center'>
                            <h1 className='lg:text-lg text-sm font-bold'>{seconds}</h1>
                            <p className='text-xs'>Seconds</p>
                        </div>

                    </div>
                    <div>
                        <button className='mt-5 p-2  rounded-md px-4  cursor-pointer md:text-1xl text-sm bg-blue-500 text-white hover:bg-blue-800'>Buy Now</button>
                    </div>
                    </div>
                </div>


                <div className='p-5 lg:w-1/2 w-full h-full flex justify-center'>
                    <div className='lg:w-full sm:w-[60%] w-full h-full relative'>
                        <Image src='/Group-9475.png' fill alt='furniture' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home_Section4