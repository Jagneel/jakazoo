import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CollectionList from './CollectionList'
import Product from './Product'

export default function Jewellery(props: jewelleryProps) {
    const jewelleryProducts = []

    for (let i = 0; i < props.products.length; i++) {
        if (props.products[i].category === "jewelery") {
            jewelleryProducts.push(props.products[i])
        }
    }

    return (
        <section>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7} >
                    <div className="sub-products-heading">
                        <h2>Jewerely</h2>
                        <div className="heading-line"></div>
                    </div>
                </Col>
            </Row>
            <Row className='align-items-center'>
                <Col className='all-products-display'>
                    {jewelleryProducts.map((product: { id: number, title: string, image: string, price: number }) =>
                        <Product
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

interface jewelleryProps {
    products: any[];
}
