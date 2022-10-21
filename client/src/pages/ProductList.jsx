import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../component/Footer';
import NewsLetter from '../component/NewsLetter';
import Products from '../component/Products'
import '../styles/productlist.css'
function ProductList() {

    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("")

    
    const handleFilters = (e) => {
        const value = e.target.value;
        
        setFilters({
            ...filters,[e.target.name]:value
        })
        
    } 
  return (
    <div className='productlist-container'>
        <div className='productlist-header'>
            <div className="productlist-filter">
                <span>Filter Products: </span>
                <select name="color" onChange={handleFilters}>
                    
                    <option value="red" name="" id="">red</option>
                    <option value="yellow" name="" id="">yellow</option>
                    <option value="blue" name="" id="">blue</option>
                    <option value="purple" name="" id="">purple</option>
                </select>
                
            </div>
            <div className="productlist-sort">
            <span>Sort Products: </span>
                <select onChange={e=>setSort(e.target.value)}>      
                    <option value="asc" >price(asc)</option>
                    <option value="decs" >price(dsc)</option>
                </select>
            </div>
        </div>
        <Products category={category} filters={filters} sort={sort} />
        <NewsLetter></NewsLetter>
        <Footer></Footer>
        
    </div>
  )
}

export default ProductList