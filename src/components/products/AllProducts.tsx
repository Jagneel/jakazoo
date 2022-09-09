import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Electronics from './Electronics'
import Jewellery from './Jewellery'
import Mens from './Mens'
import Womens from './Womens'

export default function AllProducts(props: allProductsProps) {
    console.log(props.products)
    return (
        <section className='all-products' id='allProducts'>
            <Row className='align-items-center all-products-heading'>
                <Col xs={12} md={6} xl={7}>
                    <h2>All Products</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4} xl={4} className='collection-list'>
                    <h3>Collection</h3>
                    <a href='/collections/all'><div>All Products</div></a>
                    <a href='/collections/mens'><div>Mens</div></a>
                    <a href='/collections/womens'><div>Womens</div></a>
                    <a href='/collections/jewelery'><div>Jewelery</div></a>
                    <a href='/collections/electronics'><div>Electronics</div></a>
                </Col>
                <Col xs={12} md={8} xl={8} className='all-products-display'>
                    <Mens products={props.products} />
                    <Womens products={props.products} />
                    <Jewellery products={props.products} />
                    <Electronics products={props.products} />
                </Col>
            </Row>

        </section>
    )
}

interface allProductsProps {
    products: any[];
}