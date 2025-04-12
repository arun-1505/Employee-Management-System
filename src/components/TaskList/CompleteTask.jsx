import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className=" flex-shrink-0 p-5 h-full w-[300px] bg-green-500 rounded-xl">
    <div className='flex  justify-between items-center' >
       <h3 className='bg-red-500 px-3 py-1 rounded text-sm' >{data.category}</h3>
       <h4>{data.taskDate}</h4>
    </div>
    <h2 className='mt-4 text-2xl font-semibold'>{data.taskTitle} </h2>
    <p className='text-sm mt-2'>{data.taskDescription} </p>
    <div className='mt-2'>
        <button className='w-full bg-slate-500'>Complete</button>
    </div>
</div>
  )
}

export default CompleteTask
