// Write your JS code here
import {Component} from 'react'

import {Cookies} from 'react'
import {Redirect} from 'react-router-dom'

import LogoutButton from '../LogoutButton'

import './index.css'

const Home = () => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="Home-container">
        <h1>Home Route</h1>
        <LogoutButton />
      </div>
    </>
  )
}
export default Home
