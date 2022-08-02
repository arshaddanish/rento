import React from 'react'
import AccountBottom from './AccountBottom'
import Profile from './Profile'
import './profile.scss'

const Account = () => {
  return (
    <div className='account-main'>
        <Profile />
        <AccountBottom />
    </div>
  )
}

export default Account