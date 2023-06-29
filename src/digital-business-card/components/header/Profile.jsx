import React from 'react'
import profilepic from '../../assets/images/profile.jpg'

const Profile = () => {
    return(
        <>
        <div className='p-3'>
            <img src={profilepic} alt="" className='rounded-md w-full' />
        </div>
        </>
    )
}

export default Profile