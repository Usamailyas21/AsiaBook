import React from 'react'
import Delievery from '../img/delivery.png'
import HeroBG from '../img/heroBg.png'
import { heroData } from '../utils/Data'
const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
    <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
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
        <p className='text-[2.5rem] lg:text-[3.5rem] font-bold tracking-wide text-headingColor'>
        Hello Welcome to
        <span className='text-orange-600 text-[3rem] lg:text-[3.5rem]'> Asia Book Depot Kamoke</span></p>

        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos reprehenderit veritatis dolore assumenda quaerat cupiditate ut possimus necessitatibus ipsam! Blanditiis, delectus! Animi sunt dolorem rerum quasi ex laborum, sequi quod.</p>
        <button type='button' 
        className='bg-gradient-to-br from-orange-400 to-orange-500 md:w-auto w-full px-4 py-2 rounded-lg
        hover:shadow-lg transition-all ease-in-out duration-100'>
        Order Now</button>
    </div>
    <div className='py-2 flex-1 flex items-center relative'>
        <img src={HeroBG} className='ml-auto h-575' alt="hero-bg" />
        <div className='w-full h-full top-0 left-0 absolute flex  items-center justify-center py-4 gap-2 flex-wrap'>
          {heroData && heroData.map(n=>(
              <div key={n.id} className=' lg:w-190 p-2 bg-cardOverlay backdrop:blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                <img src={n.imgSrc} className='w-20 lgw-40 mt-10 lg:-mt-20 p-2 rounded-2xl' alt="" />
                    <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{n.name}</p>
                    <p className='text-[12px] lg:text-sm text-gray-500 my-1 font-semibold lg:my-3'>{n.decp}</p>
              </div>
          ))
          }
          
        </div> 
    </div>
  </section>
  )
}

export default HomeContainer