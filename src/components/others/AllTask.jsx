import React, { useContext } from 'react'
import { AuthContext } from './../../context/AuthProvider';

const AllTask = () => {

    const [userData,setUserData]=useContext(AuthContext)

    

  return (
    <div className='bg-[#1c1c1c] p-5 mt-10 rounded  '>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h3 className='w-1/5 font-bold bg-red-800'>Employee Name </h3>
            <h4 className='w-1/5 font-bold bg-red-800'> New Task</h4>
            <h5 className='w-1/5 font-bold bg-red-800'>Active Task</h5>
            <h5 className='w-1/5 font-bold bg-red-800'>Completed Task</h5>
            <h5 className='w-1/5 font-bold bg-red-800'>Failed Task</h5>
        </div>

     <div className=''>
     {userData.map(function(elem,idx){
           return <div key={idx} className='border-2 border-green-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h3 className='w-1/5 font-bold'>{elem.firstName} </h3>
            <h4 className='w-1/5 text-blue-300 font-bold'>{elem.taskCounts.newTask}</h4>
            <h5 className='w-1/5 text-yellow-800 font-bold'>{elem.taskCounts.active}</h5>
            <h5 className='w-1/5 text-green-800 font-bold'>{elem.taskCounts.completed}</h5>
            <h5 className='w-1/5 text-red-800 font-bold'>{elem.taskCounts.failed}</h5>
        </div>
 font-bold
        })}
     </div>
       
    </div>
  )
}

export default AllTask
