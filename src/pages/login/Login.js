import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import image from '../../images/login1.png'
import logo from '../../images/logo.png'
import React from 'react'
import { Link,useNavigate } from "react-router-dom";
import './login.scss'


const Login = () => {

    const navigate = useNavigate();

    const navigateToAccount = () => {
        navigate('/account');
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
                
                    <TextField fullWidth
                    // id="outlined-basic1" 
                    label="Phone Number" 
                    type={"number"}
                    variant="outlined" />
                    <div className="gap"></div>
                <TextField 
                    fullWidth 
                    // id="outlined-basic" 
                    label="Password" 
                    type={"password"}
                    variant="outlined" />
                    {/* <input placeholder='Phone number' type="number" name="" id="" />
                    <input placeholder='Password' type="password" name="" id="" /> */}
                    <Link to="/forgot" className='forgot-pass-btn'>Forgot password?</Link>
                    <Button onClick={navigateToAccount} variant="contained">Login</Button>
                    {/* <button onClick={navigateToAccount} type='submit'>Login</button> */}
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default Login