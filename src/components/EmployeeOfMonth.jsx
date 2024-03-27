import Image from 'next/image'
import React from 'react'

const EmployeeOfMonth = () => {
  return (
    <div>
        <h6 className='text-sm font-semibold'>Employee of the Month</h6>
        <div className='mx-auto flex justify-center items-center rounded-full overflow-hidden mt-5 border-4 border-gray-300 w-36 h-36'>
            <Image src='/img/logo.png' height={100} width={100} alt="employee profile" className='object-cover' />
        </div>
        <div className='text-center mt-7 text-lg font-semibold'>Name</div>
    </div>
  )
}

export default EmployeeOfMonth