import React from 'react'

export const Servises = ({ img, title, discription }) => {
    return (
        <div className='flex flex-col gap-2 items-center justify-center text-center'>
            <div><img src={img} alt="img" /></div>
            <div className='flex flex-col gap-4'>
                <h4 className='font-bold text-[26px] text-primary'>{title}</h4>
                <p className='text-[18px] text-darkGray'>{discription}</p>
            </div>
        </div>
    )
}
