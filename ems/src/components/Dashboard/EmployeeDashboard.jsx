import React from 'react'
import Header from '../Stuff/Header'
import TaskListNumbers from '../Stuff/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard() {
  return (
    
      <div className='p-10 bg-[#1C1C1C] h-screen   '>
        <Header />
        <TaskListNumbers  />   
        <TaskList />    
      </div>
  )
}

export default EmployeeDashboard