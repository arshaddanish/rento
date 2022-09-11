import React, {useState} from 'react'
import './profile.scss'
import person from '../../assets/images/profile/person1.png'
import { useNavigate } from "react-router-dom";
import EditProfile from './EditProfile';
const Account = () => {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }
    const [editProfilePopup, setEditProfilePopup] = useState(false);
  return (
    // <div className='profile-main'>
    //     <div className="profile-top">
    //         <div className='profile-img-div'>
    //             <img src={person} alt="" />
    //         </div>
    //         <div>
    //             <h1></h1>
    //         </div>
    //     </div>
    // </div>
    <div className='profile'>
            <div className="profileSection">
                <div>
                    <img className='propic' src={person} alt="" />
                </div>
                <div>
                    <div className='profile-subheading'>
                        <p className="profile-name">Bruce Wayne</p>
                        <button onClick={navigateToLogin} className='logout'><i className="fa-solid fa-right-from-bracket"></i> Logout</button>
                    </div>
                    <div className='profile-subheading'>
                        <p className="profile-location"><i className="fa-solid fa-location-dot"></i> Location</p>
                        <p className="profile-mobile"><i className="fa-solid fa-mobile"></i> 9564213545</p>
                        
                    </div>
                    <p>Subscription Status:  <span className="subscription-active">Active</span></p>
                </div>
                <div className='edit-profile-btn'>
                    <button onClick={()=>setEditProfilePopup(true)} ><i className="fa-solid fa-pencil"></i> Edit Profile</button>
                </div>
            </div>
            <EditProfile trigger={editProfilePopup} setTrigger={setEditProfilePopup} />
        </div>
  )
}

export default Account