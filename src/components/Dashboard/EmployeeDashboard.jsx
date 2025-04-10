import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-8 h-screen bg-[#1C1C1C]' >

        <Header/>
        <TaskListNumbers/>
        <TaskList/>
      
    </div>
  )
}

export default EmployeeDashboard
