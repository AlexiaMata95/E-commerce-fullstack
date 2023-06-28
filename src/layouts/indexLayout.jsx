import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const indexLayout = ({ render }) => {
  return (
        <>
        <Navbar>
            <Container>
                <Nav className='me-auto'>
                    <Nav.link href='/'>Home</Nav.link>

                </Nav>
            </Container>
        </Navbar>
        {render}
        </>
  )
}

export default indexLayout