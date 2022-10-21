import React from 'react'
import Slider from '../component/Slider'
import Category from '../component/Category'
import Footer from '../component/Footer'
import NewsLetter from '../component/NewsLetter'
import Products from '../component/Products'
import '../styles/App.css'
function Home() {
  return (
    <div className='home'>
       <Slider></Slider>
       <Category></Category>
       <NewsLetter></NewsLetter>
       <Footer></Footer>
    </div>
  )
}

export default Home