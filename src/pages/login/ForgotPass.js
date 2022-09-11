import React from 'react'
// import logo from '../../images/logo.png'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './forgotPass.scss'
import { useNavigate } from 'react-router-dom';

const ForgotPass = () => {
    const navigate = useNavigate();
    const navigateToSignUp=()=>{
        navigate('/signup')
    }
    const navigateToLogin=()=>{
        navigate('/login')
    }
    return (
        <div className='forgot-pass'>
            <div className="forgot-pass-main">
                <div className="forgot-pass-sub">
                    <div className='logo'>
                        {/* <img src={logo} alt="" /> */}
                        <div className="forgot-lock-img">
                
                            <i className="fa-solid fa-lock"></i>
                        </div>
                
                    </div>
                    <div className='forgot-input'>
                
                    <h3 className='forgot-heading'>Trouble Logging In?</h3>
                    <p className='forgot-desc'>Enter your email and we'll send you a link to reset your password.</p>
                    {/* <p className='back-to-login'>Back to Login</p> */}
                        <form action="">
                            <TextField autoComplete='off' fullWidth id="outlined-basic" label="Email" variant="outlined" required type="email"/>
                            <div className='forgot-submit-btn'>
                                <Button fullWidth type='submit' variant="contained">GET RESET LINK</Button>
                            </div>
                        </form>
                        <p className='forgot-or'>OR</p>
                        <p onClick={navigateToSignUp} className='forgot-create'>Create New Account</p>
                    </div>
                </div>
                <Button 
                className='forgot-back-to-login-btn'
                    sx={{
                        backgroundColor: "#eeeeee", 
                        color: "#707070",
                        borderTop: "1px solid #d2d0d0",
                        '&:hover': {
                            backgroundColor: '#eeeeee',
                            color: '#000',
                        },
                    }} 
                    onClick={navigateToLogin}
                    fullWidth 
                    variant="contained">
                    Back to login</Button>
            </div>
        </div>
    ) 
}

export default ForgotPass