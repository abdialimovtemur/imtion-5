import React from 'react'
import PrimaryButton from './primary-button'
import bannerImg from '../assets/subscribe.png'

export const FooterTop = () => {
    return (
        <div className='flex justify-between px-12 py-20 rounded-3xl' style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className='w-[357px]'>
                <h3 className='text-[50px] text-white font-bold'>Subscribe to our Newsletter</h3>
            </div>
            <div className='flex items-center gap-3'>
                <input type="text" placeholder='Your Email Address' className='h-[60px] w-[349px] border-none outline-none rounded-xl px-6'/>
                <PrimaryButton bgColor='bg-primary' textColor='text-white' className='h-[60px] px-12'>Subscribe</PrimaryButton>
            </div>
        </div>
    )
}
