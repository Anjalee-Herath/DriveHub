import React from 'react'
import HeroImg from '../../assets/img/pexels-lynxexotics-3802510.jpg'

const HeroSection = () => {
  return (
    <div className='relative flex items-center bg-cover bg-center h-screen w-full'
    style={{ backgroundImage: `url(${HeroImg})` }}>
      <div className='absolute top-0 right-0 bottom-0 left-0'>

      </div>
      <main className="relative px-10 lg:px-24 z-2 text-white text-center">
        <h2 className="text-4xl sm:text-6xl font-bold">Welcome to DriveHub</h2>
        <p className="mt-4 text-lg sm:text-xl font-semibold">
          Your ultimate destination for vehicles and services.
        </p>
        <button className='border rounded border-1 border-black text-white bg-slate-700 hover:bg-slate-400 font-extrabold w-44 h-12 mt-6'>
            Join Us
        </button>
      </main>
    </div>
  )
}

export default HeroSection
