import React, { useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'

const LoginUser = () => {
    const {loginUser, setLoginUser} = useContext(LoginContext)
     const url = 'http://localhost:4003/api/v1/auth/login'
     const url2 = 'http://localhost:4003/api/v1/users/me'
     const navigation = useNavigate()

     const handleSubmit = async() => {
        console.log(loginUser)
        axios.post(url, loginUser)
        .then( res =>{
            console.log(res.data)
            return (
                axios.get( url2, {
                    headers: {
                        'Access-Control-Allow-Origin' : '*',
                        Authorization: `Bearer ${res.data.token}`
                    }
                }).then(response =>{
                    console.log('segundo paso')
                    console.log(response.data)
                    navigation('/profile')
                })
            )
        })
     }
     const handleChange = (e) =>{
        const {name, value} = e.target
        setLoginUser({
            ...loginUser,
            [name] : value
        })
        console.log(loginUser)
     }

  return (
    <>
    <h1 className='titleform'>¡Nos alegra tenerte de vuelta!</h1>
        <form name='form' onSubmit={(e) => {e.preventDefault()}} className='Form'>
            <label htmlFor="email">Correo: </label>
            <input type="text" size={50} name='email' onChange={handleChange}/>
            <label htmlFor="password">Contraseña: </label>
            <input type="text" size={50} name='password' onChange={handleChange}/>
            <button onClick={() => handleSubmit()}>Iniciar sesión</button>
        </form>
    </>
  )
}

export default LoginUser