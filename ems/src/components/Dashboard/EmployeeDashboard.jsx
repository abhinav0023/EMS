import React from 'react'
import Header from '../Stuff/Header'
import TaskListNumbers from '../Stuff/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard() {
  return (
    
      <div className='p-10 bg-[#161828] h-screen   '>
        <Header />
        <TaskListNumbers  />   
        <TaskList />    
      </div>
  )
}

export default EmployeeDashboard