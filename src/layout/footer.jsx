import React from 'react'
import logo from '../assets/logo.svg'
import { InstagramLogo } from '../assets/icons/instagram-logo'
import { FacebookIcon } from '../assets/icons/facebook-icon'
import { TwitterIcon } from '../assets/icons/twitter-icon'
import { PinterestIcon } from '../assets/icons/pinterest-icon'

export const Footer = () => {
  return (
    <div className='container'>
      <div className='py-[117px] flex justify-around'>
        <div className='flex flex-col gap-6 text-end'>
          <h3 className='font-bold text-primary text-[30px]'>Contact Us</h3>

          <div className='flex flex-col gap-3 text-end'>
            <div>
              <h5 className='text-primary font-bold text-[18px]'>Email</h5>
              <p className='text-darkGray text-[18px]'>needhelp@Organia.com</p>
            </div>

            <div>
              <h5 className='text-primary font-bold text-[18px]'>Phone</h5>
              <p className='text-darkGray text-[18px]'>666 888 888</p>
            </div>

            <div>
              <h5 className='text-primary font-bold text-[18px]'>Address</h5>
              <p className='text-darkGray text-[18px]'>88 road, borklyn street, USA</p>
            </div>
          </div>
        </div>


        <div className='flex flex-col items-center gap-7 w-[543px] border-x-2 px-8 border-[#D4D4D4]'>
          <div>
            <img src={logo} alt="" />
          </div>
          <p className='text-center text-[18px]'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing </p>
          <div className='flex gap-4'>
            <InstagramLogo />
            <FacebookIcon />
            <TwitterIcon />
            <PinterestIcon />
          </div>
        </div>



        <div className='flex flex-col gap-6'>
          <h3 className='font-bold text-primary text-[30px]'>Utility Pages</h3>

          <div className='flex flex-col gap-3'>
            <p className='text-darkGray text-[18px]'>Style Guide</p>
            <p className='text-darkGray text-[18px]'>404 Not Found</p>
            <p className='text-darkGray text-[18px]'>Password Protected</p>
            <p className='text-darkGray text-[18px]'>Licences</p>
            <p className='text-darkGray text-[18px]'>Changelog</p>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center'>
        <p className='text-primary font-semibold text-[18px]'>Copyright © Organick | Designed by VictorFlow Templates - Powered by Webflow</p>
      </div>
    </div>
  )
}
