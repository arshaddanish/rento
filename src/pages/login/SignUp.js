import React from 'react'

import { Link,useNavigate } from "react-router-dom";
import './SignUp.scss'
import handshake from '../../images/handshake.jpg'

const SignUp = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
  }
  
  return (
    <div>
      <div className='main-signup'>
        <div>
            <img src={handshake} alt="" />
        </div>
        <div className='login-main'>
            <div className='login'>  
                <h1>Lets get started</h1>
                <p>or <Link to="/login"><span className='link'>Login to your account</span></Link></p>
                <form action="">
                <input placeholder='Name' type="text" name="" id="" />
                    <input placeholder='Email' type="email" name="" id="" />
                    <input placeholder='Phone number' type="number" name="" id="" />
                    <input placeholder='House Name' type="text" name="" id="" />
                    <input placeholder='Locality' type="text" name="" id="" />
                    <input placeholder='City' type="text" name="" id="" />
                    <input placeholder='Pincode' type="number" name="" id="" />
                    <input placeholder='Date of Birth' type="date" name="" id="" />
                    <input placeholder='Password' type="password" name="" id="" />
                    <button onClick={navigateToHome} type='submit'>Create Account</button>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SignUp