import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//profile pic
//Name
//Peofession
//connect with
//socials email and linked
//about me
//Interests
//socials twt, fb, ig, git


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile />
      <Name />
      <Profession />
      <ContactWith />
      <AboutMe />
      <Interests />
      <ConnectWith />
    </>
  )
}

export default App
