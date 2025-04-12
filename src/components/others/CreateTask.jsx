import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const CreateTask = () => {
  const [userData,setUserData]=useContext(AuthContext)

  const [taskTitle,settaskTitle]=useState('')
  const [taskDescription,settaskDescription]=useState('')
  const [taskDate,settaskDate]=useState('')
  const [assignTo,setAssignTo]=useState('')
  const [category,setCategory]=useState('')


  const [newtask,setNewTask]=useState({})

  
const submitHandler=(e)=>{
  e.preventDefault()

  setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})
 
     const data=userData
     console.log(data)
     

     data.forEach(function(elem){
      if(assignTo==elem.firstName){
        
        elem.tasks.push(newtask)
        elem.taskCounts.newTask=elem.taskCounts.newTask+1;
        
      } })

      setUserData(data)

     

      settaskTitle('')
      settaskDescription('')
      settaskDate('')
      setAssignTo('')
      setCategory('')


}


  return (
    <div>
    <form onSubmit={(e)=>{
      submitHandler(e)
    }} className='flex w-full items-start bg-gray-800 justify-between mt-10' >
        <div className='w-1/2'>
        <h3>Task Title</h3>
        <input 
        value={taskTitle}
         onChange={(e)=>{
          settaskTitle(e.target.value)
         }}
        
         
         type='text' placeholder='Give title'  className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/>

        <div>
        <h3>Date</h3>
        <input 
        value={taskDate}
        onChange={(e)=>{
         settaskDate(e.target.value)
        }}
        

        type="date" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
        </div>
        <div>
        <h3>Assign To</h3>
        <input 
        value={assignTo}
        onChange={(e)=>{
          setAssignTo(e.target.value)
        }}
        type="text" placeholder='Employee name' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
        </div>
        <div>
        <h3>Category</h3>
        <input
        value={category}
        onChange={(e)=>{
          setCategory(e.target.value)
        }}

         type="text" placeholder='web d,ios,android' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
        </div>
        </div>

        <div className='w-1/2'>
        <h3>Description</h3>
        <textarea 
        value={taskDescription}
        onChange={(e)=>{
          settaskDescription(e.target.value)
        }}
         className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'  />

        <div >
       <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full' > Create Task</button>
       </div>
        </div>
        
       

    </form>
</div>
  )
}

export default CreateTask
