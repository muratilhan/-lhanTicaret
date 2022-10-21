import React from 'react'
import CategoryItem from '../cards/CategoryItem'
import data from '../DB/Data'
import '../styles/category.css'
function Category() {
  return (
    <div className='category-container'>
        {data.map(item=>{
            return (
                <CategoryItem item={item} />
            )
        })}
    </div>
  )
}

export default Category