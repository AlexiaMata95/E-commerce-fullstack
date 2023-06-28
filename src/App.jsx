import './App.css'
import bannerprincipal from './assets/Home/bannerprincipal.png'
import bannerverano from './assets/Home/bannerverano.png'
import bannercatalogo from './assets/Home/bannercatalogo.png'
import UseFetch from './hooks/useFetch'
import { Carousel } from 'react-bootstrap'
import { useState } from 'react'
import Header from './components/header'


function App() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

  return (
    <>
    <Header />
    <div style={{height:'fit-content'}}>
    <Carousel variant='dark' activeIndex={index} onSelect={handleSelect} interval={null}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bannerprincipal}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{textAlign:'justify', fontFamily:'Niconne', fontSize:'2rem', fontWeight:'900', margin:'0 2rem'}}>En Schönheit, creemos en la belleza consciente. Nuestros productos de cosmética son 100% veganos y libres de crueldad animal. Nos comprometemos a ofrecerte opciones éticas sin comprometer tu estilo o calidad.</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bannerverano}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 style={{textAlign:'center', fontFamily:'Niconne', fontSize:'10rem', fontWeight:'400', color:'white',textShadow: '5px 5px #FE9882'}}>Colección verano</h1>
          <p style={{textAlign:'center', fontFamily:'Niconne', fontSize:'3rem', fontWeight:'400', color:'white',textShadow: '2px 2px #FE9882'}}>¡Inicia el verano con lo mejor de nuestros productos!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bannercatalogo}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{textDecoration:'none',  fontFamily:'Niconne', fontSize:'3rem', fontWeight:'400', color:'black',textShadow: '2px 2px #FE9882'}}>¿Listo para comprar? </h3>
          <a href="/productList" style={{textDecoration:'none',  fontFamily:'Niconne', fontSize:'3rem', fontWeight:'400', color:'black',textShadow: '2px 2px #FE9882'}}>Da click aquí</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}

export default App
