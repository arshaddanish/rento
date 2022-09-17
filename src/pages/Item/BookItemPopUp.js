import React from 'react'
import './bookItemPopUp.scss'
import { TextField, Button } from '@mui/material'

const BookItemPopUp = ({trigger, setTrigger}) => {
  return(trigger)? (
    <div className='book-item-bg'>
        <div className="book-item-popup">
            <h1>Enter details</h1>
            <div className="book-item-popup-sub">
                <TextField type={"date"} label="Pick Up Date" variant="outlined" />
                <TextField type={"date"} label="Drop Off Date" variant="outlined" />
                <TextField type={"number"} label="Quantity" variant="outlined" />
            </div>
            <div className="book-item-popup-btns">
            <Button onClick={()=>setTrigger(false)} variant="outlined">Cancel</Button>
            <Button variant="contained">Book Item</Button>
            </div>
        </div>
    </div>
  ):null
}

export default BookItemPopUp