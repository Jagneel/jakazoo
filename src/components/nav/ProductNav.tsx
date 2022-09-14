import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

export default function ProductNav() {
    return (
        <Navbar >
            <Container className='product-nav'>
                <h4 className='product-nav-heading'>Our Collection</h4>
                <Nav className='product-nav-links'>
                    <Nav.Link href="/products/all-animals" className='product-nav-link'>All Animals</Nav.Link>
                    <Nav.Link href="/products/big-cats" className='product-nav-link'>Big Cats</Nav.Link>
                    <Nav.Link href="/products/ungulates" className='product-nav-link'>Ungulates</Nav.Link>
                    <Nav.Link href="/products/bears" className='product-nav-link'>Bears</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
