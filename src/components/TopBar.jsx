'use client'
import { React, useState, useLayoutEffect } from 'react'
import { LetsIconsMessageDuotone } from './svg/HeroiconsEnvelope16Solid'
import { SolarBellBoldDuotone } from './svg/SolarBellBold'
import Image from 'next/image'
import Link from 'next/link'

const TopBar = () => {
  const links = [
    { href: '/', title: 'Home' },
    { href: '/account', title: 'Account' },
    { href: '/settings', title: 'Settings' }
  ];

  const [ toggle, setToggle ] = useState(false);

  useLayoutEffect(() => {
    setToggle(false);
    
  }, [])

  return (
    <div className='sticky top-0 z-10'>
      <div onClick={() => setToggle(false)} className={ toggle ? 'fixed z-0 inset-0 w-full h-screen' : 'hidden' }></div>
      <div className='p-5 text-blue-600 w-full flex justify-end gap-4 items-center bg-[#F4F6F8] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90'> 
        <button className='hover:bg-gray-200 hover:scale-110 px-2 rounded-full items-center justify-center'>
          <SolarBellBoldDuotone className='relative top-[10px] left-0' />
          <small className='relative top-[-25px] right-[-12px] text-[11px] text-white bg-orange-600 w-4 h-4 rounded-full p-2 flex items-center justify-center'>1</small>
        </button>
        <button className='hover:bg-gray-200 p-2 transition hover:scale-110 rounded-full items-center justify-center'><LetsIconsMessageDuotone/></button>
        <div onClick={() => setToggle(!toggle)} className='overflow-hidden w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer relative hover:scale-110 transition-all'>
          <Image src='/img/logo.jpg' width={40} height={40} alt='userImg' className='object-cover' />
        </div>
        <div className={ `bg-white bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-90 border border-gray-200 absolute z-[1000] top-16 right-5 p-2 rounded-xl transition-max-height duration-300 ease-in-out min-w-60 overflow-hidden ${ !toggle ? 'scale-down-tr' : 'scale-up-tr' }` }>
          <div className='font-medium text-md px-3 text-[#334454]'>Danish</div>
          <span className='px-3 text-sm my-2 text-gray-400 mb-2'>danish@demo.com</span>
          <hr className='w-full mt-1'/>
          {
            links.map((v, i) => {
              return (
                <Link className='my-2 block py-2 px-3 text-sm font-medium text-gray-500 hover:bg-slate-50 rounded-lg' href={v.href} key={i}>{v.title}</Link>
              )
            })
          }
          <hr className='mb-2'/>
          <Link className='block py-2 px-3 text-sm font-medium hover:bg-slate-50 rounded-lg text-[#FF5630]' href='/logout'>Logout</Link>
        </div>
      </div>
    </div> 
  )
}

export default TopBar