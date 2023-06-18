import React from 'react'
import profilepic from '../assets/images/profile.jpg'

const Profile = () => {
    return(
        <>
        <div className='p-3'>
            <img src={profilepic} alt="" width={'100%'} className='rounded-md' />
        </div>
        </>
    )
}

export default Profile