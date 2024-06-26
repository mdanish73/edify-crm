'use client'
import { React, useLayoutEffect, useState } from 'react'
import MyDoughnutChart from '@/components/charts/Doughnut'
import LineChart from '@/components/charts/LineChart'
import DashPic from '@/components/svg/DashPic'
import Link from 'next/link'
import EmployeeOfMonth from './EmployeeOfMonth'
import Slider from './Slider'
import ApplicationsChart from './charts/ApplicationsChart'
import GrantedGraph from './charts/GrantedGraph'
import DefferedGraph from './charts/DefferedGraph'
import Image from 'next/image'
import Profit from './svg/Profit'
import Loss from './svg/Loss'

const DashGrid = () => {
  let [applications, setApplications] = useState(0);
  let [granted, setGranted] = useState(0);
  let [deffered, setDeffered] = useState(0);
  
  useLayoutEffect(() => {
    setApplications(10000);
    setGranted(9900);
  }, []);
  
  useLayoutEffect(() => {
    setDeffered(applications - granted);
  }, [applications, granted]);

  return (
    <div className='bg-[#F4F6F8] grid grid-cols-3 grid-rows-[repeat(13, minmax(1fr))] w-full p-6 gap-5'>
      <div className='p-7 col-span-2 row-span-7 rounded-lg bg-gradient-to-br from-[#E2EEFB] to-[#D4E2F6] h-full flex items-center justify-between w-full'>
        <div>
          <h6 className='font-bold text-3xl text-blue-900'>Welcome Back,</h6>
          <h6 className='font-bold text-3xl text-blue-900'>Danish.</h6>
          <p className='text-blue-950 text-sm mt-4 mb-12'>If you're here to check out the reports. Check them out...</p>
          <Link href='/reports' className='p-2 rounded-lg text-white bg-[#2065D1] text-sm font-semibold'>Go Now</Link>
        </div>
        <div className='w-[40%] relative'>
          <DashPic />
          <Image className='absolute top-0 right-0' src='/img/character_3.png' height={100} width={100} alt='avatar' />
        </div>
      </div>

      <div className='bg-white row-span-7 overflow-hidden'>
        <Slider />
      </div>

      <div className='p-5 rounded-lg bg-white h-full'>
        <h6 className='text-sm font-semibold'>Total Visa Applications</h6>
        <div className='flex justify-between items-center mb-0 pb-0'>
          <div>
            <div className='mb-4 flex gap-1 items-center'>
              <Profit />
              <span className='font-semibold text-sm'>7.3%</span>
            </div>
            <div className='font-bold text-3xl'>
              {applications.toLocaleString()}
            </div>
          </div>
          <div>
            <ApplicationsChart />
          </div>
        </div>
      </div>

      <div className='p-3 rounded-lg bg-white h-full'>
        <h6 className='text-sm font-semibold'>Total Granted Visas</h6>
        <div className='flex justify-between items-center'>
          <div>
            <div className='mb-4 flex gap-1 items-center'>
              <Profit />
              <span className='font-semibold text-sm'>3.7%</span>
            </div>
            <div className='font-bold text-3xl'>
              {granted.toLocaleString()}
            </div>
          </div>
          <div>
            <GrantedGraph />
          </div>
        </div>
      </div>
      
      <div className='p-3 rounded-lg bg-white h-full'>
        <h6 className='text-sm font-semibold'>Total Deffered Visas</h6>
        <div className='flex justify-between items-center'>
          <div>
            <div className='mb-4 flex gap-1 items-center'>
              <Loss />
              <span className='font-semibold text-sm'>-2.2%</span>
            </div>
            <div className='font-bold text-3xl'>
              {deffered.toLocaleString()}
            </div>
          </div>
          <div>
            <DefferedGraph />
          </div>
        </div>
      </div>
      
      <div className='p-3 rounded-lg bg-white'>
        <MyDoughnutChart />
      </div>
      
      <div className='p-3 rounded-lg col-span-2 bg-white'>
        <LineChart />
      </div>
      
      <div className='p-3 rounded-lg bg-white'>
        <EmployeeOfMonth />
      </div>
    </div>
  )
}

export default DashGrid