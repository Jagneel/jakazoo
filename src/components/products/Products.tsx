import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Outlet, useParams } from 'react-router'
import CollectionList from './CollectionList'

export default function Products(props: allProductsProps) {

    return (
        <section className='all-products' id='allProducts'>
            <Row className='align-items-center all-products-heading'>
                <Col>
                    <h2>All Products</h2>
                </Col>
            </Row>
            <Row className='product-display'>
                <Col xs={12} md={3} xl={2} className='collection-list'>
                    <div className="collection-list-total">
                        <CollectionList />
                    </div>
                </Col>
                <Col xs={12} md={9} xl={9} className='product-list'>
                    <div className="product-list-total">
                        <Outlet />
                    </div>
                </Col>
            </Row>
        </section>
    )
}

interface allProductsProps {
    products: any[];
}