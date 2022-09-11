import  React from 'react'
import './editProfile.scss'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FormLabel } from '@mui/material';
// import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'


function EditProfile({trigger,setTrigger}) {

    return (trigger) ? (
        <div className='edit-profile-popup-main'>
            <div className="edit-profile-popup">
                <div onClick={()=>setTrigger(false)} className="edit-profile-popup-close-btn">
                    <i className="fa-solid fa-xmark"></i>
                </div>                
                
                <div className="edit-profile-form">
          <form  >
            <h1>Edit Profile</h1>
            <div className="edit-profile-sub">
                <TextField fullWidth
                        label="Name"
                        type={"text"}
                        variant="outlined"
                    />
                    <TextField fullWidth
                        label="Email"
                        type={"email"}
                        variant="outlined"
                    />
                    <TextField fullWidth
                        label="Phone Number"
                        type={"number"}
                        variant="outlined"
                    />
                    <TextField fullWidth
                        label="House Name"
                        type={"text"}
                        variant="outlined"
                    />
                    <TextField fullWidth
                        label="Locality"
                        type={"text"}
                        variant="outlined"
                    />
                    <TextField fullWidth
                        label="City"
                        type={"text"}
                        variant="outlined"
                    />
                    <TextField fullWidth
                        label="Pincode"
                        type={"number"}
                        variant="outlined"
                    />
                    <TextField
                        name="someDate"
                        label="Date of Birth"
                        InputLabelProps={{ shrink: true, required: true }}
                        type="date"
                    />
                        <div className='edit-profile-change-pro-pic'>
                            <FormLabel> Change Profile Photo</FormLabel>
                            <TextField
                                variant="outlined"
                                Label= "Change Profile Photo"
                                type={"file"}
                            >
                            </TextField>
                        </div>
                        <div></div>
                    
            </div>
            <Box display="flex"  justifyContent="center" mt={3}>
                        <Button     
                            type={'submit'} 
                            variant="contained">SAVE CHANGES
                        </Button>
                    </Box>
            </form>

        </div>
            </div>
        </div>
    ) : null;
}

export default EditProfile 