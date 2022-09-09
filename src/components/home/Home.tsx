import React from 'react'
import Banner from '../banner/Banner'
import DisplayProducts from '../products/DisplayProducts'
import ShopAll from '../products/ShopAll'

export default function Home(props: homeProps) {
    return (
        <div>
            <Banner />
            <DisplayProducts products={props.products} />
            <ShopAll />
        </div>
    )
}

interface homeProps {
    products: any[]
}