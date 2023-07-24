import React from "react"

function SearchBar({search, setFilterdTansaction}) {

    return (
      <form style={{ padding: "5px", border: "1px solid blue", display: "flex", flexDirection: "column" }}>
        <input type="text" placeholder="Search..." value={search} onChange={setFilterdTansaction}/>
      </form>
    )
}

export default SearchBar