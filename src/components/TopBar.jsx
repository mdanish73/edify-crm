import React from 'react'
import { HeroiconsEnvelope16Solid } from './svg/HeroiconsEnvelope16Solid'
import { SolarBellBold } from './svg/SolarBellBold'
import Image from 'next/image'

const TopBar = () => {
  return (
    <div className='sticky top-0 z-[1000] bg-[#F4F6F8] p-5 text-blue-600 backdrop-grayscale w-full flex justify-end gap-5 items-center'>
      <button>
        <SolarBellBold className='relative top-[10px] left-0' />
        <small className='relative top-[-25px] right-[-10px] text-[11px] text-white bg-orange-600 w-4 h-4 rounded-full p-2 flex items-center justify-center'>1</small>
      </button>
      <button><HeroiconsEnvelope16Solid/></button>
      <div className='overflow-hidden w-10 h-10 rounded-full border-2 border-gray-400 cursor-pointer'><Image src='/img/logo.jpg' width={40} height={40} alt='userImg' className='object-cover' /></div>
    </div>
  )
}

export default TopBar