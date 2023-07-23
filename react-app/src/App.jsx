import React from 'react'
import { useState } from 'react'

function FilterableProductTable() {
  return (
    <div style={{ padding: "5px", border: "1px solid orange"}}>
      <SearchBar />
      <ProductTable />
    </div>
  )
}

export default FilterableProductTable
