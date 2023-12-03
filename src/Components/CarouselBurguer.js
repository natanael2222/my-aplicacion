import React from 'react'
import { Carousel } from 'react-bootstrap';


const CarouselBurguer = () => {
  return (
    <>
    
   <div className='contenedorCarousel'>

        <Carousel>
    <Carousel.Item className='estiloCarouselCont'>
      
         <img
        className="imagesBurguers"
        src="https://prior-client-images.s3.eu-west-2.amazonaws.com/burgermaker/a2035e864438e81e079002d8782c567b.png"
        alt="Cabra Bomba"
      />
      
    <Carousel.Caption >
    <div className='estiloCaption'>
    
    <h4>Cabra Bomba</h4>
        <p>Combo: papas fritas, guacamole y gaseosa</p>
    </div>
      
      </Carousel.Caption>      
    
    </Carousel.Item>
    <Carousel.Item>
   
      <img
        className="imagesBurguers"
        src="https://prior-client-images.s3.eu-west-2.amazonaws.com/burgermaker/e3c27f9f78a74c0aa95a85979516ed81.png"
        alt="Cabra Doble"
      />
      <Carousel.Caption >
      <div className='estiloCaption'>
           <h4>Cabra Doble Extra Chedar</h4>
        <p>Combo: papas fritas y gaseosa</p>
      </div>    
      
      </Carousel.Caption>
  
 
   
    </Carousel.Item>
    <Carousel.Item>
  
      <img
        className="imagesBurguers"
        src="https://prior-client-images.s3.eu-west-2.amazonaws.com/burgermaker/1e5ae71171f3065a839be04ae371619c.png"
        alt="Cabra Fondo"
      />
      <Carousel.Caption >
        <div className='estiloCaption'>
          <h4>Cabra Fondo</h4>
        <p>
        Combo: papas fritas y agua mineral
        </p>
        </div>
    
      </Carousel.Caption>
      
    </Carousel.Item>
    <Carousel.Item>
   
      <img
        className="imagesBurguers"
        src="https://prior-client-images.s3.eu-west-2.amazonaws.com/burgermaker/42b64213c5083d3424a4b620a2e22165.png"
        alt="Cabra Simple"
      />
      <Carousel.Caption >
      <div className='estiloCaption'> 
        <h4>Cabra Simple</h4>
        <p>Combo: papas rusticas y jugo de naranja</p>
      </div>
        </Carousel.Caption>
    
    </Carousel.Item>


    <Carousel.Item>
  
      <img
        className="imagesBurguers"
        src="https://theburgermaker.com/wp-content/uploads/2022/08/gabraloca.png"
        alt="Cabra Completa"
      />
      <Carousel.Caption >
        <div className='estiloCaption'>
            <h4>Cabra Completa</h4>
            <p>Combo: papas fritas y cerveza</p>
        </div>

      </Carousel.Caption>
    
    </Carousel.Item>


  </Carousel>
   </div>     
    </>


  
  )
}

export default CarouselBurguer
