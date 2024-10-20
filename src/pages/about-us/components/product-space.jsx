import React from 'react'

export const ProductSpace = ({ img, title }) => {
    return (
        <div className='flex items-center flex-col gap-3'>
            <div className='w-[334px] bg-white rounded-3xl'>
                <img className='rounded-3xl' src={img} alt="img" />
            </div>
            <p className='text-[25px] font-medium text-white'>{title}</p>
        </div>
    )
}
