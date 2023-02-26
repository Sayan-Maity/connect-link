import React from 'react'
import './Dashboard.css'
import Sidebar from '../../components/sidebar/Sidebar'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar/>
      <div className="dashboard-main">
        <h1>Dashboard</h1>
      </div>
        
      
    </div>
  )
}

export default Dashboard
