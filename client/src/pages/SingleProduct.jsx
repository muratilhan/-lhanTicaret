import React,{useState, useEffect, useContext} from 'react';
import '../styles/singleproduct.css'
import {Link,useLocation} from "react-router-dom"
/*import {useDispatch} from "react-redux"
import { addProduct } from "../redux/cartRedux";*/
import axios from 'axios';
import {Button} from 'react-bootstrap'
import { Context } from '../App';

function SingleProduct() {


  const context = useContext(Context)


  const location = useLocation();
  const id = location.pathname.split("/")[2]
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [color, setColor] = useState("");
 

  //const dispatch = useDispatch();

  useEffect(()=>{
    const getProduct = async () => {
      try{
        const res = await axios.get("http://localhost:5000/api/products/find/"+id)
        setProduct(res.data)
      }catch(err){
        console.log(err)
      }
    }
    
    getProduct();
  },[id])

  useEffect(()=>{
    if(quantity < 2){
      setDisabled(true);
    }else{
      setDisabled(false)
    }
  },[quantity])


  
  const handleClick = () => {
    //dispatch(addProduct({...product, quantity, color, size}))

    const available = context.cart.find(item => item.title === product.title)
  
    if(!available){
      context.setCart([...context.cart, {...product, count:1}])
    }else{
      //context.setCart(context.cart.map(item => item.title === product.title ? {...item,count: item.count+1} : item))
    } 
    console.log(context.cart)
    



  }
  useEffect(()=>{
    setColor(product.color)
  },[product])

  

  return (
    <div className='single-product-container'>
        <div className="single-product-img">
            <img src={product.img} alt="none" />
        </div>
        <div className="single-product-infos">
            <h2> {product.title} </h2>
            <p> {product.description} </p>
            <span style={{fontSize:"24px"}}><b> {product.price} TL. </b></span>
            <div className='product-item-mid'>
                <span><b>Renk:</b> {product.color} </span>
                
                  <div>
                  <span><b>Boyut: </b></span>
                  <select name="" id="">
                      <option value="XL">XL</option>
                      <option value="L">L</option>
                      <option value="M">M</option>
                      <option value="S">S</option>
                  </select>
                  </div>
                </div>
            <div className='single-product-footer'>
                <div className='single-product-footer-buttons'>
                    <Button onClick={handleClick} variant="outline-success">Sepete Ekle</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct