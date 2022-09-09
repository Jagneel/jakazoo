import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function Product(props: propsProduct) {
    return (
        <div>
            <Card className='image-display'>
                <div className="img-container">
                    <Card.Img className='card-img' src={props.image} />
                </div>
            </Card>
            <Card className="display-card" style={{ width: '18rem' }} >
                <Card.Body className='card-body'>
                    <Card.Title className='card-title'>{props.title}</Card.Title>
                    <Card.Text className='card-price'>
                        £{props.price}
                    </Card.Text>
                    <Button className='cart-btn'>Add To Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

interface propsProduct {
    id: number;
    price: number;
    title: string;
    image: string;
}
