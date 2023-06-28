import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'

const GridItem = ({id, name,  price, description, image}) => {
  
  return (

    <Card style={{ width: '18rem', margin:'2rem'}}>
    <Card.Img variant="top" src={image} style={{padding: '1rem', width: 'auto', height: 'auto'}}/>
    <Card.Body>
      <Card.Title>{name.slice(0,39)}</Card.Title>
      <Card.Text>
        $ {price}.00 MXN
      </Card.Text>
      <Card.Text>
        Descripción: {description.slice(0,50)}
      </Card.Text>
      <div style={{display:'flex', alignContent:'space-around', flexWrap:'nowrap'}}>
      <Button variant="primary" onClick={()=>{addToCart()}}>Agregar al carrito</Button>
      <a href="/productind">Más información</a>
      
      </div>
    </Card.Body>
  </Card>
  )
}

export default GridItem