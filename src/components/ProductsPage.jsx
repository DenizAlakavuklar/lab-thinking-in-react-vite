import { useState } from 'react'
import jsonData from '../data.json'
import ProductsTable from './ProductTable'
import SearchBar from './SearchBar'
import React from 'react'


function ProductsPage() {
    const [products, setProducts] = useState(jsonData);

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar />

            {products.map((prd) => {
        return (
            <ProductsTable data={prd} />
         )
      }
            )} 

        </div>
    )
}

export default ProductsPage