import type { Product } from '../../types'

interface SingleProductProps {
    product: Product
}

const SingleProduct = ({ product }: SingleProductProps) => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
        }}>
            <h3 style={{
                margin: '0 0 8px 0',
                fontSize: '16px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            }}>
                {product.title}
            </h3>
            
            <p style={{
                margin: '0 0 8px 0',
                fontSize: '14px',
                color: '#666',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                lineHeight: '1.4'
            }}>
                {product.description}
            </p>
            
            <div style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#333',
                marginTop: 'auto'
            }}>
                ${product.price}
            </div>
        </div>
    )
}

export default SingleProduct