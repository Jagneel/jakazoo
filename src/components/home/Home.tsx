import React from 'react'
import About from '../about/About'
import Banner from '../banner/Banner'
import ShopAll from '../util/ShopAll'


export default function Home(props: homeProps) {
    return (
        <div>
            <Banner />
            <ShopAll />
            <About />
        </div>
    )
}

interface homeProps {
    products: any[]
}