import React from 'react'

const Navigation = () => {
  return (
    <nav className='flex items-center py-6 px-16 justify-between gap-40 custom-nav'>
        <div className='flex items-center gap-6'>
            {/* logo */}
            <h2 className='text-3xl text-black font-bold gap-8' href='/'>DriveHub</h2>
        </div>
        <div className='flex flex-wrap items-center gap-10 flex-1'>
            {/* nav item */}
            <ul className='flex gap-14  text-gray-600 hover:text-black'>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/vehical'>Vehical</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul>
        </div>
        <div className='flex justify-center'>
            {/* search bar */}
            <div className='border rounded flex overflow-hidden'>
                <div className='flex items-center justify-center px-4 border-1'>
                <svg className='h-4 w-4 text-grey-dark' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                <input type='text' className='px-4 py-2 outline-none' placeholder='Search'/>
                </div>
            </div>
        </div>
        <div className='flex flex-wrap items-center gap-4'>
            {/* authentication */}
            <ul className='flex items-center gap-8 text-xl'>
                <li className='hover:text-white hover:bg-black bg-gray-200 px-4 py-2 rounded-lg border'><a href='/signup'>Signup</a></li>
                <li className='hover:text-white hover:bg-black bg-gray-200 px-4 py-2 rounded-lg border'><a href='/login'>Login</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation
