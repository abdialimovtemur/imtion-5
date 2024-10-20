import React from 'react'

export const Fruits = ({title,discription,bgImg,pColor='text-[#ffff]',hColor='text-[#ffff]'}) => {
  return (
    <div className='bg-cover bg-center rounded-3xl flex flex-col gap-3 py-20 w-full px-12' style={{ backgroundImage: `url(${bgImg})` }}>
        <p className={`text-[36px] ${pColor} font-cursive `}>{title}</p>
        <h4 className={`text-h4 ${hColor} w-64`}>{discription}</h4>
    </div>
  )
}
