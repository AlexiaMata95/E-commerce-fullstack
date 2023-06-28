import React from 'react'
import Carrito from '../assets/carrito.png'
import logo from '../assets/Home/Schönheit/4.png'
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

const header = ({user}) => {
  
  return (
    
    <div className='App-header'>
        <div className='usersLogReg'>
          {user ? 
          <a href="/profile">Hola {user.name}</a>
          : <><a href="/login">Iniciar sesión</a>
              <a href="/register">Registro</a></>}
        </div>
        <div className="logo">          
        <a href="/"><img src={logo} alt=""/></a>
        </div>
        <div className='carrito'>
        <Stack direction="horizontal" gap={2}>
        <a href="/carrito"><img src={Carrito} alt="" /></a><Badge pill bg="success" className='cart-count'>0</Badge>
        </Stack>
        </div>
    </div>
    
  )
}

export default header