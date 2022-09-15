import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

export default function Banner() {
    return (
        <section className='banner' id='home'>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <h1 className="banner-heading">Feeling Wild?</h1>
                    <h2>Explore our exotic collection ready for your adoption!</h2>
                    <Button href='/products/all-animals' type='button' className='shop-now-btn'>See Animals</Button>
                </Col>
            </Row>
        </section>

    )
}
