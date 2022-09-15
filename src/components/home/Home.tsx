import React from 'react'
import { Row } from 'react-bootstrap'
import About from '../about/About'
import Banner from '../banner/Banner'
import BigCats from '../products/categories/BigCats'
import ShopAll from '../util/ShopAll'


export default function Home(props: homeProps) {
    return (
        <div>
            <Banner />
            <div>
                <Row className='display-products-heading'>
                    <h2>Discover our Big Cat Range!</h2>
                </Row>
                <Row className="display-products">
                    <BigCats products={props.products} onAddToCart={props.onAddToCart} />
                </Row>
            </div>
            <ShopAll />
        </div>
    )
}

interface homeProps {
    products: any[];
    onAddToCart: (productId: string, quantity: number) => any

}