import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex justify-between mt-10 gap-5 screen '>
        <div className=' w-[45%] bg-red-600 py-6 px-8 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-semibold'>New Task</h3>
        </div>


        <div className=' w-[45%] bg-blue-500 py-6 px-8 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-semibold'>Completed Task</h3>
        </div>


        <div className=' w-[45%] bg-green-500 py-6 px-8 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-semibold'>Active Task</h3>
        </div>

        <div className=' w-[45%] bg-yellow-400 py-6 px-8 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-semibold'>failed</h3>
        </div>




    
      
    </div>
  )
}

export default TaskListNumbers
