import React from 'react'
import { Col } from 'react-bootstrap';
import Product from '../Product/Product';

export default function Ungulates(props: propsUngulates) {
    const ungulates = [];

    for (let i = 0; i < props.products.length; i++) {
        if (props.products[i].categories[0].slug === "ungulates") {
            ungulates.push(props.products[i])
        }
    }

    return (
        <>
            {ungulates.map((product => (
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

interface propsUngulates {
    products: any[];
    onAddToCart: (productId: string, quantity: number) => any
}