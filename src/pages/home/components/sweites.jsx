import React from 'react'

export const Sweites = ({ img, title }) => {
    return (
        <div className='bg-slate-50 relative'>
            <img src={img} alt="img" />
            <p className='text-[25px] text-primary absolute bg-[#ffff] p-4 top-52 left-40 font-semibold rounded-2xl'>{title}</p>
        </div>
    )
}
