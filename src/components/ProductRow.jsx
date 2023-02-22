import React from 'react'

function ProductRow({ item }) {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
        </tr>
    )
}

export default ProductRow