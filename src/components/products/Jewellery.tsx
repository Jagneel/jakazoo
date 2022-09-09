import React from 'react'
import { Col } from 'react-bootstrap'
import Product from './Product'

export default function Jewellery(props: jewelleryProps) {
    const jewelleryProducts = []

    for (let i = 0; i < props.products.length; i++) {
        if (props.products[i].category === "jewelery") {
            jewelleryProducts.push(props.products[i])
        }
    }

    return (
        <div>
            <Col xs={12} md={8} xl={8} className='all-products-display'>
                <div className="sub-heading">
                    <h3>Jewrely</h3>
                </div>
                {jewelleryProducts.map((product: { id: number, title: string, image: string, price: number }) =>
                    <Product
                        id={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                    />
                )}
            </Col>
        </div>
    )
}

interface jewelleryProps {
    products: any[];
}
