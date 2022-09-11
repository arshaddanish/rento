import React from 'react'
import './resetPass.scss'
import { Button, TextField, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'

const ResetPass = () => {
    const navigate = useNavigate();
    const navigateToLogIn = () =>{
        navigate('/login')
    }
    // const [passMatch, setPassMatch] = useState(true)
    return (
        <div className='reset-main'>
            <div className="reset-sub">
                <div className="brand">RENTO</div>
                <Stack spacing={2}>
                    
                    <TextField type={"password"} label="New password" required variant="outlined" />
                    <TextField type={"password"} label="Confirm new password" required variant="outlined" />
                    {
                        // passMatch? <p></p> :<p className='password-match'>* passwords does not match</p>
                    }
                    <Button 
                        onClick={navigateToLogIn} 
                        sx={{
                            padding: "13px", 
                            backgroundColor: "#17202d", 
                            "&:hover":{
                                backgroundColor: "#0F3D3E"
                            }
                        }} 
                        variant="contained"
                    >RESET PASSWORD</Button>
                </Stack>
                
            </div>
        </div>
    )
}

export default ResetPass