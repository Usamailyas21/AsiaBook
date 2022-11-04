import React from 'react'
import Delievery from '../img/delivery.png'

const MainContainer = () => {
  return (  
    <div className='grid grid-cols-1 md:grid-col gap-2'>
      <div className='p-2 flex-1 flex flex-col items-start md:items justify-center gap-6'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>ASIA BOOK</p>
          <div className='w-6 h-6 bg-white rounded-full overflow-hidden'>
            <img 
            src={Delievery}
            className='w-full h-full object-contain'
            alt='delievry'
            />
          </div>
        </div>
          <p className='text-[2.5rem] font-bold tracking-wide text-headingColor'>
          All College Books Available on <span className='text-orange-600 text-[3rem]'>Wholesale Rate</span></p>
          <p className='text-base text-textColor text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos reprehenderit veritatis dolore assumenda quaerat cupiditate ut possimus necessitatibus ipsam! Blanditiis, delectus! Animi sunt dolorem rerum quasi ex laborum, sequi quod.</p>
          <button type='button' 
          className='bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg
          hover:shadow-lg transition-all ease-in-out duration-100'>
          Order Now</button>
      </div>
      <div className='py-2 bg-blue-400 flex-1'></div>
    </div>
  )
}

export default MainContainer