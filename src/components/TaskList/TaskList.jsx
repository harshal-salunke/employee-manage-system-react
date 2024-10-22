import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='flex overflow-x-auto  items-center justify-start gap-5 flex-nowrap h-[55%] w-full py-5 '>
        <div className='h-full flex-shrink-0 w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1'>High</h3>
                <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod soluta repudiandae, saepe esse dolorem distinctio odio recusandae assumenda 
            </p>
        </div>
        <div className='h-full flex-shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1'>High</h3>
                <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod soluta repudiandae, saepe esse dolorem distinctio odio recusandae assumenda 
            </p>
        </div>
        <div className='h-full flex-shrink-0 w-[300px] p-5 bg-orange-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1'>High</h3>
                <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod soluta repudiandae, saepe esse dolorem distinctio odio recusandae assumenda 
            </p>
        </div>
        <div className='h-full flex-shrink-0 w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1'>High</h3>
                <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod soluta repudiandae, saepe esse dolorem distinctio odio recusandae assumenda 
            </p>
        </div>
        
    </div>
  )
}

export default TaskList