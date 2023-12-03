import React from 'react'

const ProductCards = ({img, title, price, children}) => {
  return (
    <div>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{price}</p>
        <div>{children}</div>
    </div>
  )
}

export default ProductCards