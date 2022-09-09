import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from './Product'

export default function Womens(props: womansProps) {
    const womansProducts = []

    for (let i = 0; i < props.products.length; i++) {
        if (props.products[i].category === "women's clothing") {
            womansProducts.push(props.products[i])
        }
    }

    return (
        <div>
            <Row className='align-items-center'>
                <Col xs={12} md={8} xl={8} className='all-products-display'>
                    <div className="sub-heading">
                        <h3>Womens</h3>
                    </div>
                    {womansProducts.map((product: { id: number, title: string, image: string, price: number }) =>
                        <Product
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                        />
                    )}
                </Col>
            </Row>
        </div>
    )
}

interface womansProps {
    products: any[];
}