import React, { useContext } from 'react'
import Header from '../components/header'
import { LoginContext } from '../context/LoginContext'

const Profile = () => {
  const { loginUser } = useContext(LoginContext)
  console.log(loginUser)
  return (
    <>
    <Header/>
    <div>Bienvenido a tu perfil!</div>
    </>
    
    
  )
}

export default Profile