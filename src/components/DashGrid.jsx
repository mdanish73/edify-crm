'use client'
import { React, useLayoutEffect, useRef, useState } from 'react'
import MyDoughnutChart from '@/components/charts/Doughnut'
import LineChart from '@/components/charts/LineChart'
import DashPic from '@/components/svg/DashPic'
import Link from 'next/link'

const DashGrid = () => {
    const Applications = useRef(null);
    const Granted = useRef(null);
    const [ rejected, setRejected ] = useState(0);
    useLayoutEffect(() => {
        const applicationsValue = parseInt(Applications.current.innerText.replace(/,/g, ''));
        const grantedValue = parseInt(Granted.current.innerText.replace(/,/g, ''));
        setRejected(applicationsValue - grantedValue);
    }, [Applications.current, Granted.current]);
  return (
    <div className='bg-[#F4F6F8] grid grid-cols-3 grid-rows-[repeat(8, minmax(1fr))] w-full p-6 gap-5'>
      <div className='p-7 col-span-2 row-span-7 rounded-lg bg-gradient-to-br from-[#E2EEFB] to-[#D4E2F6] h-full flex items-center justify-between w-full'>
        <div>
          <h6 className='font-bold text-3xl text-blue-900'>Danish</h6>
          <p className='text-blue-950 text-sm mt-4 mb-12'>If you're here to check out the reports. Check them out...</p>
          <Link href='/reports' className='p-2 rounded-lg text-white bg-[#2065D1] text-sm font-semibold'>Go Now</Link>
        </div>
        <div className='w-[40%]'>
          <DashPic />
        </div>
      </div>

      <div className='p-3 row-span-7 rounded-lg bg-white h-full'>
        
      </div>

      <div className='p-3 rounded-lg bg-white h-full'>
        <h6 className='text-sm font-semibold'>Total Applications</h6>
        <div>
          <div className='font-bold text-3xl' ref={Applications}>
            18,765
          </div>
        </div>
      </div>

      <div className='p-3 rounded-lg bg-white h-full'>
      <h6 className='text-sm font-semibold'>Total Visas Granted</h6>
        <div>
          <div className='font-bold text-3xl' ref={Granted}>
            16,876
          </div>
        </div>
      </div>
      
      <div className='p-3 rounded-lg bg-white h-full'>
        <h6 className='text-sm font-semibold'>Total Visas Granted</h6>
        <div>
            <div className='font-bold text-3xl'>
                { rejected }
            </div>
        </div>
      </div>
      
      <div className='p-3 rounded-lg bg-white'>
        <MyDoughnutChart />
      </div>
      
      <div className='p-3 rounded-lg col-span-2 bg-white'>
        <LineChart />
      </div>
    </div>
  )
}

export default DashGrid