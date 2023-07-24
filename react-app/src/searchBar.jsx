//importing react from the react file
import React from "react"

//creating function component  for search bar
function SearchBar({search, setFilterdTansaction}) {
//returning the components
    return (
      <form style={{ padding: "5px", border: "1px solid blue", display: "flex", flexDirection: "column" }}>
        <input type="text" placeholder="Search...(description)" value={search} onChange={setFilterdTansaction}/>
      </form>
    )
}

//exporting search bar component
export default SearchBar