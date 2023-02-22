import React from 'react'

function ProductsTable ({products}) {
   
  
  return(
      <div>
     <table>
<thead>
<tr>
<th>Name</th>
<th>Price</th>
</tr>
</thead>
<tbody>
<tr>
            <td>{products.name}</td>
            <td>{products.price}</td>
        </tr>
</tbody>
     </table>
      </div>    
  )
}

export default ProductsTable