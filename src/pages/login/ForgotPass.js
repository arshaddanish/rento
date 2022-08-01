import React from 'react'
import logo from '../../images/logo.png'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './forgotPass.scss'

const ForgotPass = () => {
    return (
        <div className='forgot-pass'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div>
                <form action="">
                    <TextField style={{width: 400}} id="outlined-basic" label="Email" variant="outlined"  fullWidth required type="email"/>
                    <div>
                        <Button style={{width: 400}} type='submit' variant="contained">SUBMIT</Button>
                    </div>
                </form>
            </div>
        </div>
    ) 
}

export default ForgotPass