import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CollectionList from './CollectionList'
import Product from './Product'
import ProductWithSize from './ProductWithSize'

export default function Womens(props: womansProps) {
    const womansProducts = []

    for (let i = 0; i < props.products.length; i++) {
        if (props.products[i].category === "women's clothing") {
            womansProducts.push(props.products[i])
        }
    }

    return (
        <section>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7} >
                    <div className="sub-products-heading">
                        <h2>Womans</h2>
                        <div className="heading-line"></div>
                    </div>                </Col>
            </Row>
            <Row className='align-items-center'>
                <Col className='all-products-display'>
                    {womansProducts.map((product: { id: number, title: string, image: string, price: number }) =>
                        <ProductWithSize
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                        />
                    )}
                </Col>
            </Row>
        </section>
    )
}

interface womansProps {
    products: any[];
}