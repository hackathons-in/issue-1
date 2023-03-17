import React from 'react'
import Body from './components/Body'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Team from './components/Team'
import Contact from './components/Contact'
import Designer from './components/Designer'
// import LoginANDSignup from './components/LoginANDSignup/LoginANDSignup'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Designer/>
      <Body/>
      <Team/>
      <Contact/>
      <Footer/>
      {/* <LoginANDSignup/> */}
    </div>
  )
}

export default App;