// import React from 'react'
// import "./login.scss"

// export default function Login() {
//   return (
//     <div className='login'>Login</div>
//   )
// }

import image from '../../images/login-img.png'
import logo from '../../images/logo.png'
import React from 'react'
import { Link,useNavigate } from "react-router-dom";
import './login.scss'


const Login = () => {

    const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  }
  return (
    <div className='main-login'>
        <div>
            <img src={image} alt="" />
        </div>
        <div>
            <div className='login'>
                <div>
                    <img className='logo' src={logo} alt="" />
                </div>
                <h1>Log In</h1>
                <p>or <Link to="/signup"><span className='link'>Create an account</span></Link></p>
                <form action="">
                    <input placeholder='Phone number' type="number" name="" id="" />
                    <input placeholder='Password' type="password" name="" id="" />
                    <button onClick={navigateToHome} type='submit'>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login