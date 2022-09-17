import React ,{ useState } from 'react'
import './profile1.scss'
import { Button } from '@mui/material'
import person from '../../../assets/images/profile/person.png'
import EditProfile from './EditProfile'

const Profile1 = () => {
    const [editProfile, setEditProfile] = useState(false);
  return (
    <div className='profile1-main'>
        <div className="profile1-sub">
            <div className="edit-pro-btn">
                <Button onClick={()=>setEditProfile(true)} variant="contained">Edit Profile</Button>
            </div>
            <div className="pro-img">
                <img className='pro-img-main' src={person} alt="" />
            </div>
            <div className="pro-details">
                <div className="pro-sub">
                    <div className="pro-bold">Name</div> <div>: Sidharth A</div>
                    <div className="pro-bold">Phone No.</div> <div>: 9876543210</div>
                    <div className="pro-bold">Email</div> <div>: sidharth@gmail.com</div>
                    <div className="pro-bold">Gender</div> <div>: Male</div>
                    <div className="pro-bold">Date of Birth</div> <div>: 15/09/2001</div>
                    <div className="pro-bold">Address</div> <div>: House Name, Locality, City-670604</div>
                </div>
            </div>
        </div>
        <EditProfile trigger={editProfile} setTrigger={setEditProfile} />
    </div>
  )
}

export default Profile1