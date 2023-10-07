// Write your JS code here
import {Cookies} from 'js-cookie'

import {Redirect} from 'react-router-dom'

import Header from '../Header'

import LogoutButton from '../LogoutButton'

import './index.css'

const About = () => {
  return (
    <>
      <Header />
      <h1>About Route</h1>
      <LogoutButton />
    </>
  )
}
export default About
