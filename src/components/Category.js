import React from 'react'

const Category = ({onClick,category, imageUrl,color,isSelected}) => {

  return (
    <>
      <div className={`category ${color} ${isSelected ? 'selected' : ''}`}  onClick={onClick}>
      <div className='categoryName'><span>{category}</span></div>
       <div className='image'><img src={imageUrl} alt={category}/></div>
      </div>
    </>
  )
}

export default Category