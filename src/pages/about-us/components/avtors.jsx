import React from 'react'
import { InstagramLogo } from '../../../assets/icons/instagram-logo'
import { FacebookIcon } from '../../../assets/icons/facebook-icon'
import { TwitterIcon } from '../../../assets/icons/twitter-icon'

export const Avtors = ({ img, fullName, positon }) => {
    return (
        <div className='border-2 border-gray-300 rounded-3xl transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
            <img src={img} alt="img" className='w-full rounded-t-3xl' />
            <div className='flex items-start flex-col p-3'>
                <h1 className='text-h4 text-[25px] font-bold text-primary'>{fullName}</h1>
                <div className='flex gap-60 items-center'>
                    <p className='text-secondary font-cursive text-[22px]'>{positon}</p>
                    <div className='flex gap-3 items-center w-32'>
                        <InstagramLogo />
                        <FacebookIcon />
                        <TwitterIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
