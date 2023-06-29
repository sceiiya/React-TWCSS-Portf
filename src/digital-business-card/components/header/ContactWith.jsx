import React from 'react'

const ContactWith = () => {
    return(
        <span className='flex p-2 m-1 text-center items-center justify-center text-white gap-3'>
        <a href='mailto:meetscheidj@gmail.com' target='__blank' className='p-2 w-1/2 bg-cyan-600 rounded-md'>
            <span>
                EMAIL
            </span>
        </a>

        <a href='https://www.linkedin.com/in/yesimscheidj' target='__blank' className='p-2 w-1/2 bg-cyan-600 rounded-md'>
                LINKEDIN
        </a>
        </span>
    )
}

export default ContactWith