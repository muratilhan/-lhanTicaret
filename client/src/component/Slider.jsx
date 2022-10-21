import React, { useContext } from 'react'
import karagol from '../pictures/karagol.jpg'
import {Button} from 'react-bootstrap'
import eskimardin from '../pictures/eski-mardin.jpg'
import limon from '../pictures/limonandpiya.jpg'
import Carousel from 'react-bootstrap/Carousel';
import { sliderItems } from '../DB/SliderItems'
import '../styles/slider.css'
import { Context } from '../App'

function Slider() {

  const context = useContext(Context)
  
  const handleClick = (product) => {
    const available = context.cart.find(item => item.title === product.title)
  
    if(!available){
      context.setCart([...context.cart, {...product, count:1}])
    }else{
    } 
  }


  return (
    <div className='slider-container'>
      <Carousel variant="dark">

        {sliderItems.map((item) => {
          return (
            <Carousel.Item >
              <div className='slider-item'>
                <img
                  className="d-block "
                  src={item.img}
                  alt="Third slide"
                />
                <div className='slider-info'>    
                  <h1> {item.title} </h1>
                  <p>
                    { item.desc }
                  </p>
                  <p>
                  Sadece <b>{ item.price }.00</b> TL
                  </p>
                  <Button onClick={()=>handleClick(item)} variant='warning'>Sepete Ekle</Button>
                </div>
              </div>
            </Carousel.Item>
          )
        })}
      
      
      </Carousel>
    </div>
  )
}

export default Slider