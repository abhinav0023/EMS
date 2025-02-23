import React from 'react'

function Header() {
  return (
    <div className='flex items-end justify-between'>
        <h1>Hello <br /> Abhinav👋 </h1>
        <button>login</button>
        <button>logout</button>
    </div>
  )
}

export default Header