import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router';
import ProductNav from '../nav/ProductNav';
import BigCats from './categories/BigCats';
import Ungulates from './categories/Ungulates';
import Product from './Product/Product';
import './products.css';

export default function Products(props: propsProducts) {
    return (
        <Container className='product-page'>
            <Row >
                <Col className='product-heading'>
                    <h3>Our Animal Range</h3>
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                    <ProductNav />
                </Col>
                <Col className='product-display'>
                    <Outlet />

                </Col>
            </Row>
        </Container>
    )
}

interface propsProducts {
    products: any[];
    onAddToCart: (productId: string, quantity: number) => any
}