import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Electronics from './Electronics';
import Jewellery from './Jewellery';
import Mens from './Mens';
import Womens from './Womens';

export default function ProductList(props: allProductsProps) {

    return (
        <>
            <Col className='all-products-display'>
                <Mens products={props.products} />
                <Womens products={props.products} />
                <Jewellery products={props.products} />
                <Electronics products={props.products} />
            </Col>
        </>
    )
}

interface allProductsProps {
    products: any[];
}