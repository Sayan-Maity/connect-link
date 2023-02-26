import React from 'react'
import './Settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

const Settings = () => {
  return (
    <div className='settings'>
      <Sidebar/>
      <div className="settings-main">
        <h1>Settings</h1>
      </div>
    </div>
  )
}

export default Settings
