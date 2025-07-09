import React, { useState, useEffect } from 'react'
import { fetchProducts } from '../../services/ProductService'
import type { Product, Products } from '../../types'
import SingleProduct from './SingleProduct'
import { FixedSizeList as List } from 'react-window'

const initialProducts: Products = {
    products: [],
    total: 0,
    skip: 0,
    limit: 0
}

const ProductListing = () => {

    const [products, setProducts] = useState<Products>(initialProducts)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {

        setLoading(true)

        fetchProducts()
            .then((data: Products) => {
                setProducts(data)
            })
            .catch((error) => {
                console.error('Error fetching products:', error)
            }).finally(() => {
                setLoading(false)
            })

    }, [])

  return (
    <div>
      <h2>Product Listing</h2>
      {loading && <p>Loading products...</p>}
      {products.products.length > 0 ? (
        <List
        height={400}
        itemCount={products.total}
        itemSize={products.total + 130}
        width={600}>
            {({ index, style }) => {
                const product: Product = products.products[index % products.limit]
                return (
                <div style={style}>
                    <SingleProduct product={product} />
                </div>
                )
            }}
        </List>
      ) : (
        !loading && <p>No products found.</p>
      )}
    </div>
  )
}

export default ProductListing
