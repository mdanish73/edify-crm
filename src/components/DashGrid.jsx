'use client'
import { React, useLayoutEffect, useState } from 'react'
import MyDoughnutChart from '@/components/charts/Doughnut'
import LineChart from '@/components/charts/LineChart'
import DashPic from '@/components/svg/DashPic'
import Link from 'next/link'
import EmployeeOfMonth from './EmployeeOfMonth'
import Slider from './Slider'

const DashGrid = () => {
  let [courses, setCourses] = useState(0);
  let [stories, setStories] = useState(0);
  let [alumni, setAlumni] = useState(0);
  useLayoutEffect(() => {
    const incrementCourses = () => {
      setTimeout(() => {
        if (courses <= 30) {
          setCourses(courses++);
          incrementCourses();
        }
        if (stories <= 600) {
          setStories(stories++);
          incrementCourses();
        }
        if (alumni <= 3500) {
          setAlumni(alumni++);
          incrementCourses();
        }
      }, 100);
    };

    incrementCourses();
  }, [])

  return (
    <div className='bg-[#F4F6F8] grid grid-cols-3 grid-rows-[repeat(8, minmax(1fr))] w-full p-6 gap-5'>
      <div className='p-7 col-span-2 row-span-7 rounded-lg bg-gradient-to-br from-[#E2EEFB] to-[#D4E2F6] h-full flex items-center justify-between w-full'>
        <div>
          <h6 className='font-bold text-3xl text-blue-900'>Welcome Back,</h6>
          <h6 className='font-bold text-3xl text-blue-900'>Danish.</h6>
          <p className='text-blue-950 text-sm mt-4 mb-12'>If you're here to check out the reports. Check them out...</p>
          <Link href='/reports' className='p-2 rounded-lg text-white bg-[#2065D1] text-sm font-semibold'>Go Now</Link>
        </div>
        <div className='w-[40%]'>
          <DashPic />
        </div>
      </div>

      <div className='p-3 row-span-7 rounded-lg bg-white h-full'>
        <EmployeeOfMonth />
      </div>

      <div className='p-3 rounded-lg bg-white h-full'>
        <h6 className='text-sm font-semibold'>IT Courses</h6>
        <div>
          <div className='font-bold text-3xl'>
            {courses.toLocaleString()}+
          </div>
        </div>
      </div>

      <div className='p-3 rounded-lg bg-white h-full'>
      <h6 className='text-sm font-semibold'>Success Stories</h6>
        <div>
          <div className='font-bold text-3xl'>
            {stories}+
          </div>
        </div>
      </div>
      
      <div className='p-3 rounded-lg bg-white h-full'>
        <h6 className='text-sm font-semibold'>Alumni</h6>
        <div>
            <div className='font-bold text-3xl'>
            {alumni}+
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
        <Slider />
      </div>
    </div>
  )
}

export default DashGrid