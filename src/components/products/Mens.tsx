import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from './Product'

export default function Mens(props: mensProps) {
    const mensProducts = []

    for (let i = 0; i < props.products.length; i++) {
        if (props.products[i].category === "men's clothing") {
            mensProducts.push(props.products[i])
        }
    }

    return (
        <div>
            <Row className='align-items-center'>
                <div className="sub-heading">
                    <h3>Mens</h3>
                </div>

                <Col xs={12} md={8} xl={8} className='all-products-display'>
                    {mensProducts.map((product: { id: number, title: string, image: string, price: number }) =>
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

interface mensProps {
    products: any[];
}