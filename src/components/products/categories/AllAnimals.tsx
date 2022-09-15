import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../Product/Product'
import BigCats from './BigCats'

export default function AllAnimals(props: propsAllAnimals) {
    return (
        <>
            <Row className='product-category-heading'>
                <h2>All Animals</h2>
                <hr></hr>
            </Row>
            {props.products.map((product => (
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

interface propsAllAnimals {
    products: any[];
    onAddToCart: (productId: string, quantity: number) => any
}