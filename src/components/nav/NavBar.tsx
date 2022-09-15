import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'

export default function NavBar(props: navBarProps) {
    const [activeLink, setActiveLink] = useState('/');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value: string) => {
        setActiveLink(value)
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container className={scrolled ? 'scrolled' : 'nav-bar'}>
                <Navbar.Brand href="/" id='logo'>Jakazoo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='nav-link-list'>
                    <Nav className="me-auto">
                        <Nav.Link href="/products/all-animals" className='nav-link'>Animals</Nav.Link>
                        <Nav.Link href="/about" className='nav-link'>About</Nav.Link>
                        <div className="nav-cart">
                            <Nav.Link href="/cart" className='nav-link'>Cart</Nav.Link>
                            <span className='nav-total'>{props.totalItems}</span>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

interface navBarProps {
    totalItems: number
}





{/* <Navbar expand="lg" id="navBar" className={scrolled ? "scrolled" : ''}>
<a href="/"><h1 id='logo'>Jakazoo</h1></a>
<Container className='nav-items'>
    <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggler-icon'></span>
    </Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="/products" className={activeLink === 'allProducts' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('allProducts')}>Shop</Nav.Link>
            <Nav.Link href="/#about" className={activeLink === 'about' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
            <div className="nav-cart">
                <Nav.Link href="/cart" className={activeLink === 'cart' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('cart')}>Cart</Nav.Link>
                <span>{props.totalItems}</span>
            </div>
        </Nav>
        {/* <span className="navbar-text">
            <div className="social-icon">
                <a href='#'><img src={navIcon2} alt='navicon2' /> </a>
                <a href='#'><img src={navIcon3} alt='navicon3' /></a>
            </div>
        </span> 
    </Navbar.Collapse >
</Container >
</Navbar > * /}*/}