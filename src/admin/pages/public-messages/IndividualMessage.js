import React,{useState} from 'react'
import './publicMessages.scss'
import { Paper } from '@mui/material'

const IndividualMessage = ({event}) => {
    const [readMore, setReadMore] = useState(false)
    const toggleBtn=()=>{
      setReadMore(prevState => !prevState)
    }
  return (
    <div>
        <Paper key={event.id} elevation={1} className="paper">
            <div>
              <div className="sender-details">
                {/* {event.name}{event.phone}{event.email}{event.subject}  */}
                <div><span className='message-bold'>Name: </span>{event.name}</div>
                <div><span className='message-bold'>Phone No: </span>{event.phone}</div>
                <div><span className='message-bold'>Email: </span>{event.email}</div>
                <div><h3 className='msg-subject'>{event.subject}</h3></div>
              </div>
              {
                readMore? event.message: event.message.substring(0,300)
              }
              <button className='read-more-btn' onClick={toggleBtn}>{readMore?'Read Less':'...Read More'}</button>
            </div>
          </Paper>
    </div>
  )
}

export default IndividualMessage