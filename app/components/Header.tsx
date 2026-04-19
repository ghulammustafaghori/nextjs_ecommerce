'use client'
import { useState } from "react"
import Link from "next/link"
function Header(){
    const [isOpen, setIsOpen] = useState(false)
    const liClass='border-b p-2 sm:border-0 sm:p-0'
    return(
        <div>
            <div className="w-full sm:flex justify-between items-center py-5 px-10 sm:shadow">
                <div className="sm:w-1/2 flex sm:block justify-between">
<h1 className="text-xl sm:text-2xl font-bold">Ecommerce Store</h1>
<button className="sm:hidden" onClick={(e)=>setIsOpen(!isOpen)}>Menu</button>
                </div>
                <div className="sm:w-1/2 border border-b-0 sm:border-0">
<ul className={`sm:flex gap-10 text-center ${isOpen?'block':'hidden'}`}>
                    <li className={liClass}>
                        <Link href='/'>Home
                        </Link>
                        </li>
                    <li className={liClass}>
                        <Link href='/shop'>Shop
                        </Link>
                        </li>
                    <li className={liClass}>
                        <Link href='/cart'>Cart
                        </Link>
                        </li>
                    <li className={liClass}>
                        <Link href='/account'>Acco
                        </Link>unt
                        </li>

                </ul>
                </div>
                
            </div>
        </div>
    )
}
export default Header