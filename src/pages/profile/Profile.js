import React from 'react'
import './profile.scss'
import person from '../../assets/images/profile/person1.png'

const Profile = () => {
  return (
    <div className='profile-main'>
        <div className="profile-top">
            <div className='profile-img-div'>
                <img src={person} alt="" />
            </div>
            <div>
                <h1></h1>
            </div>
        </div>
    </div>
  )
}

export default Profile