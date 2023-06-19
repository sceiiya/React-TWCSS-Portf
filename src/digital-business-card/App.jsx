import React from 'react'
import CardHeader from './components/CardHeader'
import CardBody from './components/CardBody'
import ConnectWith from './components/ConnectWith'

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
      <section className='w-full bg-cyan-900 m-0 top-0'>
        <div className='m-4 bg-cyan-600'>
          <CardHeader />
          <CardBody />
          <ConnectWith />
        </div>
      </section>
    </>
  )
}

export default App1
