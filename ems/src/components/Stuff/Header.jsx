import React from 'react'

function Header() {
  return (
    <div className='flex items-end justify-between mb-4'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Abhinav👋</span> </h1>
        <button className='bg-red-600 text-white px-5 py-2 rounded-sm'>log out</button>
    </div>
  )
}

export default Header