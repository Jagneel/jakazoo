import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetch(url: string) {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setData(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [url])

    return data

}


