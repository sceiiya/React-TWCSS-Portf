import React from 'react'
import Profile from './components/Profile'
import Name from './components/Name'
import Profession from './components/Profession'
import ContactWith from './components/ContactWith'
import ConnectWith from './components/ConnectWith'
import AboutMe from './components/AboutMe'
import Interests from './components/Interests'

//profile pic
//Name
//Peofession
//connect with
//socials email and linked
//about me
//Interests
//socials twt, fb, ig, git


function App1() {

  return (
    <>
      <section className='w-full bg-gray-950 m-0 top-0'>
        <div className='m-4 bg-black'>
          <Profile />
          <Name />
          <Profession />
          <ContactWith />
          <AboutMe />
          <Interests />
          <ConnectWith />
        </div>
      </section>
    </>
  )
}

export default App1
