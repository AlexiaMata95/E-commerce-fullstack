import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const FormUser = () => {
    const [userData, setData] = useState()
    const saveUser = async() =>{
        const url = 'http://localhost:4003/api/v1/register'
        const result = await axios.post(url, userData)
        console.log(result)
    }

    const handleChange = (e) =>{
        const {name, value} = e.target
        setData({
            ...userData,
            [name] : value
        })
        console.log(setData)
    }

  return (
    <>
    <h1 className='titleform'>¡Regístrate para obtener los mejores descuentos!</h1>
    <form action="" className='Form'>
        <label htmlFor="name">Nombre: </label>
        <input type="text" size={50} name='name' onChange={handleChange}/>
        <label htmlFor="lastname">Apellido: </label>
        <input type="text" size={50} name='lastname' onChange={handleChange}/>
        <label htmlFor="age">Edad: </label>
        <input type="number" size={50} name='age' onChange={handleChange}/>
        <label htmlFor="email">Correo: </label>
        <input type="text" size={50} name='email' onChange={handleChange}/>
        <label htmlFor="password">Contraseña: </label>
        <input type="text" size={50} name='password' onChange={handleChange}/>
        <button onClick={()=>saveUser()}>Regístrarme</button>
    </form>
    </>
  )
  }

export default FormUser