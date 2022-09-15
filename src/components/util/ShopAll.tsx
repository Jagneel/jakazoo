import React from 'react'
import { Button } from 'react-bootstrap'

export default function ShopAll() {
    return (
        <div className='shop-all'>
            <div className='line'></div>
            <div className="btn-container">
                <Button className='shop-all-btn' href='products/all-animals'>
                    See All Animals
                    </Button>
            </div>
        </div>
    )
}