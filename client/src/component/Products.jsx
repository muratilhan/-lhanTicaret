import React,{useEffect,useState} from 'react'
import ItemProducts from '../DB/ItemProducts'
import axios from "axios"
import Product from '../cards/Product'
import '../styles/products.css'
function Products({category, filters, sort, size}) {
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

 

  useEffect(()=>{
    const getProducts = async () => {
      try{  
          const res = await axios.get(
            category ? `http://localhost:5000/api/products?category=${category}`
              : "http://localhost:5000/api/products"
          );
          setProducts(res.data)
          
          setFilteredProducts(res.data)
        }catch(err){
      }}
    getProducts();
    
  },[category])

   useEffect(()=>{
    category && setFilteredProducts(
      products.filter(item => {
        return Object.entries(filters).every(([key, value]) => item[key].includes(value))
      })
    )
   },[category, products, filters])

   useEffect(()=>{
    console.log(sort)
    if(sort === "newest"){
      setFilteredProducts(prev => [...prev].sort((a,b)=> a.createdAt - b.createdAt))
    }else if(sort === "asc"){
      setFilteredProducts(prev => [...prev].sort((a,b)=> a.price - b.price))
    }else{
      setFilteredProducts(prev => [...prev].sort((a,b)=> b.price - a.price))
    }

   },[sort])

  return (
    <div className='products-container'> 
        {filteredProducts.map(item => {
            return (
                <Product item={item} />
            )
        })}
    </div>
  )
}

export default Products