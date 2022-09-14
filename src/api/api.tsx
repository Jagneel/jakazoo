import React, { useEffect, useState } from 'react'
import { commerce } from '../lib/commerce'

export default function useFetch() {
    const [data, setData] = useState<any>([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setData(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return data

}


