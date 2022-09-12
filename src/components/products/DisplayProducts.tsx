import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

export default function DisplayProducts(props: propsProducts) {

    console.log(props.products)

    const homeProducts = []

    for (let i = 0; i < props.products.length; i++) {
        if (props.products[i].category === "men's clothing") {
            homeProducts.push(props.products[i])
        }
    }

    return (
        <section id='productsDisplay'>
            <div className="sub-heading">
                <h3>New arrivals for mens this season</h3>
            </div>

            <Row className='align-items-center season-products'>
                <Col xs={12} md={6} xl={8} className='products-display'>
                    {homeProducts.map((product: { id: number, title: string, image: string, price: number }) =>
                        <div className="product-card" key={product.id}>
                            <Card className='image-display'>
                                <div className="img-container">
                                    <Card.Img className='card-img' src={product.image} />
                                </div>
                            </Card>
                            <Card className="display-card" style={{ width: '18rem' }} >
                                <Card.Body className='card-body'>
                                    <Card.Title className='card-title'>{product.title}</Card.Title>
                                    <Card.Text className='card-price'>
                                        £{product.price}
                                    </Card.Text>
                                    <Button className='cart-btn'>Add To Cart</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )}
                </Col>
            </Row>
        </section>
    )
}

interface propsProducts {
    products: any[];
}
