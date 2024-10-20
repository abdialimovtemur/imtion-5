import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCart = ({ id, img, topTitle, title, oldPrice, price }) => {
    return (
        <div className='w-[315px] px-8 py-4 pb-12 rounded-xl border-2 border-[#DEDDDD] flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-primary bg-white'>
            <div className='flex justify-start'>
                <p className='bg-primary text-white py-1 px-3 rounded-xl'>{topTitle}</p>
            </div>
            <img src={img} alt="img" />

            <div className='h-12 flex flex-col'>
                <Link to={`/shopsingle/${id}`} onClick={() => window.scrollTo(0, 0)}>
                    <h5 className='text-primary text-[20px] font-bold pb-3'>{title}</h5>
                </Link>
                <div className='flex justify-between border-t pt-3 items-center'>
                    <div className='flex gap-2 items-center'>
                        <p className='text-[#B8B8B8] text-[15px] line-through'>{oldPrice}</p>
                        <p className='text-18px text-primary font-bold'>{price}</p>
                    </div>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
            </div>
        </div>
    )
}
