import React from 'react'
import { UserIcon } from '../assets/icons/user-icon'
import PrimaryButton from './primary-button'

export const ProductNews = ({ img, date, avtor, title, discription, buttonTitle }) => {
    return (
        <div className='text-white relative'>
            <div className='relative'>
                <img src={img} alt="img" className='rounded-3xl' />
                <div className='w-[70px] h-[70px] rounded-full flex items-center justify-center text-primary font-bold p-2 bg-white absolute top-8 left-6'>{date}</div>

                <div className='flex flex-col gap-3 bg-white rounded-xl px-[57px] py-[47px]  absolute bottom-[-60px] w-[600px] left-[50%] translate-x-[-50%] shadow-xl'>
                    <div className='flex items-center gap-2'><UserIcon /><p className='text-primary text-[18px] font-semibold'>{avtor}</p></div>
                    <h3 className='text-[25px] text-primary font-bold'>{title}</h3>
                    <p className='text-darkGray text-[18px]'>{discription}</p>
                    <div><PrimaryButton>{buttonTitle}</PrimaryButton></div>
                </div>
            </div>
        </div>
    )
}
