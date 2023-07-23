import React from "react"

function SearchBar() {
    return (
      <form style={{ padding: "5px", border: "1px solid blue", display: "flex", flexDirection: "column" }}>
        <input type="text" placeholder="Search..." />
      </form>
    )
}

export default SearchBar