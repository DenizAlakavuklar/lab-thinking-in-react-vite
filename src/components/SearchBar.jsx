import React from 'react'

function SearchBar ({findProducts}) {
     
   
  const handleSearch = (event) => {
    findProducts(event.target.value)
  }


    return(
        <div>
            <label>Search</label>
      <input type="text" onChange={handleSearch} />
  

        </div>    
    )
  }
  
  export default SearchBar