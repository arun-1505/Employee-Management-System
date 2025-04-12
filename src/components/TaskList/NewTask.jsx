import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className=" flex-shrink-0 p-5 h-full w-[300px] bg-blue-400 rounded-xl">
             <div className='flex  justify-between items-center' >
                <h3 className='bg-red-500 px-3 py-1 rounded text-sm' >{data.category}</h3>
                <h4>{data.taskDate}</h4>
             </div>
             <h2 className='mt-4 text-2xl font-semibold'>{data.taskTitle} </h2>
             <p className='text-sm mt-2'> {data.taskDescription} </p>
             <div className='mt-4'>
                <button className='bg-blue-500 px-2 py-1 text-sm'>Accept Task</button>
             </div>
        </div>
  )
}

export default NewTask
