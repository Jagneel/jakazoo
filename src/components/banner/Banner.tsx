import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

export default function Banner() {
    return (
        <section className='banner' id='home'>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <h1 className="banner-heading">Feeling Generous?</h1>
                    <h2>Discover our gifts that match any moment</h2>
                    <Button type='button' className='shop-now-btn'>Shop Now</Button>
                </Col>
            </Row>
        </section>

    )
}
