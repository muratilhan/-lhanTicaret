import React,{useState, useEffect, useContext} from 'react';
import axios from 'axios';
import '../styles/products.css'
import {Link} from "react-router-dom"
import { Context } from '../App';
  

function Product({item}) {

  const context = useContext(Context)


  const [quantity, setQuantity] = useState(1);

  
  const addCart = () => {
    const available = context.cart.find(product => product.title === item.title)
  
    if(!available){
      context.setCart([...context.cart, {...item}])
    }else{
    } 
    console.log(context.cart)
    


  }

  return (
    <div className='product-container'>
        <img src={item.img} alt="" />
        <div className='product-infos'>
            <div className='product-icon-container'>
                <i onClick={addCart} class="fa-solid fa-cart-shopping product-info"></i>
                <Link to={`/product/${item._id}`}><i class="fa-solid fa-magnifying-glass product-info"></i></Link>
            </div>

        </div>
    </div>
  )
}

export default Product