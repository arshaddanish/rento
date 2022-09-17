import React from 'react'
import './chatSellerPopUp.scss'
import { Button, TextField } from '@mui/material'

const ChatSellerPopUp = ({trigger, setTrigger}) => {
  return(trigger)? (
    <div className='chat-seller-bg'>
        <div className="chat-seller-popup">
        <div className="chat-seller-popup-sub">
            <TextField rows={5} multiline fullWidth label="Message" variant="outlined" />
            <div className="chat-seller-popup-btns">
                <Button onClick={()=>setTrigger(false)} variant="outlined">Cancel</Button>
                <Button variant="contained">Send</Button>
            </div>
        </div>
        </div>

    </div>
  ):null
}

export default ChatSellerPopUp