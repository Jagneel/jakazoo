import React from 'react'
import Select from 'react-select'

const options = [
    { value: 'Small', label: 'S' },
    { value: 'Medium', label: 'M' },
    { value: 'Large', label: 'L' },
    { value: 'X-Large', label: 'XL' }
]

export default function SelectSize() {
    return (
        <Select options={options} className='select-size' />
    )
}
