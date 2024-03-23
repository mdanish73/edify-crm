import React from 'react'
import MyDoughnutChart from '@/components/charts/Doughnut'
import LineChart from '@/components/charts/LineChart'

const page = () => {
  return (
    <div className='bg-[#F4F6F8] grid grid-cols-3 grid-rows-3 w-full p-6 gap-5'>
      <div className='p-3 rounded-lg border border-1 border-gray-300 bg-white h-full'>
        <h6 className='text-sm font-semibold'>Total Active Users</h6>
        <div>
          <div className='font-bold text-3xl'>
            18,765
          </div>
        </div>
      </div>
      
      <div className='p-3 rounded-lg border border-1 border-gray-300 bg-white h-full'>
        <h6 className='text-sm font-semibold'>Total Applications</h6>
        <div>
          <div className='font-bold text-3xl'>
            18,765
          </div>
        </div>
      </div>
      
      <div className='p-3 rounded-lg border border-1 border-gray-300 bg-white h-full'>
        <h6 className='text-sm font-semibold'>Total Visas Granted</h6>
        <div>
          <div className='font-bold text-3xl'>
            18,765
          </div>
        </div>
      </div>
      
      <div className='p-3 rounded-lg border border-1 border-gray-300 bg-white'>
        <MyDoughnutChart />
      </div>
      
      <div className='p-3 rounded-lg border border-1 border-gray-300 row-span-1 col-span-2 bg-white'>
        <LineChart />
      </div>
    </div>
  )
}

export default page