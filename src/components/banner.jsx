import React from 'react'

export const Banner = ({img,title}) => {
  return (
    <div className='flex items-center justify-center h-[450px]' style={{ backgroundImage: `url(${img})` }}>
        <h1 className='text-primary text-[70px] font-bold'>{title}</h1>
    </div>
  )
}
