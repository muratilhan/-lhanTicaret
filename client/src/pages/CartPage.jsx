import React,{useContext, useEffect,useState} from 'react'
import '../styles/cart.css'
import axios from "axios"
import {Button} from 'react-bootstrap'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import StripeCheckout from "react-stripe-checkout"
import { Context } from '../App'


function CartPage() {

  const context = useContext(Context)
  const [disabled, setDisabled] = useState(false);


  const navigate = useNavigate();

  const KEY = "pk_test_51Lue4UJeRIWLAFYjGeyxYHrfoL98ltHaxok8wIkT9Mt7gLmeCd2u7bZ5sexMExEXLzBVb8B8KblLHCAwRFKFAXR800nNDYvoKx"
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  }
  
  /*
  const cart = useSelector(state => state.cart)
  useEffect(()=>{
    console.log(cart.products)
  },[cart])
*/
  useEffect(()=>{
    const makeRequest = async () => {
        const makeRequest = await axios.create({
        baseURL: "http://localhost:5000/api/checkout/payment",
        header: { token: `Bearer ${"asdas"}`},
      })
    }
  },[stripeToken])

  const handleRemove = (product) => {
    context.setCart(context.cart.filter(item => item.title !== product.title))
  }

  useEffect(()=>{
    context.setTotal(context.cart.reduce((toplam, item) => 
    (toplam = toplam + item.price*item.count)
    ,0).toFixed(0))
  },[context.cart])

  const handleClick = (type,product) => {
    if(type === "increase"){
      context.setTotal(prev => prev + product.price)
      context.setCart(context.cart.map(item => item.title === product.title ? {...item,count: item.count+1} : item))
    }else{
      if(product.count < 2){
        setDisabled(true)
      }else{
        context.setTotal(prev => prev - product.price)
        context.setCart(context.cart.map(item => item.title === product.title ? {...item,count: item.count-1} : item))
      }
      
    }
  }
 
  
  
  return (
    <div className='cartpage-container'>
      <h2 style={{margin:"2rem"}}>Your Bag</h2>
      <div className='cart-header-infos'>
          <Button onClick={()=>navigate("/")} style={{marginLeft:"5rem"}} variant='outline-success'>Alışverişe devam et</Button> 
      </div>

      <div className='cart-main'>
        <div className='cart-main-items'>
          {context.cart.map(product => (
            <div className='cart-main-item'>
            <img src={product.img} alt="none" />
            <div className='cart-item-info'>
              <span><b>Product:</b> {product.title} </span>
              <div className='cart-info'>
                <span><b>ID:</b> {product._id} </span>
                
                  
                  <div>
                    <span>Adet:</span>
                    <Button onClick={()=>handleClick("decrease",product)} variant='outline-dark' className='amountButton'><b>-</b></Button>
                    <span>{ product.count }</span>
                    <Button onClick={()=>handleClick("increase",product)} variant='outline-dark' className='amountButton'><b>+</b></Button>
                  </div>
                
              </div>
              <div className='cart-info'>
                <span><b>Renk: </b> {product.color} </span>
                <span style={{marginRight:"2rem"}}><b> {product.price} TL.</b></span>
                
              </div>
              <span><b>Size: </b> 
                  <select style={{padding:"0.5rem"}} name="" id="">
                      <option value="XL">XL</option>
                      <option value="L">L</option>
                      <option value="M">M</option>
                      <option value="S">S</option>
                  </select> </span>
              <span><Button onClick={() => handleRemove(product)} variant='outline-danger'>Ürünü Çıkart</Button></span>
             
            </div>
            </div>
            
          ))}
         
          
        </div>
        
        <div className='cart-main-summary'>
          <h2>Order Summary</h2>
          <div>
            <span>125TL.</span>
          </div>
          <div>
            <span><b>TOTAL: </b></span>
            <span> {context.total} TL.</span>
          </div>
          <StripeCheckout
              name="İLHAN TİCARET"
              image="https://logos.textgiraffe.com/logos/logo-name/Ilhan-designstyle-summer-m.png"
              billingAddress
              shippingAddress
              description={`Your total is ${context.total} TL.`}
              amount={context.total * 100}
              token={onToken}
              stripeKey={KEY}
              disabled={context.user ? false : true}
            >
              <Button  variant='dark'>Checkout Now</Button>
              
            </StripeCheckout>
            { !context.user && <div style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"red",width:"",color:"white",padding:"0.3rem",borderRadius:"10px"}}>You Have to Log in to pay!</div> }
          

        </div>
      </div>

    </div>
  )
}

export default CartPage