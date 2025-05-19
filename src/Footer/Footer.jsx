import React from 'react'
import {assets} from '../assets/assets.js'
const Footer = () => {
  return (
    <div className='bg-blue-100 sm:h-[330px] mt-5'>
    <div className='mt-5  border-black [&>div]: [&>div]:border-black grid sm:grid-cols-12 gap-15 w-[90%] m-auto 
     [&>div]:mt-4 text-gray-600'>

      <div className='sm:col-span-4 '>
        <span>
        <img src={assets.logo} alt="logo"/>
        </span>
        <p className='mt-6'>Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.</p>
        <span className='flex gap-3 mt-4'>
            <img src={assets.instagramIcon} alt="" />
            <img src={assets.linkendinIcon} alt="" />
            <img src={assets.twitterIcon} alt="" />
            <img src={assets.facebookIcon} alt="" />
        </span>
      </div>
      
      <div className='sm:col-span-2'>
        <p className='font-bold'>Company</p>
        <ul className='mt-6'>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Partenrs</li>
        </ul>
      </div>

      <div className='sm:col-span-2'>
      <p className='font-bold'>Support</p>
      <ul className='mt-6'>
            <li>Help Center</li>
            <li>Safety Information</li>
            <li>Cancellation</li>
            <li>Option</li>
        </ul>
      </div>

      <div className='sm:col-span-4'>
      <p className='font-bold'>Stay Updated</p>
      <ul className='mt-6'>
           
            <li>Subscribe to our newsletter for travel inspiration and special offers.</li>
            <div className='flex  border-red-800 mt-5 h-[30px] gap-1 '>
                <input className='border border-black rounded-sm text indent-3' type="text" placeholder='Your Email'/>
                <img src={assets.arrowIcon} alt="logo" className=''/>
            </div>
        </ul>
      </div>
    </div>
    <div className='m-auto mt-19 sm:w-[80%] grid'>
    <hr className='w-[80%] mt-5 m-auto'/>
      <div className='grid sm:grid-cols-2 w-[80%] m-auto mt-3'>
        <p>© 2025 QuickStay. All rights reserved.</p>
        <span className='flex justify-around gap-4' >
          <p>Privacy</p>
          <p>Terms</p>
          <p>Sitemap</p>
        </span>
      </div>
    </div>
     
    </div>
  )
}

export default Footer
