import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function CartItem(props: propsCartItem) {
    return (
        <Card className='cart-product'>
            <Card.Img className='cart-image' src={props.image.url} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.price.formatted_with_symbol}
                </Card.Text>
                <div className="item-quantity">
                    <Button className='a-r-btn' onClick={() => props.onUpdateCartQty(props.id, props.quantity - 1)}>-</Button>
                    <div className='cart-quantity'>{props.quantity}</div>
                    <Button className='a-r-btn' onClick={() => props.onUpdateCartQty(props.id, props.quantity + 1)}>+</Button>
                </div>
                <Button className='remove-btn' onClick={() => props.onRemoveFromCart(props.id)}>Remove</Button>
            </Card.Body>
        </Card>
    )
}

interface propsCartItem {
    id: string;
    name: string;
    quantity: number;
    image: {
        url: string
    };
    price: {
        formatted_with_symbol: string;
    };
    onUpdateCartQty: (productId: string, quantity: number) => void
    onRemoveFromCart: (productId: string) => void

}