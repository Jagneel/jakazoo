import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../Product/Product'

export default function BigCats(props: propsBigCats) {

    const bigCats = [];
    for (let i = 0; i < props.products.length; i++) {
        if (props.products[i].categories[0].slug === "big-cats") {
            bigCats.push(props.products[i])
        }
    }
    return (
        <>
            <Row className='product-category-heading'>
                <h2>Big Cats</h2>
                <hr></hr>
            </Row>
            {bigCats.map((product => (
                <Col key={product.id} xs={12} s={6} md={4} lg={4}>
                    <Product
                        id={product.id}
                        name={product.name}
                        image={product.image.url}
                        description={product.description}
                        price={product.price.formatted_with_symbol}
                        onAddToCart={props.onAddToCart}
                    />
                </Col>
            )))}
        </>
    )
}

interface propsBigCats {
    products: any[];
    onAddToCart: (productId: string, quantity: number) => any
}