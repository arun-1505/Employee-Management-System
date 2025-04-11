import React from 'react'

const CreateTask = () => {
  return (
    <div>
    <form className='flex w-full items-start bg-gray-800 justify-between mt-10' >
        <div className='w-1/2'>
        <h3>Task Title</h3>
        <input  type='text' placeholder='Give title'  className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/>

        <div>
        <h3>Date</h3>
        <input type="date" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
        </div>
        <div>
        <h3>Assign To</h3>
        <input type="text" placeholder='Employee name' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
        </div>
        <div>
        <h3>Category</h3>
        <input type="text" placeholder='web d,ios,android' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
        </div>
        </div>

        <div className='w-1/2'>
        <h3>Description</h3>
        <textarea  className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'  />

        <div >
       <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full' > Create Task</button>
       </div>
        </div>
        
       

    </form>
</div>
  )
}

export default CreateTask
