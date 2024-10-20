import React from 'react'
import logo from '../assets/logo.svg'
import { SearchIcon } from '../assets/icons/search-icon'
import { CartIcon } from '../assets/icons/cart-icon'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className='flex justify-between items-center container py-[69px]'>
            <div className='flex gap-20 items-center'>
                <Link to={'/'}>
                    <img src={logo} alt="img" />
                </Link>
                <div className='flex gap-5 items-center text-primary text-[20px] font-[700]'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                    <select className='outline-none'>
                        <option>Pages</option>
                        <option>Mages</option>
                        <option>Lages</option>
                    </select>
                    <Link to={"/shop"}>Shop</Link>
                    <Link>Projects</Link>
                    <Link>News</Link>
                </div>
            </div>

            <div className='flex items-center gap-3'>
                <div className='flex items-center  bg-[#f2f2f2] w-[376px] h-[66px] rounded-full px-1 justify-between'>
                    <input type="text" className='bg-inherit border-none outline-none w-[260px] h-full rounded-full pl-5' />
                    <div className='w-[56px] h-[56px] bg-secondary items-center flex justify-center rounded-full'><SearchIcon /></div>
                </div>

                <div className='flex items-center gap-3 border border-[#E0E0E0] rounded-full h-[66px] w-[159px] px-1'>
                    <div className='bg-primary w-[56px] h-[56px] rounded-full flex justify-center items-center'>
                        <CartIcon />
                    </div>
                    <p className='text-lg font-semibold text-primary'>Cart(0)</p>
                </div>
            </div>
        </div>
    )
}
