import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './cart.css';
import CartItem from './CartItem';


export default function Cart(props: propsCart) {

    const isEmpty = !props.cart.line_items.length;

    const EmptyCart = () => (
        <div className="cart-empty">
            <h3>You have no animals in the your cart, start adding some!</h3>
        </div>
    )

    const FilledCart = () => (
        <Col className='cart-display'>
            <Row>
                {props.cart.line_items.map((item => (
                    <Col key={item.id} className='cart-item'>
                        <CartItem
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                            quantity={item.quantity}
                            onUpdateCartQty={props.handleUpdateCartQty}
                            onRemoveFromCart={props.handleRemoveFromCart}
                        />
                    </Col>
                )))}
            </Row>
            <Row className='cart-total'>
                <Col>
                    Subtotal: {props.cart.subtotal.formatted_with_symbol}
                </Col>
            </Row>
            <Row className='cart-cta'>
                <Col className='cart-cta'>
                    <Button className='btn-cta' onClick={props.handleEmptyCart}>Empty Cart</Button>
                    <Button className='btn-cta'>Checkout</Button>
                </Col>
            </Row>
        </Col>
    )

    return (
        <Container>
            <div className="cart">
                <Row className='cart-heading'>
                    <h3>Your Animal Cart</h3>
                </Row>
                <Row className='shopping-cart'>
                    {isEmpty ? <EmptyCart /> : <FilledCart />}
                </Row>
            </div>
        </Container>
    )
}

interface propsCart {
    cart: {
        subtotal: {
            formatted_with_symbol: string
        };
        line_items: [{
            id: string;
            name: string;
            quantity: number;
            image: {
                url: string
            };
            price: {
                formatted_with_symbol: string;
            };
        }];
    }
    handleUpdateCartQty: (productId: string, quantity: number) => void;
    handleRemoveFromCart: (productId: string) => void;
    handleEmptyCart: () => void;
}