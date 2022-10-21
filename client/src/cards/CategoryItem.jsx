import React from 'react'
import '../styles/category.css'
import {Link} from "react-router-dom"
function CategoryItem({item}) {
  return (
    <div className='category-item'>
        <Link  className='category-link' to={`/products/${item.category}`}>
          <img src={item.img} alt="none" />
          <div className='category-info'>
              <span>{item.title}</span>
              <button>add</button>
          </div>
        </Link>
    </div>
  )
}

export default CategoryItem