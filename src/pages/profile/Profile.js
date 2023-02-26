import React from 'react'
import './Profile.css'
import Sidebar from '../../components/sidebar/Sidebar'

const Profile = () => {
  return (
    <div className='profile'>
      <Sidebar/>
      <div className="profile-main">
        <h1>Profile</h1>
      </div>
      
    </div>
  )
}

export default Profile
