import React from 'react'
import UseFetch from '../hooks/useFetch'
import { Row, Container, Col } from 'react-bootstrap'
import GridItem from './GridItem'

const Grid = () => {
    const [data, loading, error] = UseFetch()


  return (
    <Container>
        <Row>
            {   
                data &&
                data.map((item, i) => (
                    <Col key={i}>
                        <GridItem id={item.id} name={item.name} price={item.price} image={item.image} description={item.description}/>
                    </Col>
                ))
            }
        </Row>
    </Container>
    
  )
}

export default Grid