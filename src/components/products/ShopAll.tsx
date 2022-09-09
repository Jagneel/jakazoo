import React from 'react'
import { Button } from 'react-bootstrap'

export default function ShopAll() {
    return (
        <div className='shop-all'>
            <div className='line'></div>
            <div className="btn-container">
                <Button className='shop-all-btn' href='/allProducts'>
                    Shop All Products
                    </Button>
            </div>
        </div>
    )
}
