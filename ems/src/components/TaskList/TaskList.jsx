import React from 'react'

function TaskList() {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-300 rounded-2xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-700 text-sm text-white px-3 py-1 rounded'>High</h3>
            <h4 className='text-black text-sm'>23 Feb 2025</h4>
        </div>
            <h2 className='mt-5 text-black text-xl font-semibold'>Make a MERN App </h2>
            <p className='mt-3 text-sm text-black'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae culpa pariatur iure!
            </p>
        </div>
       
    </div>
  )
}

export default TaskList