import { useState } from 'react'
import jsonData from '../data.json'
import ProductsTable from './ProductTable'
import SearchBar from './SearchBar'
import React from 'react'


function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [filteredProducts, setFilteredProducts] = useState("");
 
    
    const findProducts = (name) => {
        const listFiltered = products.filter(item => item.name.includes(name))
        setFilteredProducts(listFiltered)
          }

    return (
        <div >
            <h1>IronStore</h1>
             <SearchBar
              findProducts={findProducts}
               />
            

         {products.map((prd) => {
                return (
                    <ProductsTable products={prd} />
                )
            }
        )}

        </div>
    )
}

export default ProductsPage