import React from 'react'

export const Sircle = ({ prasent, info }) => {
    return (
        <div className='w-[211px] h-[211px] rounded-full border-4 border-[#7EB693] bg-[#F1F1F1] p-2 flex flex-col items-center justify-center'>
            <h3 className='text-h2 text-primary'>{prasent}</h3>
            <p className='text-primary text-[18px] font-semibold'>{info}</p>
        </div>
    )
}
