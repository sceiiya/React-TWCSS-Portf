import React from 'react'
import Facebook from '../assets/icons/Facebook'
import Twitter from '../assets/icons/Twitter'
import LinkedIn from '../assets/icons/linkedin'
import Github from '../assets/icons/Github'

const ConnectWith = () => {
    return(
        <>
            <div className='bg-slate-300 w-full h-20 flex ps-[50%]'>
                <a href="https://www.facebook.com/scheidj.artist" className='w-1/4' target='__blank'>
                    <Facebook className="fill-stone-800 w-full h-full" />
                </a>
                <a href="https://www.twitter.com/yesimscheidj" className='w-1/4' target='__blank'>
                    <Twitter className="fill-stone-800 w-full h-full" />
                </a>
                <a href="https://www.linkedin.com/in/yesimscheidj" className='w-1/4' target='__blank'>
                    <LinkedIn className="fill-stone-800 w-full h-full" />
                </a>
                <a href="https://github.com/sceiiya" className='w-1/4' target='__blank'>
                    <Github className="fill-stone-800 w-full h-full" />
                </a>
            </div>
        </>
    )
}

export default ConnectWith