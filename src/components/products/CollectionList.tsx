import React, { useState } from 'react'
import { Col } from 'react-bootstrap';


export default function CollectionList() {
    const [activeLink, setActiveLink] = useState('');

    function onUpdateActiveLink(value: string) {
        setActiveLink(value)
    }

    return (
        <>
            <h3>Collection</h3>
            <a href='/products/allProducts' className={activeLink === 'allProducts' ? 'collection-list-active' : 'collection-list-inactive'} onClick={() => onUpdateActiveLink('all')}><div>All Products</div></a>
            <a href='/products/mens' className={activeLink === 'mens' ? 'collection-list-active' : 'collection-list-inactive'} onClick={() => onUpdateActiveLink('mens')}><div>Mens</div></a>
            <a href='/products/womens' className={activeLink === 'womens' ? 'collection-list-active' : 'collection-list-inactive'} onClick={() => onUpdateActiveLink('womens')}><div>Womens</div></a>
            <a href='/products/jewelery' className={activeLink === 'jewelery' ? 'collection-list-active' : 'collection-list-inactive'} onClick={() => onUpdateActiveLink('jewelery')}><div>Jewelery</div></a>
            <a href='/products/electronics' className={activeLink === 'electronics' ? 'collection-list-active' : 'collection-list-inactive'} onClick={() => onUpdateActiveLink('electronics')}><div>Electronics</div></a>
        </>
    )
}


