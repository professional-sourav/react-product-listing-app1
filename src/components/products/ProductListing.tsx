import { fetchProducts } from '../../services/ProductService'
import type { Products } from '../../types'
import SingleProduct from './SingleProduct'
import { FixedSizeList as List } from 'react-window'
import { useQuery } from '@tanstack/react-query'
import AutoSizer from 'react-virtualized-auto-sizer';

const initialProducts: Products = {
    products: [],
    total: 0,
    skip: 0,
    limit: 0
}

const ProductListing = () => {
    

    const {isPending, error, data} = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
        initialData: initialProducts,
    })

    if (isPending) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error loading products: {error.message}</p>
    }

    const products = data as Products

  return (
    <>
      <h2>Product Listing</h2>
      <div style={{ height: '100vh', width: '100%' }}>
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              itemCount={products.products.length}
              itemSize={150}
              width={width}
            >
              {({ index, style }) => (
                <div style={style}>
                  <SingleProduct product={products.products[index]} />
                </div>
              )}
            </List>
          )}
        </AutoSizer>
      </div>
      <p>Total Products: {products.total}</p>
    </>
  )
}

export default ProductListing
