import React from 'react'
import type { Product } from '../../types'

interface SingleProductProps {
  product: Product;
}

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
  return (
    <div key={product.id} className="product-item">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>    
    </div>
  )
}

export default SingleProduct