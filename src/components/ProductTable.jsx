import React from 'react'

function ProductsTable ({data}) {
   
  
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
            <td>{data.name}</td>
            <td>{data.price}</td>
        </tr>
</tbody>
     </table>
      </div>    
  )
}

export default ProductsTable