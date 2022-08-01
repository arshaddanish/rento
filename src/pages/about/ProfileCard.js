import React from 'react'
import './profileCard.scss'


const ProfileCard = ({img,name}) => {
  return (
    <div className="profile-card">
        <div className='profile-img'>
            <img src={img} alt="" />
            <h2>{name}</h2>
        </div>
    </div>
  )
}

export default ProfileCard