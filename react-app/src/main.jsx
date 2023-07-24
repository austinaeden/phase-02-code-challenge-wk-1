//importing components from different files
import React from 'react'
import ReactDOM from 'react-dom/client'
import FilterableProductTable from './App.jsx'

//rendering all components to the html file
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FilterableProductTable />
  </React.StrictMode>,
)
